import fs from 'fs';

const sourcePath = 'c:/Omar/Work/Watanya/alwataniya-source/customer-portal/src/index.css';
const outPath = 'src/styles/_portal.scss';

let css = fs.readFileSync(sourcePath, 'utf8');
css = css.replace(/#root/g, 'app-root');

// Fonts + lang typography live in styles.scss (/fonts/*); skip React copies.
const tokensIndex = css.indexOf('/* ============================================================\n   DESIGN TOKENS');
if (tokensIndex > 0) {
  css = css.slice(tokensIndex);
}

// Remove body / [lang=ar] font-family blocks if still present after slice
css = css.replace(
  /body \{\s*font-family:[^}]+\}\s*/s,
  '',
);
css = css.replace(
  /\[lang="ar"\] body,[\s\S]*?font-family:[^}]+\}\s*/s,
  '',
);
css = css.replace(
  /\[dir="rtl"\] \.form-welcome-sub \{[\s\S]*?\}\s*/s,
  '',
);

const hostGridRules = `
.portal-shell > app-login-form {
  grid-area: form;
  min-width: 0;
  min-height: 0;
  display: block;
}

.portal-shell > app-brand-panel {
  grid-area: brand;
  min-width: 0;
  min-height: 0;
  display: block;
}
`;

css = css.replace(
  /\.portal-shell \.portal-form-panel \{\s*grid-area: form;\s*\}\s*\.portal-shell \.portal-brand-panel \{\s*grid-area: brand;\s*\}/s,
  hostGridRules,
);

css = css.replace(
  /\.portal-brand-panel \{\s*position: relative;\s*overflow: hidden;\s*height: 100vh;\s*height: 100dvh;\s*grid-area: brand;\s*\}/s,
  `.portal-brand-panel {
  position: relative;
  overflow: hidden;
  height: 100%;
}`,
);

css += `
.register-row { display: none !important; }

/* Angular component hosts — fill grid tracks on tablet/desktop */
@media (min-width: 600px) {
  .portal-shell > app-brand-panel,
  .portal-shell > app-login-form {
    height: 100%;
    min-height: 0;
  }
}

@media (max-width: 599px) {
  .portal-shell > app-brand-panel,
  .portal-shell > app-login-form {
    height: auto;
    min-height: 0;
  }
}
`;

fs.writeFileSync(outPath, css);
console.log(`Wrote ${outPath} (${css.length} bytes)`);
