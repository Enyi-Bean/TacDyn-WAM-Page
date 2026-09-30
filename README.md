# TacDyn-WAM Project Page

A static academic project page following the local ADM-DP page layout. Uses its
vendored Bulma 0.9.1 CSS (MIT), a small custom stylesheet, and vanilla JavaScript.
No build step, CDN scripts, tracking, or external font requests are required.

## Preview

Run in the repository root:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. GitHub Pages serves the root of the main branch.

## Paper and images

- `assets/TacDyn-WAM.pdf` is the arXiv-version PDF.
- Figures are copied directly from `ICLR27_Enyi/arxiv_version/figures/`.
- Abstract, author order, affiliations, and results follow the paper.
- All simulation baseline rows are included, with pretrained methods labeled.
- The research Code button is pending until a research-code repository is supplied.

## Real-robot demo

The final section plays `assets/videos/real_robot_demo.mp4` (about 93 seconds,
6 MB). The source video is remuxed with fast-start metadata without re-encoding.
The portrait aspect ratio is preserved; the centered player is limited to 640px
or 72% of the viewport height, whichever is smaller. It has native controls,
muted playback, looping, a poster image, and no autoplay.

## Add the five real-world videos

Place MP4 files in `assets/videos/`. In `script.js`, set the corresponding
`src` field in `REAL_WORLD_VIDEOS`, for example:

```js
{ task: 'stack-cups', src: 'assets/videos/stack-cups.mp4' }
```

Reserved tasks and suggested filenames:

| Task | Filename |
| --- | --- |
| Stack Cups | stack-cups.mp4 |
| Remove Plug | remove-plug.mp4 |
| Insert Plug | insert-plug.mp4 |
| Unscrew Cup Lid | unscrew-cup-lid.mp4 |
| Wipe Whiteboard | wipe-whiteboard.mp4 |

Only configured slots become visible. Until then, there are no empty players or
missing video requests. Videos use native controls, muted playback, looping,
inline playback, and metadata-only preloading; autoplay is not enabled.

## Credits

Layout reference: [ADM-DP](https://enyi-bean.github.io/ADM-DP/), based on the
[Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template).
Bulma is distributed under the MIT license; see `assets/vendor/LICENSE-bulma`.
