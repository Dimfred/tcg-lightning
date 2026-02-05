.ONESHELL:
SHELL := /bin/bash
.PHONY: build releases install dev

all: help

################################################################################
# APP
init: ## install dependencies
	bun install

dev: ## run the development server
	bun run dev

build: ## build the Svelte project for production
	bun run build

################################################################################
# RELEASE
release: ## publish latest release from releases/ folder
	@echo "Finding latest release..."
	@VERSION=$$(ls -1 releases/ | grep -oP 'tcg-lightning_\K[0-9.]+' | sort -V | tail -n1); \
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
		gh release create "v$$VERSION" releases/tcg-lightning_$${VERSION}_* \
			--title "v$$VERSION" \
			--notes-file "$$NOTES_FILE" \
			--latest; \
	else \
		echo "Release cancelled"; \
		exit 1; \
	fi

################################################################################
# HELP
help: ## print this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}'

