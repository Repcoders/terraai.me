# Terra

Marketing site for **Terra** — parent of **ForgeAI** (live) and **ForgeIDE** (in development).

## Structure

```
terra-site/
├── index.html              # Page markup
├── assets/
│   ├── css/style.css       # All styles (design tokens at the top)
│   ├── js/main.js          # Typing effect, scroll reveal, footer year
│   └── images/
│       ├── terra-logo.png
│       └── forgeai-screenshot.png
└── README.md
```

## Running locally

No build step — it's plain HTML/CSS/JS. Just serve the folder:

```bash
cd terra-site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploying to GitHub Pages

1. Push this folder's contents to the root of `Repcoders/terraai.me`.
2. In the repo settings, enable **Pages** → source: `main` branch, root.
3. Point your `terraai.me` domain at GitHub Pages (CNAME file or DNS as needed).

## Editing

- Colors, fonts, spacing: `assets/css/style.css` (top of the file — `:root` block).
- Copy: edit directly in `index.html`.
- ForgeIDE section is marked as "Currently under development" — update the
  `#forgeide` section once you have real product details.
