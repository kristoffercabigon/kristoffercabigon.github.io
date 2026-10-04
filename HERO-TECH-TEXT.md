# Hero Tech Text

Files: hero-tech-text.js and hero-tech-text.css. No new dependency or build step.

Only the name uses letter reveal, speed 0.5, letter spacing 0, font weight 600, dashed outlines (length 4, gap 2, width 1.5), 15 specks, selection frame, measurement labels, spring-back dragging and automatic sweep. The static greeting scales from 20px to 24px; the animated name scales from 44px to 72px. Both retain dark colors for the white background.

The effect starts after the loader, pauses offscreen/behind the menu/in hidden tabs, and provides static text for reduced motion. Original semantic heading and greeting text remain available to assistive technology and when scripting or Canvas is unavailable.

Validation: live browser render after loader; letter dragging; mobile 390x844 with no horizontal overflow and all content contained by the hero. Existing portrait, matching buttons, loader and menu remain intact.

Dragged and returning letters use a pointer-transparent viewport canvas, so they are not clipped by the heading. The original glyph position remains as an outline. The layer clears after spring-back, pauses under the menu, and is removed during page cleanup. Drawing-coordinate regression checks cover off-heading dragging and return cleanup.
