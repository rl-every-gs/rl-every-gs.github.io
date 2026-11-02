# RL Every GS — Project Websites

This repository contains the project websites for RL Every GS. Research code and reproduction instructions are maintained separately in [rl-every-gs/rlgs](https://github.com/rl-every-gs/rlgs).

## RLGS

The RLGS paper website is in [`rlgs/`](rlgs/):

```text
rlgs/
├── index.html
├── styles.css
├── script.js
└── assets/
```

- Current shared website: [RLGS project page](https://rlgs-share-ad5bebf9f9504206.lizhan416824.chatgpt.site/).
- Planned GitHub Pages address: `https://rl-every-gs.github.io/rlgs/`.
- This repository is private and GitHub Pages is disabled. The planned address is not published.

## Local Preview

No build step is required. Open `rlgs/index.html` directly, or run the following command from the repository root:

```bash
python -m http.server 4174 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4174/rlgs/`.

## Migration

The website files were copied without content changes from `rl-every-gs/rlgs` at commit `8044f14`. Moving these files does not update the existing shared website or enable GitHub Pages.
