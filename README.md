# Woteq Tools — Landing page

The hub page that links to every tool published under
<https://woteq-tools.github.io/>.

- **Live site:** <https://woteq-tools.github.io/>
- **Source:** <https://github.com/woteq-tools/woteq-tools.github.io>

## Tools listed on the page

| Tool | Live URL | Repo |
| --- | --- | --- |
| Flappy Bird | [/flappy-bird/](https://woteq-tools.github.io/flappy-bird/) | [flappy-bird](https://github.com/woteq-tools/flappy-bird) |
| Tic-Tac-Toe P2P | [/tic-tac-toe-p2p/](https://woteq-tools.github.io/tic-tac-toe-p2p/) | [tic-tac-toe-p2p](https://github.com/woteq-tools/tic-tac-toe-p2p) |
| PNG to ICO | [/png-to-ico/](https://woteq-tools.github.io/png-to-ico/) | [png-to-ico](https://github.com/woteq-tools/png-to-ico) |
| PNG to ICO (alt URL) | [/convert-png-to-ico/](https://woteq-tools.github.io/convert-png-to-ico/) | [convert-png-to-ico](https://github.com/woteq-tools/convert-png-to-ico) |
| Torch & Vibrate | [/phone-test-app/](https://woteq-tools.github.io/phone-test-app/) | [phone-test-app](https://github.com/woteq-tools/phone-test-app) |
| Woteq CodePicker | [/codepicker/](https://woteq-tools.github.io/codepicker/) | [codepicker](https://github.com/woteq-tools/codepicker) |
| Hello World | [/hello-world/](https://woteq-tools.github.io/hello-world/) | [hello-world](https://github.com/woteq-tools/hello-world) |

Source-only projects are listed in the "More projects" section:
[brain-training-game](https://github.com/woteq-tools/brain-training-game) and
[ADHD-time-tracker-for-windows](https://github.com/woteq-tools/ADHD-time-tracker-for-windows).

## Layout

```
index.html                    the page
assets/css/style.css          styles (light/dark via prefers-color-scheme)
assets/js/app.js              category filter + live search
assets/favicon.svg            site icon
```

## Adding a tool

1. Create the tool's repo and publish it to GitHub Pages.
2. Add a `<article class="card">` to the grid in `index.html` with:
   - `data-category` — one of `utility`, `game`, `developer`, `starter`
   - `data-tags` — extra keywords for the search box
   - a `.card-link` pointing at the live URL, and a `.src` link to the repo
3. If the tool is in a new category, add a matching `.chip` button to `.filters`.

The counter in the hero section updates itself from the number of cards.

## Publishing

The site is published from the `main` branch, at the repository root, by the
**Deploy Pages** GitHub Actions workflow. Pages settings live at
[Settings → Pages](https://github.com/woteq-tools/woteq-tools.github.io/settings/pages)
with source **GitHub Actions**.

```bash
git clone git@github.com:woteq-tools/woteq-tools.github.io.git
cd woteq-tools.github.io
# edit index.html
git commit -am "Update site"
git push origin main
```
