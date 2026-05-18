# Al Wataniya Broker Portal (Angular)

Broker login portal for Al Wataniya Insurance, built with **Angular 17**.

## Development

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Build

```bash
npm run build
```

Output: `dist/broker-portal/`

## Project structure

```
src/
├── app/
│   ├── core/
│   │   ├── constants/portal.assets.ts   # Branding & image paths
│   │   ├── models/login-credentials.model.ts
│   │   └── services/auth.service.ts       # Auth API integration point
│   ├── features/
│   │   ├── login/                         # Login form panel
│   │   └── brand-panel/                   # Brand / marketing panel
│   ├── i18n/portal-copy.ts                # EN / AR copy
│   ├── shared/components/
│   │   ├── brand-logo/                    # In-app header logo
│   │   ├── honeycomb-deco/                # Form decoration
│   │   └── lang-switch/                   # EN / ع toggle
│   ├── app.component.*                    # Shell layout
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/branding/
│   ├── alwataniya-logo-app.png            # In-app header logo
│   ├── alwataniya-logo-favicon.png        # Browser tab icon
│   └── brand-background.avif              # Brand panel background
├── environments/                          # API URL configuration
└── styles.scss
fonts/                                     # Poppins & Cairo webfonts
scripts/build-portal-styles.mjs            # Regenerate portal CSS from React source
```

## Integration guide (for receiving team)

1. **Authentication** — Replace the mock in `src/app/core/services/auth.service.ts` with a real `HttpClient` call to your broker login API. Use `environment.apiUrl` from `src/environments/`.

2. **Environment** — Set `apiUrl` in:
   - `src/environments/environment.ts` (development)
   - `src/environments/environment.production.ts` (production build)

3. **Logo & branding** — Two logo versions (same brand, different use):
   - **In-app header** — `PORTAL_ASSETS.logoApp` → `assets/branding/alwataniya-logo-app.png`
   - **Browser tab / favicon** — `PORTAL_ASSETS.logoFavicon` → `assets/branding/alwataniya-logo-favicon.png` (also referenced in `src/index.html`)
   - **Background** — `PORTAL_ASSETS.background` → `assets/branding/brand-background.avif`

4. **Copy / i18n** — All UI strings are in `src/app/i18n/portal-copy.ts`. Default language is Arabic (`ar`).

5. **What to exclude when sharing** — Do not ship `node_modules/`, `dist/`, or `.angular/`. Recipients run `npm install` locally.

## Notes

- Login currently validates non-empty email/password with a simulated delay (`mockAuthDelayMs`).
- Default language is Arabic; users switch via the EN/ع control on the brand panel.
