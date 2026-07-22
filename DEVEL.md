# Younity Studios Landing Page

A responsive, dependency-light landing page for the new Younity Studios brand direction.

## Files

- `index.html` — page content and semantic structure
- `styles.css` — complete responsive styling
- `script.js` — mobile navigation, sticky-header state and reveal animations

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Before deployment

1. Replace the CSS-built placeholder mark with the final official logo asset, if desired.
2. Confirm the product names and statuses in the “From the studio” section.
3. Implement the form handling behind `/contact`; no public email address is exposed anywhere on the page.
4. Publish the Strip & Share, ReelStitch, TripSnap and Ride Ahead landing pages before activating their routes.
5. Add the final Open Graph image and favicon files.
6. Self-host the fonts if avoiding requests to Google Fonts is preferred.
7. Revisit the existing privacy policy and terms so they accurately describe the final hosting, analytics, contact form and legal structure.

## Design direction

- Product-first rather than consultancy-first
- Purpose, engineering and design as the three brand pillars
- Broad enough for mobile apps, desktop software, SaaS, custom GPTs and future product categories
- Neutral black-and-white foundation with a restrained Younity red accent
- No stock photography; visual identity is expressed through typography, diagrams and product abstractions

Copyright © 2026 Hugo Monteiro. All rights reserved.


## Public contact policy

All enquiries route through `/contact`. Do not expose email addresses in page copy, links, metadata or legal-page templates.

## Current product routes

- `/strip-and-share`
- `/reelstitch`
- `/tripsnap`
- `/ride-ahead`

Caravela, Custom GPTs and future full-stack/SaaS products remain in the exploratory and evolving portfolio area until their public positioning is ready.


## Contact page

The `/contact` directory contains a ready-made contact form with these topics:

- Contact
- Sales
- Technical support
- Development

Technical support reveals an optional product selector. Client-side validation,
a privacy consent checkbox, a message counter and a honeypot field are included.

The form currently uses `action="#"` and intentionally prevents submission in
`contact.js`. Connect a production endpoint before deployment, then remove or
replace the placeholder submit handler.


## Strip and Share page

The `/strip-and-share` directory contains the product landing page and optimized
screenshots supplied for the application.

Its legal navigation points to:

- `/strip-and-share/privacy-policy`
- `/strip-and-share/terms-and-conditions`
- `/strip-and-share/license`
- `/strip-and-share/copyright`
- `/strip-and-share/open-source`

No development status, implementation details or public email addresses are
included in the page.
