# Portfolio preloader

This component adds an animated introduction to the existing Kris.Dev page. The landing page styles, content, and original script are unchanged.

## Files

- `preloader.css`: scoped layout, Inter typography, corner labels, responsive sizes, and motion preference styles.
- `preloader.js`: entrance, character flips, DEV recentering and growth, zoom exit, and page reveal. Durations and easing are grouped at the top.
- `index.html`: two head includes, the loader markup, and a wrapper around the existing page.

The sequence runs on each full page load. It does not replay on same-page anchor navigation. Browser back/forward cache restoration reveals the page immediately.

## Sequence

The normal sequence is approximately six seconds after font preparation (limited to 600 ms). KRIS.DC first appears on one centered line. After 700 ms, KRIS. flips out character by character (800 ms per letter, staggered 30 ms), including the dot. DC remains still until that group finishes. DC then flips out as DEV drops from above into the same replacement slot (800 ms per letter, staggered 50 ms for DEV). The vacant KRIS. width collapses and the replacement slot expands over 800 ms, centering DEV. DEV grows to 2.5 times its initial size over 800 ms, holds for 800 ms, and then zooms outward while the corner labels leave. The overlay fades as the existing page appears underneath. Each stage awaits the preceding animations; later groups cannot exit early.

The exit waits for both the animation milestone and the landing portrait/font readiness check; readiness has a four-second bound. It does not wait for every project screenshot. Scroll and keyboard interaction unlock only after the reveal finishes. Reduced-motion visitors receive a short dissolve without the flips or zoom. A recovery timer releases the page if animation fails, and the original page remains available when JavaScript is disabled or the loader script does not load.

## Customization

Edit branding in the loader markup. `--loader-type`, `--loader-edge`, and the three color variables control presentation. The name is split into the KRIS. and DC groups; DEV occupies an absolute replacement slot over DC. Edit the `timing` object and sampled `power` curves in the script to change the sequence. The loader exposes its current stage through `data-phase` for inspection.

The loader uses the native Web Animations API, with no animation library dependency. Inter loads from Google Fonts with Arial as its fallback and is scoped to the loader; the landing page retains Poppins.

## Reference and adaptation

Visual and motion reference: https://www.pablomiguez.dev/ (reviewed September 29, 2026). The reference uses Inter at weight 600, near-black #0a0a0a, warm #fefaee lettering, muted #818180 corners, staggered 3D letter exits, a centered DEV enlargement, and a zoom/fade exit. This implementation is written independently with browser animations. It adapts the original single-row name replacement to the requested two-line KRIS.DC / DEV identity and uses equivalent cubic-bezier easing rather than the reference’s GSAP power curves.

## Removal

Remove the preloader stylesheet and script includes, the `portfolio-loader` element, and the opening/closing `portfolio-content` wrapper. The original landing page then works on its own.
