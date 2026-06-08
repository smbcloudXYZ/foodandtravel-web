<!-- LOGO -->
<p align="center">
  <img src="./public/web-app-manifest-192x192.png" alt="Fat app Logo" width="128">
</p>

<h1 align="center">Fat app</h1>

<p align="center">
  The public web home for Fat app.
  <br />
  A clean Astro site for app updates, store links, and product content around 4.5+ star restaurants.
  <br />
  <br />
  <a href="https://fatapp.5mb.app/">Website</a>
  ·
  <a href="https://apps.apple.com/se/app/fat-4-5-star-restaurants/id6754181320">App Store</a>
  ·
  <a href="https://play.google.com/store/apps/details?id=xyz.smbcloud.Fat app">Google Play</a>
  ·
  <a href="LICENSE">License</a>
</p>

<p align="center">
  <a href="https://smbcloud.xyz/"><img alt="Runs on smbCloud" src="https://img.shields.io/badge/Runs%20on-smbCloud-0f172a?style=for-the-badge"></a>
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
  <img alt="Astro 5" src="https://img.shields.io/badge/Astro-5-black?logo=astro">
  <img alt="Tailwind CSS 4" src="https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss&logoColor=white">
</p>

## About

`fatapp-web` is the public website for Fat app.

It is where Fat app lives on the web: app updates, launch posts, store links, and product pages for people looking for 4.5+ star restaurants.

## What this repo contains

- `src/pages/` — site routes
- `src/content/` — about page and posts
- `src/components/` — shared UI
- `public/` — icons, store badges, and static assets
- `.smb/config.toml` — smbCloud deploy configuration

## Local development

Requirements:

- Node.js `v24.12.0`
- `pnpm`

Install dependencies and start the dev server:

```sh
pnpm install
pnpm dev
```

Useful commands:

```sh
pnpm lint
pnpm build
pnpm preview
pnpm start-fatappweb
```

## Deploying with smbCloud

This repo includes `.smb/config.toml`.

Deploy from the repo root with:

```sh
smb deploy
```

## Copyright

© 2026 [smbCloud](https://smbcloud.xyz) (Splitfire AB).
