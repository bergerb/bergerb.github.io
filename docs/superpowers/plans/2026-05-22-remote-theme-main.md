# Remote Theme Main Branch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Switch the site's remote Jekyll theme reference to `bergerb/backpack@main` and run the site locally.

**Architecture:** Make a single targeted edit in `_config.yml` so the remote theme tracks the backpack repository's `main` branch. Then use the existing Bundler and Jekyll workflow from the repository root to start a local preview and confirm it serves on port 4000 without altering unrelated config.

**Tech Stack:** Jekyll, Bundler, GitHub Pages gems, YAML config, PowerShell on Windows

---

### Task 1: Switch the remote theme ref in `_config.yml`

**Files:**
- Modify: `_config.yml:105-108`
- Verify with: `README.md:7-13`

- [ ] **Step 1: Verify the config is not already using `@main`**

Run:

```powershell
rg -n "^remote_theme:" _config.yml
```

Expected: one matching line that ends in a commit SHA, not `@main`.

- [ ] **Step 2: Replace only the `remote_theme` line and preserve adjacent config**

Update `_config.yml` so the build settings block looks like this:

```yaml
markdown: kramdown
kramdown:
  hard_wrap: false
remote_theme: bergerb/backpack@main
```

- [ ] **Step 3: Confirm the diff is limited to the theme ref**

Run:

```powershell
git --no-pager diff -- _config.yml
```

Expected: the diff shows the `remote_theme` line changing from the current commit SHA to `bergerb/backpack@main`. Keep the existing `backpack.blog_eyebrow` entry and any unrelated local changes intact.

### Task 2: Start Jekyll locally and verify the site serves

**Files:**
- Use: `Gemfile`
- Use: `Gemfile.lock`
- Reference: `README.md:7-13`

- [ ] **Step 1: Install existing dependencies if Bundler reports missing gems**

Run:

```powershell
bundle install
```

Expected: Bundler completes successfully using the existing Gemfile. Do not add or remove gems unless Bundler requires a lockfile refresh to satisfy the current bundle.

- [ ] **Step 2: Start the local Jekyll server from the repository root**

Run:

```powershell
bundle exec jekyll serve --host 127.0.0.1
```

Expected: output includes a local server address for port 4000, such as `Server address: http://127.0.0.1:4000/`.

- [ ] **Step 3: Confirm the site responds over HTTP**

Run:

```powershell
curl http://127.0.0.1:4000/
```

Expected: an HTML response containing the page markup for the site home page.

- [ ] **Step 4: Commit the config change after the local preview succeeds**

Run:

```powershell
git add _config.yml
git commit -m "chore: track backpack theme main branch"
```

Expected: one commit containing the `_config.yml` change only.
