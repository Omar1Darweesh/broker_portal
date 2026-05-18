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
