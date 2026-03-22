# Objavljivanje na GitHub i Cloudflare Pages

Ovaj projekat je statički sajt: HTML, generisani `css/styles.css`, JavaScript i slike. Node.js vam treba **samo na računaru** za `npm run build` kada menjate stilove.

---

## 1. Priprema (jednom)

1. Instalirajte [Git](https://git-scm.com/download/win).
2. Instalirajte [Node.js](https://nodejs.org/) (LTS) ako želite da ponovo generišete CSS posle izmena u `src/input.css` ili novih Tailwind klasa u HTML-u.

---

## 2. GitHub — novi repozitorijum i slanje koda

### 2.1. Napravite repozitorijum na GitHubu

1. Ulogujte se na [github.com](https://github.com).
2. **+** → **New repository**.
3. Ime npr. `naj-naj-nudle`, **Public** (ili Private).
4. **Ne** čekirajte „Add a README“ ako već imate fajlove lokalno — smanjuje konflikte pri prvom `push`-u.
5. Klik **Create repository**.

### 2.2. Lokalno: `git init` i prvi commit

U PowerShell-u (prilagodite putanju ako je drugačija):

```powershell
cd "C:\Users\LUCID\Documents\NajNajNudle"
git init
git add .
git commit -m "Initial commit: Naj Naj Nudle sajt"
git branch -M main
```

Povežite udaljeni repozitorijum (zamenite `KORISNIK` i `naj-naj-nudle`):

```powershell
git remote add origin https://github.com/KORISNIK/naj-naj-nudle.git
git push -u origin main
```

Ako Git traži prijavu, koristite **Personal Access Token** (GitHub → Settings → Developer settings → Personal access tokens) umesto lozinke, ili GitHub Desktop.

### 2.3. Kasnije izmene

```powershell
git add .
git status
git commit -m "Kratak opis izmene"
git push
```

---

## 3. Cloudflare Pages

### 3.1. Nalog

1. Nalog na [cloudflare.com](https://www.cloudflare.com/) (besplatan plan je dovoljan za Pages).

### 3.2. Povezivanje sa GitHubom

1. U Cloudflare kontrolnoj tabli: **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Dozvolite Cloudflare-u pristup GitHub nalogu i izaberite repozitorijum `naj-naj-nudle`.
3. Izaberite granu **`main`**.

### 3.3. Podešavanje build-a (izaberite jednu varijantu)

**Varijanta A — najjednostavnija (preporuka ako ne želite build na Cloudflare-u)**

- Uvek pre `git push` lokalno pokrenite:

  ```powershell
  npm run build
  ```

  Tako je `css/styles.css` ažuriran i **commitovan** u repozitorijum.

- U Cloudflare Pages:
  - **Framework preset**: `None`
  - **Build command**: ostavite **prazno**
  - **Build output directory**: `/` (koren projekta, gde su `index.html`, `meni.html`, …)

**Varijanta B — build na Cloudflare-u**

- **Build command**: `npm ci && npm run build`
- **Build output directory**: `/` (i dalje koren, jer HTML nije u `dist/`)

Node verzija na Pages obično je dovoljna za Tailwind CLI; ako build padne, u Cloudflare projektu dodajte **Environment variable** ili **Pages** → **Settings** → **Environment variables** po potrebi, ili ostanite na varijanti A.

### 3.4. Domen (opciono)

- **Custom domains** u okviru Pages projekta → dodajte svoj domen i pratite DNS uputstva Cloudflare-a.

---

## 4. Provera posle deploy-a

- Otvorite dodeljenu `*.pages.dev` adresu.
- Proverite sve stranice: Početna, Meni, O nama, Lokacija, Kontakt.
- Na mobilnom proverite hamburger meni i parallax (ili isključite animacije u sistemu — sajt poštuje „smanji pokret“).

---

## 5. Česta pitanja

**Zaboravio/la sam `npm run build` pre push-a**  
Sajt će raditi starim CSS-om. Pokrenite `npm run build`, pa `git add css/styles.css`, `git commit`, `git push`.

**Forma na Kontakt strani**  
Otvara lokalni program za e-poštu (`mailto:`). Za slanje bez toga treba dodatni servis (npr. Cloudflare Worker, Formspree, itd.).

**Mape**  
U `lokacija.html` zamenite `iframe` ili link Google Maps embedom za tačnu adresu vašeg objekta.
