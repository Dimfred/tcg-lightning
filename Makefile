.ONESHELL:
SHELL := /bin/bash
.PHONY: build releases install dev

all: help

################################################################################
# APP
init: ## install dependencies
	bun install

dev: ## run the development server
	bun run dev --host 0.0.0.0

build: ## build the Svelte project for production
	bun run build

create-images: ## create images
	scripts/create_conversion_image.sh

format: ## format code
	prettier --write "src/**/*.{svelte,ts,js}"

################################################################################
# RELEASE
release: ## publish latest release from releases/ folder
	@echo "Finding latest release..."
	@VERSION=$$(ls -1 releases/ | grep -oP 'tcg-lightning_\K[0-9]+\.[0-9]+\.[0-9]+' | sort -V | tail -n1); \
	if [ -z "$$VERSION" ]; then \
		echo "Error: No releases found in releases/ folder"; \
		exit 1; \
	fi; \
	echo "Latest version: $$VERSION"; \
	echo ""; \
	echo "Files to publish:"; \
	ls -lh releases/ | grep "$$VERSION"; \
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
		gh release create "v$$VERSION" releases/*tcg-lightning_$${VERSION}* \
			--title "v$$VERSION" \
			--notes-file "$$NOTES_FILE" \
			--latest; \
	else \
		echo "Release cancelled"; \
		exit 1; \
	fi

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

