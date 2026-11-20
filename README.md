# Gieneza Liegh B. De La Cruz — Nebula Edition

Premium offline-ready student portfolio. Open `index.html` from the **extracted complete folder** or use VS Code Live Server.

## Pages
- index.html — hero, featured projects, AI learning note
- about.html — education and student background
- portfolio.html — original Aquatic Animals, RJ45, and Windows project pictures
- contact.html — validated email composition form and copy-message fallback

## Design and code
- `css/style.css` contains the full design. The same styles are embedded as a fallback in every HTML page to prevent an unstyled white page if the external CSS file is missing.
- `js/main.js` handles navigation and contact interactions.
- `assets/` contains the user-supplied portrait and project images. Keep the folder with the HTML files.
- Uses local system fonts (Georgia for display, Segoe UI for body), no CDNs, libraries, backend or database.
- All form messages require the visitor to send through their own email app.

## HCI principles
Consistency, clear navigation, feedback, responsive design, readable contrast, and error prevention.


## V2 additions
- Large full-name hero heading on the homepage.
- Six explanatory AI learning notes on Home and Projects pages.
- AI information is educational, not a claim of a deployed model.
- Extra styles included in external CSS and inline CSS fallback.

## Project images update
All project images use object-fit: contain (no cropping). Click any project image to view the full original file in a new tab. The first AI project card spans the full project grid width.


## Aesthetic theme update
Wine-leopard theme: `assets/leopard-bg.jpg` is the fixed full-page background, with glass-effect cards, dusty-rose and champagne accents. Edit the colors in the `AESTHETIC THEME` block at the end of `css/style.css`.
