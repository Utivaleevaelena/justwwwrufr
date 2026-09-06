# Just a Website — deploy to Vercel

Static site (no build step). Everything runs in the browser.

## Deploy

**Option A — drag & drop**
1. Download this `deploy` folder (zip).
2. Go to vercel.com → Add New → Project → deploy the folder, or drop the zip on vercel.com/new.
3. Framework preset: **Other** · Build command: **none** · Output directory: **/** (root). Deploy.

**Option B — CLI**
```
cd deploy
vercel        # preview
vercel --prod # production
```

## Contents
- `index.html` — entry point
- `privacy.html` — privacy policy (PL/EN/FR)
- `Just*.jsx` — page sections (transpiled in-browser via Babel)
- `image-slot.js` — image drop component
- `assets/` — case-study screenshots
- `ds/` — Pixel design-system stylesheet + tokens
- `vercel.json` — clean URLs

## Notes
- Contact + consultation forms post to a **Google Apps Script Web App** → rows land in a Google Sheet, with an email to `elena@pixelexpertsteam.com` and a WhatsApp notification (CallMeBot) to +48 884 037 664. Setup: see `GOOGLE_SHEET_SETUP.md`. The endpoint URL is already wired into `JustContact.jsx`.
- Language (PL default · EN · FR) and currency are handled client-side.
- A cookie/GDPR consent banner shows on first visit; `privacy.html` holds the policy.
- Fonts (Jersey 25, Archivo) load from Google Fonts — requires internet at runtime.
- The in-browser Babel transform is fine for launch; for max performance you can later pre-compile the JSX.
