# Portfolio menu

The navigation is isolated in menu.css and menu.js; index.html contains its markup.
No new animation dependency: native Web Animations API drives a reversible 1.25-second timeline.

Reference: https://www.pablomiguez.dev/
- Right panel and dimmed backdrop: 700 ms.
- Two background washes: 575 ms, staggered by 120 ms.
- Links rise from 140% with 10-degree rotation: 700 ms, beginning at 350 ms with 50 ms stagger.
- Contact details enter at 550 ms.
- Hover: dark bottom-up fill and rolling duplicate text, 550 ms.
- Closing reverses the entire timeline, including interrupted openings.

Keyboard: Tab stays inside the open menu, Escape closes it. Section links close the panel before scrolling and focusing their destination. The underlying page is inert while open. Reduced-motion preferences skip the timeline and smooth scrolling. A noscript navigation fallback is included.

The original section markup, loader, page styles and existing scripts remain unchanged.
A 17vh header spacer preserves the previous landing-page position.
Responsive panel sizing supports narrow screens; short viewports use a scrollable panel.

Validation: static integration and animation-state checks. Live browser validation is pending because this session's browser connection is unavailable.
