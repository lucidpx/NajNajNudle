# Naj Naj Nudle — statički sajt

## Struktura

| Put | Značenje |
|-----|----------|
| **`site/`** | **Javni koren** za hosting i lokalni pregled. Sve URL putanje iz HTML-a (`/application/…`, `/updates/…`, `/branding/…`) su relativne ovom folderu. |
| `site/index.html` | Početna (`/`) |
| `site/meni/index.html` | Jelovnik (`/meni`) |
| `site/onama/index.html` | O nama (`/onama`) |
| `site/porucivanje/index.html` | Poručivanje (`/porucivanje`) |
| `site/kontakt/index.html` | Kontakt (`/kontakt`) |
| `site/en/index.html`, `site/vi/index.html` | Jezičke varijante ako ih koristite |
| `site/application/` | Tema, CSS keš, slike, favicon (Concrete5 izvoz) |
| `site/updates/` | jQuery, Font Awesome, ostatak CMS asset-a |
| `site/branding/` | Logo fajlovi |
| `web/` | **Opciono** — zaseban Next.js projekat; nije deo ovog statičkog sajta. |


## Lokalno pokretanje

```bash
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000). Koristi se [`serve`](https://github.com/vercel/serve) nad folderom `site/`.

## Gde menjati sadržaj

- **Tekstovi i blokovi stranica:** odgovarajući `site/**/index.html` (ili koren `site/index.html`).
- **Globalni stil:** keširani preset CSS u `site/application/files/cache/css/` i resursi teme u `site/application/themes/` (nazivi potfoldera kao u CMS izvozu — ne menjati ručno ako hostuješ statički mirror).
- **Novi logo:** zameni fajlove u `site/branding/` i po potrebi ažuriraj `<img src="/branding/...">` u HTML-u.
- **Nove slike u sadržaju:** tipično pod `site/application/files/...` (kao na originalnom CMS mirroru); dodaj fajl i ažuriraj `src` u HTML-u.

## Deploy (npr. Cloudflare Pages)

U Cloudflare dashboardu (**Settings → Builds**):

- **Framework preset:** None
- **Build command:** `npm run cf-pages-build` (ili u Linux okruženju i `exit 0` — [preporuka iz dokumentacije](https://developers.cloudflare.com/pages/configuration/build-configuration/); prazno polje može da izazove neuspeh builda)
- **Build output directory:** `site` (bez vodeće kose crte)

Ako build i dalje padne na kloniranju, proveri **Deployments → poslednji pokušaj → Build log** (ne „Retry“ na starom crvenom redu ako je commit stariji od `main`).

**Cloudflare Pages:** pojedinačni fajl mora biti **≤ 25 MiB**. Veće PDF-ove drži van repozitorijuma (npr. R2, Dropbox, Google Drive) i linkuj ih u HTML-u.

---

*Stack: čist statički HTML + asseti; nema build koraka za glavni sajt.*
