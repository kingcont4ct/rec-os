# Red eYe Clique OS

This repository contains the **Red eYe Clique Operating System**, a single–page web app for finding your Red Zone, logging daily missions, exploring product roadmaps and viewing brand assets.  It’s a static site designed for GitHub Pages or any other static hosting platform.

## Structure

```
index.html          # main application
404.html            # fallback copy of index.html for broken links
.nojekyll           # tells GitHub Pages not to run Jekyll
assets/
  docs/             # additional documents referenced from the app
  audio/            # audio files used in the resources section
  img/              # logos and other images used in the app
README.md
```

## Updating content

* **Editing the app:** open `index.html` in your text editor and modify the HTML/CSS/JS as needed.  Most of the data (pillars, moods, missions, roadmap, logos) lives in JavaScript objects near the top of the file.  After editing, commit and push to `main`; GitHub Pages will redeploy automatically.
* **Adding docs or audio:** drop new files into `assets/docs/` or `assets/audio/` and reference them in `index.html` via relative paths (e.g. `assets/docs/new-file.html`).  Don’t forget to commit the new files.
* **Replacing logos:** add or replace files in `assets/img/` and update the `LOGOS` array in `index.html` to point to the new filenames.
* **Page anchors:** the navigation links use section IDs (e.g. `#finder`, `#missions`).  Keep these IDs if you modify section structure so in–page navigation continues to work.

## Local preview

You can run a quick local server to preview changes before pushing:

```bash
python3 -m http.server 8080
# then open http://localhost:8080/index.html in your browser
```

## Rollback

If something goes wrong after an update, you can revert the last commit:

```bash
git revert HEAD
git push
```

That will undo your latest changes and redeploy the previous version.