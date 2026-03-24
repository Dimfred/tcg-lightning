# TCG Lightning Public

- this is my release and landing page for tcg lightning a magic deck building app
- releases are in releases/
- I will use a Makefile to publish the releases, we track only the notes/ aka release notes
- the folder name is tcg-lightning-public, but the repo is tcg-lightning.git
- app is deployed in a container under <www.tcg-lightning.com> and <tcg-lightning.com>
- use the style of the page for newly generated components

## Working with the repo

- we have a `Makefile` to control everything
- `./scripts/create_conversion_image.sh` to convert images
- the homepage should load fast
- blogs, especially images, should be loaded on-demand, to keep the loading time up

## Packages

- always install with `bun add`, never with a specific version

## Blog Posts

- target of the blogpost is to increase indexable content for search engines
- always make sure that on mobile and desktop the content reads well
- when adding new blogs, always call /seo-optimization when we are done, and validate that the newly generated content is optimized
- `../tcg-lightning-xmage-bridge/` you have the bridge, you can check there for recent commits

## SEO

- `~/.claude/skills/seo-optimization/SKILL.md` when we discover new seo optimizations, we add them there
- when adding a new route, always add it to `static/sitemap.xml`
- <https://www.seobility.net/en/seocheck/check/?url=https%3A%2F%2Ftcg-lightning.com%2F&mode=standard>
- <https://www.screamingfrog.co.uk/seo-spider/>
