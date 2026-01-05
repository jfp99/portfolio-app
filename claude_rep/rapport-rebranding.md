# Rapport de Rebranding: Epinards → EPNR
**Date:** 21/12/2025

## Statut: COMPLET

---

## Logo Professionnel EPNR

**Design inspiré de:** Stripe, Linear, Vercel

**Caractéristiques:**
- Cercle avec dégradé emerald → violet
- "E" géométrique abstrait (3 barres horizontales + connecteur vertical)
- Point d'accent tech signature
- Animation breathing pour états loading
- 4 tailles: sm (28px), md (36px), lg (44px), xl (56px)

**Fichier:** `src/components/brand/logo.tsx`

---

## Fichiers Modifiés

```
src/app/layout.tsx                    → Metadata SEO (EPNR, epnr.dev)
src/app/sitemap.ts                    → baseUrl epnr.dev
src/app/robots.ts                     → baseUrl epnr.dev
src/app/globals.css                   → Commentaires EPNR
src/app/api/contact/route.ts          → Email branding [EPNR]
src/app/(marketing)/contact/contact-section.tsx → contact@epnr.dev
src/components/brand/logo.tsx         → Nouveau logo géométrique
src/components/sections/hero/hero-section.tsx   → Titre EPNR
src/components/sections/testimonials/testimonials-section.tsx → EPNR
src/components/sections/skills/skills-constellation.tsx → Commentaire
src/components/ui/command-palette.tsx → Footer EPNR
src/lib/validation.ts                 → Commentaires + default name
src/lib/utils.ts                      → Commentaires
src/lib/ratelimit.ts                  → Commentaires
public/manifest.json                  → PWA branding
```

---

## Nouveau Branding

| Élément | Ancienne Valeur | Nouvelle Valeur |
|---------|----------------|-----------------|
| Nom | Epinards | EPNR |
| Domaine | epinards.dev | epnr.dev |
| Email | contact@epinards.dev | contact@epnr.dev |
| Twitter | @epinards_dev | @epnr_dev |
| Tagline | Automation that grows with you | Automation that grows with you |

---

## Logo SVG - "Circuit Leaf"

**Concept:** Feuille d'épinard stylisée avec nervures = circuits d'automation

```svg
<svg viewBox="0 0 48 48">
  <!-- Feuille d'épinard réaliste -->
  <path d="M24 3 C24 3 22 5 20 8 C17 12 12 14 9 18
           C6 22 5 28 6 33 C7 38 10 42 14 44
           C18 46 21 46 24 46 C27 46 30 46 34 44
           C38 42 41 38 42 33 C43 28 42 22 39 18
           C36 14 31 12 28 8 C26 5 24 3 24 3Z"
        fill="url(#leafGradient)" />

  <!-- Nervure centrale -->
  <path d="M24 10 L24 40" stroke="white" strokeWidth="2" />

  <!-- Nodes centraux (connexions automation) -->
  <circle cx="24" cy="14" r="2.5" fill="white" />
  <circle cx="24" cy="24" r="3" fill="white" />
  <circle cx="24" cy="36" r="2.5" fill="white" />

  <!-- Nervures latérales (flux automation) -->
  <path d="M24 18 L14 14" stroke="white" strokeWidth="1.5" />
  <path d="M24 24 L12 22" stroke="white" strokeWidth="1.5" />
  <path d="M24 30 L14 34" stroke="white" strokeWidth="1.5" />
  <!-- + miroir côté droit -->

  <!-- Cercle d'automation infinie -->
  <circle cx="24" cy="24" r="6" stroke="white" fill="none" />
</svg>
```

---

## Vérification

```bash
npm run lint  # 0 erreurs, 0 warnings
grep -r "Epinards" src/  # Aucun résultat
grep -r "epinards" src/  # Aucun résultat
```

---

## Prochaines Étapes (Optionnelles)

1. Créer og-image.png avec nouveau logo EPNR
2. Créer icon-192.png et icon-512.png pour PWA
3. Mettre à jour favicon.ico
4. Configurer domaine epnr.dev
