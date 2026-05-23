# Remote theme main-branch switch design

## Goal

Make the site track `bergerb/backpack@main` for both local development and deployed builds, then run the site locally with the existing Jekyll workflow.

## Current context

- The site is a GitHub Pages-style Jekyll project using `github-pages` and `jekyll-remote-theme`.
- `_config.yml` currently points `remote_theme` at a specific backpack commit SHA.
- `README.md` documents the local run command as `bundle exec jekyll serve`.

## Recommended approach

Update `_config.yml` so `remote_theme` uses `bergerb/backpack@main`.

Keep the rest of the Jekyll and Bundler setup unchanged unless Bundler requires dependency installation to run locally.

## Why this approach

- It matches the requested behavior directly.
- It keeps local and deployed behavior aligned.
- It avoids introducing a separate local-only override path that could drift from production behavior.

## Alternatives considered

### 1. Keep the remote theme pinned to a commit SHA

This is the most reproducible option, but it does not satisfy the request to switch to the theme's main branch.

### 2. Use `@main` only for local development

This preserves a stable deploy target while testing theme changes locally, but it intentionally creates different local and deployed behavior.

## Component changes

### `_config.yml`

- Change `remote_theme` from the current commit-pinned reference to `bergerb/backpack@main`.

### Local Jekyll run

- Use `bundle exec jekyll serve` from the repository root.
- If gems are missing, use the repository's Bundler setup to install them before starting the server.

## Error handling

- If Bundler reports missing gems, install the existing dependencies instead of changing versions speculatively.
- If the remote theme cannot be fetched from `main`, surface the error directly rather than falling back to a different ref.

## Validation

- Confirm Jekyll starts successfully from the repo root with the existing local command.
- Confirm the site is served locally at `http://localhost:4000/`.

## Scope

This change is intentionally limited to switching the remote theme ref and running the site locally. It does not include broader theme, content, or deployment workflow changes.
