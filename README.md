# Dav Lewis website

Static site, no build step. Pages: `index.html` (one long scroll), `book.html`, `merch.html`, `contact.html`.

## Editing the content
Open `content.js` and change the text. Instructions are at the top of that file. You never need to touch the `.html` files or `site.js`. Photos go in an `images/` folder; set each photo's `src` in `content.js`.

## Events
Events live in `events.json`, a plain list. Each one looks like:
`{ "title": "...", "date": "2026-12-05", "time": "7 PM", "location": "...", "text": "...", "url": "...", "linkText": "Get tickets" }`
Only `title` is required. Past events are hidden automatically. Ways to add events:
- Edit `events.json` by hand.
- Run `python3 add_event.py "Title" 2026-12-05 --time "7 PM" --location "Venue" --url https://...` then commit and push.
- Point `events.apiUrl` in `content.js` at any web address that returns the same list (as a plain list, or `{ "events": [...] }`). The server must allow cross-origin requests (CORS).

## Publishing
Push to GitHub, then Settings > Pages > deploy from the branch root.

## Previewing locally
Events load with `fetch`, which browsers block for files opened by double-click. To preview everything, run `python3 -m http.server` in this folder and open http://localhost:8000. On GitHub Pages it works as is.
