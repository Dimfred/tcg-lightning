.ONESHELL:
SHELL := /bin/bash
.PHONY: all help dev build preview docker docker-build docker-push releases

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
PROJECT_NAME := tcg-lightning
CONTAINER_NAME := website
IMAGE_REGISTRY := registry.fugashu.dev
IMAGE_NAME := $(PROJECT_NAME)/$(CONTAINER_NAME)
RELEASE_DATE := $(shell date -u +'%Y-%m-%dT%H:%M:%SZ')
RELEASE_DATE_TAG := $(shell date -u +'%Y-%m-%dT%H-%M-%SZ')

UNAME := $(shell uname -s)
ifeq ($(UNAME),Darwin)
	DOCKER := docker-buildx
else
	DOCKER := docker buildx
endif

docker: docker-build docker-push ## build and push docker image

docker-build: ## Build the docker image, extra args with DOCKER_ARGS=...
	$(DOCKER) \
		build \
		$${DOCKER_ARGS} \
		--network host \
		--build-arg BUILD_DATE=$(RELEASE_DATE) \
		-t $(IMAGE_NAME):$(RELEASE_DATE_TAG) \
		-t $(IMAGE_NAME):latest \
		-t $(IMAGE_REGISTRY)/$(IMAGE_NAME):$(RELEASE_DATE_TAG) \
		-t $(IMAGE_REGISTRY)/$(IMAGE_NAME):latest \
		.

docker-push: ## push docker image to registry
	docker image push $(IMAGE_REGISTRY)/$(IMAGE_NAME):latest \
		&& docker image push $(IMAGE_REGISTRY)/$(IMAGE_NAME):$(RELEASE_DATE_TAG)

docker-up: ## start with docker compose
	docker compose up -d

docker-down: ## stop docker compose
	docker compose down

################################################################################
# RELEASE
release: ## publish latest release from releases/ folder
	@echo "Finding latest release..."
	@VERSION=$$(ls -1 releases/ | grep -v '\-rc' | sed -n 's/.*tcg-lightning_\([0-9]*\.[0-9]*\.[0-9]*\).*/\1/p' | sort -V | uniq | tail -n1); \
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
	@RC_TAG=$$(ls -1 releases/ | sed -n 's/.*tcg-lightning_\([0-9]*\.[0-9]*\.[0-9]*-rc[0-9]*\).*/\1/p' | sort -V | uniq | tail -n1); \
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
	@set -e && \
	echo "Finding latest release..." && \
	VERSION=$$(ls -1 releases/ | sed -n 's/.*tcg-lightning_\([0-9]*\.[0-9]*\.[0-9]*\).*/\1/p' | sort -V | uniq | tail -n1) && \
	if [ -z "$$VERSION" ]; then echo "Error: No releases found in releases/ folder"; exit 1; fi && \
	DEB_FILE="releases/linux-tcg-lightning_$${VERSION}_amd64.deb" && \
	if [ ! -f "$$DEB_FILE" ]; then echo "Error: .deb file not found: $$DEB_FILE"; exit 1; fi && \
	echo "Updating AUR package for version $$VERSION" && \
	SHA256=$$(shasum -a 256 "$$DEB_FILE" | awk '{print $$1}') && \
	echo "SHA256: $$SHA256" && \
	sed -i.bak "s/^pkgver=.*/pkgver=$$VERSION/" aur-package/PKGBUILD && rm -f aur-package/PKGBUILD.bak && \
	sed -i.bak "s/^sha256sums=.*/sha256sums=('$$SHA256')/" aur-package/PKGBUILD && rm -f aur-package/PKGBUILD.bak && \
	echo "Generating .SRCINFO..." && \
	printf '%s\n' \
		"pkgbase = tcg-lightning-bin" \
		"	pkgdesc = Magic: The Gathering deck building app with Scryfall, EDHREC, Archidekt, Commander Spellbook support and AI-powered suggestions" \
		"	pkgver = $$VERSION" \
		"	pkgrel = 1" \
		"	url = https://github.com/Dimfred/tcg-lightning" \
		"	arch = x86_64" \
		"	license = custom" \
		"	depends = webkit2gtk-4.1" \
		"	depends = gtk3" \
		"	provides = tcg-lightning" \
		"	conflicts = tcg-lightning" \
		"	source = tcg-lightning-bin-$$VERSION.deb::https://github.com/Dimfred/tcg-lightning/releases/download/v$$VERSION/linux-tcg-lightning_$${VERSION}_amd64.deb" \
		"	sha256sums = $$SHA256" \
		"" \
		"pkgname = tcg-lightning-bin" > aur-package/.SRCINFO && \
	echo "Copying to AUR repo..." && \
	cp aur-package/PKGBUILD ../tcg-lightning-bin/PKGBUILD && \
	cp aur-package/.SRCINFO ../tcg-lightning-bin/.SRCINFO && \
	echo "Cleaning up build artifacts..." && \
	cd aur-package && rm -rf src/ pkg/ *.pkg.tar.zst *.deb && cd .. && \
	git add aur-package notes && \
	git commit -m "Bump to $$VERSION" && \
	echo "AUR package updated successfully!" && \
	echo "" && \
	echo "Committing to AUR repo..." && \
	cd ../tcg-lightning-bin && \
	git add PKGBUILD .SRCINFO && \
	git commit -m "Bump to $$VERSION" && \
	git push

################################################################################
# HELP
help: ## print this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}'

