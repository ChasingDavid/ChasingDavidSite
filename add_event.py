#!/usr/bin/env python3
"""Add an event to events.json.
Example: python3 add_event.py "Book Signing" 2026-12-05 --time "2 PM" --location "Venue, City" --url https://example.com"""
import argparse, json, pathlib
p = argparse.ArgumentParser()
p.add_argument("title"); p.add_argument("date", help="YYYY-MM-DD")
for k in ("time", "location", "text", "url"): p.add_argument("--" + k, default="")
p.add_argument("--link-text", default="Get tickets")
a = p.parse_args()
f = pathlib.Path(__file__).with_name("events.json")
ev = json.loads(f.read_text()) if f.exists() else []
ev.append({"title": a.title, "date": a.date, "time": a.time, "location": a.location,
           "text": a.text, "url": a.url, "linkText": a.link_text})
f.write_text(json.dumps(ev, indent=2) + "\n")
print("Added:", a.title)
