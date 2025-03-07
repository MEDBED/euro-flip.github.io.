Project structure: CA -FRONT-END
src/
│── app/
│   ├── core/                   # Global services (location, auth, etc.)
│   │   ├── services/
│   │   │   ├── location.service.ts  # Detect user country
│   │   ├── core.module.ts
│   ├── shared/                 # Reusable components
│   │   ├── components/
│   │   │   ├── header/          # Header component
│   │   │   ├── footer/          # Footer component
│   │   ├── pipes/
│   │   ├── directives/
│   │   ├── shared.module.ts
│   ├── features/               # Feature modules (per country)
│   │   ├── north-america/
│   │   │   ├── usa
│   │   │   ├── north-america.module.ts
│   │   ├── europe/
│   │   │   ├── france/
│   │   │   │   ├── components/  #Specific components for the module
│   │   │   │   ├── services/    #Specific services the module
│   │   │   ├── germany/
│   │   │   ├── spain/
│   │   │   ├──europe.module.ts
│   ├── app.component.ts        # Main app entry
│   ├── app.module.ts           # Loads modules dynamically
│   ├── app-routing.module.ts   # Main app routing
│── assets/
│   ├── images/             # Stores all images
│   │   ├── logos/          # Brand logos
│   │   ├── icons/          # SVG or PNG icons
│   │   ├── backgrounds/    # Background images
│   │   ├── country-specific/
│   │   │   ├── usa/        # USA-specific images
│   │   │   ├── europe/
│   │   │   │   ├── france/
│   │   │   │   ├── germany/
│   │   │   │   ├── spain/
│   │   │   ├── asia/
│   │   │   ├── africa/
│   │   ├── placeholders/   # Placeholder images
│   ├── translations/       # i18n JSON files for localization
│   │   ├── en.json         # English
│   │   ├── fr.json         # French
│   │   ├── de.json         # German
│   │   ├── es.json         # Spanish
│   ├── styles/             # Global SCSS or CSS files
│   │   ├── themes/         # Theme-specific styles (light/dark mode)
│   │   ├── variables.scss  # SCSS variables (colors, fonts)
│   │   ├── mixins.scss     # SCSS mixins
│   │   ├── global.scss     # Global styles
│   ├── fonts/              # Custom fonts
│   │   ├── roboto/         # Example font family
│   │   ├── open-sans/      # Another font family
│   ├── icons/              # Standalone icon files (if not inside `images/icons/`)
│   ├── json-data/          # Static JSON data (e.g., currency rates, mock data)
│   │   ├── currency-rates.json
│   │   ├── countries.json
│   ├── videos/             # Video assets (tutorials, promo videos)
│   ├── docs/               # PDFs, documents, or manuals
│   ├── mock-api/           # Mock API responses (useful for testing)
│   │   ├── mock-pricing.json
│   │   ├── mock-users.json


