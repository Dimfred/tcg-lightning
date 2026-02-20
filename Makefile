.ONESHELL:
SHELL := /bin/bash
.PHONY: all help dev build preview docker docker-build docker-push releases

PROJECT_NAME := tcg-lightning
CONTAINER_NAME := website
IMAGE_REGISTRY := registry.fugashu.dev
IMAGE_TAG := $(IMAGE_REGISTRY)/$(PROJECT_NAME)/$(CONTAINER_NAME)

all: help

################################################################################
# APP
init: ## install dependencies
	bun install

dev: ## run the development server
	bun run dev --host 0.0.0.0

build: ## build the Svelte project for production
	NODE_ENV=production bun run build

preview: build
	bun run preview

create-images: ## create images
	scripts/create_conversion_image.sh

format: ## format code
	prettier --write "src/**/*.{svelte,ts,js}"

################################################################################
# DOCKER
docker: docker-build docker-push ## build and push docker image

docker-build: ## build docker image
	docker build -t $(IMAGE_TAG):latest .

docker-push: ## push docker image to registry
	docker push $(IMAGE_TAG):latest

docker-up: ## start with docker compose
	docker compose up -d

docker-down: ## stop docker compose
	docker compose down

################################################################################
# RELEASE
release: ## publish latest release from releases/ folder
	@echo "Finding latest release..."
	@VERSION=$$(ls -1 releases/ | grep -v '\-rc' | grep -oP 'tcg-lightning_\K[0-9]+\.[0-9]+\.[0-9]+' | sort -V | tail -n1); \
	if [ -z "$$VERSION" ]; then \
		echo "Error: No releases found in releases/ folder"; \
		exit 1; \
	fi; \
	echo "Latest version: $$VERSION"; \
	echo ""; \
	echo "Files to publish:"; \
	ls -lh releases/ | grep "$$VERSION" | grep -v '\-rc'; \
	echo ""; \
	read -p "Publish release v$$VERSION? [y/N] " -n 1 -r; \
	echo ""; \
	if [[ $$REPLY =~ ^[Yy]$$ ]]; then \
		NOTES_FILE="notes/$$VERSION.md"; \
		if [ ! -f "$$NOTES_FILE" ]; then \
			echo "Error: No notes file found at $$NOTES_FILE"; \
			echo "Please create release notes before publishing."; \
			exit 1; \
		fi; \
		echo "Publishing release v$$VERSION..."; \
		gh release create "v$$VERSION" $$(ls releases/*tcg-lightning_$${VERSION}* | grep -v '\-rc') \
			--title "v$$VERSION" \
			--notes-file "$$NOTES_FILE" \
			--latest; \
	else \
		echo "Release cancelled"; \
		exit 1; \
	fi
	$(MAKE) release-aur

release-dev: ## publish dev release as RC (no --latest flag)
	@echo "Finding latest RC release..."
	@RC_TAG=$$(ls -1 releases/ | grep -oP 'tcg-lightning_\K[0-9]+\.[0-9]+\.[0-9]+-rc[0-9]+' | sort -V | tail -n1); \
	if [ -z "$$RC_TAG" ]; then \
		echo "Error: No RC releases found in releases/ folder"; \
		exit 1; \
	fi; \
	echo ""; \
	echo "Files to publish:"; \
	ls -lh releases/ | grep "$$RC_TAG"; \
	echo ""; \
	echo "Publishing dev release v$$RC_TAG..."; \
	gh release create "v$$RC_TAG" releases/*tcg-lightning_$${RC_TAG}* \
		--title "v$$RC_TAG" \
		--notes "" \
		--prerelease

################################################################################
# AUR
release-aur: ## update AUR package with correct version and hash
	@echo "Finding latest release..."
	@VERSION=$$(ls -1 releases/ | grep -oP 'tcg-lightning_\K[0-9]+\.[0-9]+\.[0-9]+' | sort -V | tail -n1); \
	if [ -z "$$VERSION" ]; then \
		echo "Error: No releases found in releases/ folder"; \
		exit 1; \
	fi; \
	DEB_FILE="releases/linux-tcg-lightning_$${VERSION}_amd64.deb"; \
	if [ ! -f "$$DEB_FILE" ]; then \
		echo "Error: .deb file not found: $$DEB_FILE"; \
		exit 1; \
	fi; \
	echo "Updating AUR package for version $$VERSION"; \
	SHA256=$$(sha256sum "$$DEB_FILE" | awk '{print $$1}'); \
	echo "SHA256: $$SHA256"; \
	sed -i "s/^pkgver=.*/pkgver=$$VERSION/" aur-package/PKGBUILD; \
	sed -i "s/^sha256sums=.*/sha256sums=('$$SHA256')/" aur-package/PKGBUILD; \
	echo "Generating .SRCINFO..."; \
	cd aur-package && makepkg --printsrcinfo > .SRCINFO && cd ..; \
	echo "Copying to AUR repo..."; \
	cp aur-package/PKGBUILD ../tcg-lightning-bin/PKGBUILD; \
	cp aur-package/.SRCINFO ../tcg-lightning-bin/.SRCINFO; \
	echo "Cleaning up build artifacts..."; \
	cd aur-package && rm -rf src/ pkg/ *.pkg.tar.zst *.deb && cd ..; \
	git add aur-package notes; \
	git commit -m "Bump to $$VERSION"; \
	echo "AUR package updated successfully!"; \
	echo ""; \
	echo "Committing to AUR repo..."; \
	cd ../tcg-lightning-bin && \
	git add PKGBUILD .SRCINFO && \
	git commit -m "Bump to $$VERSION" && \
	git push

################################################################################
# HELP
help: ## print this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}'

