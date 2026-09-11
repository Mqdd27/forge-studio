# Forge Studio positioning migration

The user's migration brief governs this change; the PRD and design-system documents support it. The existing brand and actual portfolio remain the basis of the website.

## Audit and decisions

| Existing element                                         | Decision                                                                 |
| -------------------------------------------------------- | ------------------------------------------------------------------------ |
| Rust accent, neutral surfaces, Inter/Manrope, line icons | Preserve                                                                 |
| Responsive navigation and language switching             | Preserve behavior; simplify links                                        |
| Floating, rounded header on scroll                       | Replace styling with a solid compact sticky header                       |
| Service catalog and maintenance packages                 | Replace content with exactly four primary services                       |
| Work cards and four real projects                        | Reuse; add capability tags and business-oriented categories              |
| Personal repository link                                 | Retain in source data, omit from public output and client props          |
| About page, principles, brand illustration               | Retain layout; update positioning and CTAs                               |
| Products, Insights, backup Work routes                   | Retire; redirect Products/Insights; preserve actual current case studies |
| Generic social links                                     | Remove until official public channels are supplied                       |
| Long contact brief and old simulated-success component   | Replace with four-field inquiry form and validated delivery endpoint     |
| Motion                                                   | Reduce to 200ms subtle transitions                                       |
| Metadata and sitemap                                     | Update positioning and canonical localized routes                        |

## Current structure

Home → Services → Work → Case Study → About → Start a Project. Privacy Policy appears in the form and footer. Logo links home. Homepage has three selected projects and four process steps; Work retains all four projects.

## Launch dependencies

- Confirm the official business contact channel and configure a delivery destination. No active destination was available in the repository. Unconfigured delivery explicitly returns an unavailable state.
- Supply actual reviewed, anonymized project screenshots. No fake application screenshots or client outcomes were invented.
- Configure production origin and platform-level abuse protection, then align the privacy page with the actual delivery provider and retention arrangements.

No external messages were sent and no production deployment was performed as part of this repository migration.

## Verification

- Production build passed with type checks.
- Responsive browser audit: Home, Services, Work, About, Start a Project, and IDX detail at 375px, 768px, and 1440px; no horizontal overflow, one main heading per page, and no retired navigation links.
- Mobile menu, Work filtering, language switching, and client contact validation checked interactively.
- Inquiry endpoint checks cover invalid input, request size, origin, spam field, missing delivery configuration, mocked success/failure, and attempt limits. No external messages sent.
- Public browser bundles checked for the supplied personal repository handle and old placeholder contact details; none found.
