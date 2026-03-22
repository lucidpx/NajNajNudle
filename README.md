# Naj Naj Nudle — statički sajt

## Struktura

| Put | Značenje |
|-----|----------|
| **`site/`** | **Javni koren** za hosting i lokalni pregled. Sve URL putanje iz HTML-a (`/application/…`, `/updates/…`, `/branding/…`) su relativne ovom folderu. |
| `site/index.html` | Početna (`/`) |
| `site/speisekarte/index.html` | Jelovnik (`/speisekarte`) |
| `site/ueber-uns/index.html` | O nama (`/ueber-uns`) |
| `site/essen-bestellen/index.html` | Poručivanje (`/essen-bestellen`) |
| `site/kontakt/index.html` | Kontakt (`/kontakt`) |
| `site/kontakt/impressum/index.html` | Impresum |
| `site/kontakt/agb-datenschutz/index.html` | Uslovi i zaštita podataka |
| `site/kontakt/vielen-dank/index.html` | Hvala (nakon forme) |
| `site/en/index.html`, `site/vi/index.html` | Jezičke varijante ako ih koristite |
| `site/application/` | Tema, CSS keš, slike, favicon (Concrete5 izvoz) |
| `site/updates/` | jQuery, Font Awesome, ostatak CMS asset-a |
| `site/branding/` | Logo fajlovi |
| `web/` | **Opciono** — zaseban Next.js projekat; nije deo ovog statičkog sajta. |

Izvorni skrej p je u `PlayWrightMCP\scrape\`; ovde je preslikan samo ono što treba za produkciju (bez `manifest.json` skrejpa i bez `sitemap.xml` sa tuđim domenom).

## Lokalno pokretanje

```bash
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000). Koristi se [`serve`](https://github.com/vercel/serve) nad folderom `site/`.

## Gde menjati sadržaj

- **Tekstovi i blokovi stranica:** odgovarajući `site/**/index.html` (ili koren `site/index.html`).
- **Globalni stil (tema Saigon):** uglavnom `site/application/files/cache/css/saigon/presets/main.css` i `responsive.css`, plus `site/application/themes/saigon/`.
- **Novi logo:** zameni fajlove u `site/branding/` i po potrebi ažuriraj `<img src="/branding/...">` u HTML-u.
- **Nove slike u sadržaju:** tipično pod `site/application/files/...` (kao na originalnom CMS mirroru); dodaj fajl i ažuriraj `src` u HTML-u.

## Deploy (npr. Cloudflare Pages)

- **Build command:** prazno ili `exit 0`
- **Output directory:** `site`

---

*Stack: čist statički HTML + asseti; nema build koraka za glavni sajt.*
