/* =====================================================================
   EDIT YOUR SITE HERE. This is the only file you need to change.
   - Change the text between the quote marks ("like this"). Keep the
     quote marks, commas and brackets where they are.
   - Link inside text: [link words](https://example.com)   Italic: *word*
   - To add a card, photo or button, copy a whole { ... }, line and paste
     it below, then edit the copy. To remove one, delete it.
   - Don't type a plain " inside text. Use ’ or “ ” instead.
   - Events live in events.json (see README), not in this file.
   ===================================================================== */
window.SITE = {

  /* ---------- Header, footer and page order ---------- */
  site: {
    name: "Dav Lewis",
    instagram: "https://instagram.com/dav.lewis.official",
    facebook: "https://www.facebook.com/1055900717862906",
    // Top menu. "index.html#about" scrolls to a section; "book.html" opens a separate page.
    // The first half of the list shows left of the name, the second half shows right of it.
    menu: [
      { label: "Home",         link: "index.html#home" },
      { label: "About",        link: "index.html#about" },
      { label: "Media",        link: "index.html#media" },
      { label: "Events",       link: "index.html#events" },
      { label: "Philanthropy", link: "index.html#philanthropy" },
      { label: "Book",         link: "book.html" },
      { label: "Merch",        link: "merch.html" },
      { label: "Contact",      link: "contact.html" }
    ],
    // Sections on the main scrolling page, top to bottom. Reorder or delete names.
    sections: ["home", "about", "gallery", "media", "events", "philanthropy", "contact"]
  },

  /* ---------- HOME (top of the scroll) ---------- */
  home: {
    quote: "Being Good to others through Service is the Ultimate Gift to Self",
    quoteBy: "D. Lewis",
    heading: "Dav Lewis",
    // Big photo behind the top of the page, e.g. "images/hero.jpg". Leave "" for a plain top.
    heroImage: "",
    tagline: "Actor, director, producer, activist.",
    bookBox: { show: true, title: "New: the book", text: "Read about Dav’s book and where to get a copy.", buttonText: "See the book" }
  },

  /* ---------- ABOUT ---------- */
  about: {
    heading: "About",
    paragraphs: [
      "Dav Lewis is a growing powerhouse of talent and heart. His ability to act, direct, and produce has made him a unique, sought-after figure in entertainment. He has appeared in films, television, and marketing campaigns, and you may recognize his latest work, [2nd Chances](https://www.davlewis.com/video), an award-winning documentary inspired by real-life experiences.",
      "His journey began in Terrell, Texas, where he was raised by his mother. He attended Abilene Christian University, where he was an All-American in football and track & field, and graduated with a degree in Biology. He then moved to Los Angeles to pursue entertainment, starting out in modeling, which led to a successful Adidas campaign. He later landed the lead role in the comedy series *Not By Choice*. His experience spans 15+ years, with most of his work behind the lens.",
      "His passion for humanity led to [WOKE WORLD](https://www.wokeworld.com), a clothing brand built to promote social change, and [2nd Chances.life](https://www.2ndchances.life), a nonprofit that supports people re-entering society after incarceration with counseling, job placement, housing, and education."
    ],
    roles: [
      "Director, Producer: *2nd Chances*",
      "Lead Actor: *Not By Choice* series",
      "Lead Actor: Adidas Adizero campaign",
      "Activist, Founder, CEO: Woke World, 2nd Chances.Life"
    ]
  },

  /* ---------- GALLERY (grid + slideshow) ---------- */
  gallery: {
    heading: "Gallery",
    intro: "",
    // Put photos in the images folder. src is the file path, like "images/photo1.jpg".
    // A blank src shows a placeholder tile with the caption.
    images: [
      { src: "", caption: "Photo 1" },
      { src: "", caption: "Photo 2" },
      { src: "", caption: "Photo 3" },
      { src: "", caption: "Photo 4" },
      { src: "", caption: "Photo 5" },
      { src: "", caption: "Photo 6" }
    ],
    startView: "grid",       // "grid" or "slideshow"
    slideshowSeconds: 0      // 0 = manual only. 5 = advance every 5 seconds.
  },

  /* ---------- MEDIA ---------- */
  media: {
    heading: "Media",
    intro: "Selected work from in front of and behind the camera.",
    items: [
      { title: "2nd Chances",     text: "Award-winning documentary directed and produced by Dav Lewis.", linkText: "Watch",            url: "https://www.davlewis.com/video" },
      { title: "Not By Choice",   text: "Comedy series with Dav in the lead role.",                      linkText: "Watch on YouTube", url: "https://youtu.be/JCsfyukk1as" },
      { title: "Adidas Campaign", text: "The Adizero campaign that launched his on-camera career.",      linkText: "Watch on YouTube", url: "https://youtu.be/OXtIEZOzv6E" }
    ]
  },

  /* ---------- EVENTS (the list itself is in events.json) ---------- */
  events: {
    heading: "Upcoming Events",
    intro: "",
    emptyText: "No upcoming events right now. Check back soon.",
    showPast: false,   // true also lists events whose date has passed
    apiUrl: ""         // Optional. A web address that returns the same list as events.json. Leave "" to use events.json.
  },

  /* ---------- PHILANTHROPY ---------- */
  philanthropy: {
    heading: "Philanthropy",
    intro: "Dav Lewis has dedicated his life to giving back to local communities through his nonprofit and his conscious clothing brand.",
    items: [
      { title: "2nd Chances.life", text: "Hope for individuals re-entering society after incarceration: counseling, job placement, housing, and further education.", buttonText: "Learn more & donate", url: "https://www.2ndchances.life" },
      { title: "WOKE WORLD",       text: "A clothing brand with a mission to promote social change and raise awareness for voiceless communities.",                buttonText: "Visit the shop",       url: "https://www.wokeworld.com" }
    ]
  },

  /* ---------- BOOK PAGE (book.html) ---------- */
  book: {
    heading: "The Book",
    title: "Your Book Title Here",
    cover: "",   // e.g. "images/cover.jpg". Blank shows a placeholder.
    details: "By Dav Lewis · Published Month YYYY · Publisher · ISBN 000-0-00-000000-0",
    paragraphs: [
      "Write a short, compelling summary here. Two or three sentences on what the book is about, who it is for, and what a reader will take away from it.",
      "Add a second paragraph about the story behind the book if you like."
    ],
    quote: "A short endorsement or review quote goes here.",   // "" hides it
    quoteBy: "Reviewer Name",
    buttons: [
      { text: "Buy the book",    url: "#", outline: false },
      { text: "Read an excerpt", url: "#", outline: true }
    ]
  },

  /* ---------- MERCH PAGE (merch.html) ---------- */
  merch: {
    heading: "Merch",
    intro: "Support the mission with Woke World gear.",
    // Product photos go in the images folder. A blank image shows a placeholder.
    items: [
      { title: "Product Name", price: "$00", text: "Short description of the item.", image: "", buttonText: "Buy now", url: "https://www.wokeworld.com" },
      { title: "Product Name", price: "$00", text: "Short description of the item.", image: "", buttonText: "Buy now", url: "https://www.wokeworld.com" }
    ]
  },

  /* ---------- CONTACT (bottom of the scroll, and contact.html) ---------- */
  contact: {
    heading: "Contact",
    intro: "For bookings, speaking, press, and partnerships, reach out below.",
    email: "you@example.com"
  }
};
