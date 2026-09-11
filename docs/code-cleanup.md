# Code cleanup

Removed unused hero/reveal/page-intro components, the unused motion provider and source-map loader, Framer Motion, and unreferenced design-image assets. Build cache files are no longer tracked by Git; the active local cache is retained.

Split the combined client primitives into server-compatible icons and separate client translation/filter components. Added source aliases, typed project presentation keys, stable filter keys, intrinsic screenshot sizes, and next/image rendering. Added explicit ESLint configuration and repeatable check commands.

Removed 227 unused CSS selectors and 77 superseded declarations without reordering retained rules. Styles are divided into tokens, base, components, and site files; preserve their import order. CSS functional/escaped selectors were retained conservatively. This is not a claim that every remaining rule can be eliminated or converted to a Tailwind utility without visual regression testing.

Removed 60 unused entries from the design translation dictionary and 87 redundant/unused theme declarations. Current page layouts, floating navigation, route destinations, and inquiry delivery behavior are intended to remain unchanged.

Visual browser regression review remains outstanding because browser access was previously denied by automatic approval review due to a usage limit. Build, lint, type, formatting, route, and mocked inquiry checks are the available verification for this refactor.
