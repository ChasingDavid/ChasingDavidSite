/* =====================================================================
   EDIT YOUR SITE HERE. This is the only file you need to change.

   How it works
   - Change the text between the quote marks ("like this").
   - Keep the quote marks, commas, and brackets exactly where they are.
   - To add a link inside text, write: [link words](https://example.com)
   - To make a word italic, write: *word*
   - To add another card or paragraph, copy a whole { ... }, line and
     paste it right below, then edit the copy.
   - To remove one, delete the whole line or block.
   - Don't use a plain " quote mark inside text. Use ’ or “ ” instead.
   - Save, then refresh the page in your browser to see the change.
   ===================================================================== */

window.SITE = {

  /* ---------- Shown on every page ---------- */
  site: {
    name: "Dav Lewis",
    instagram: "https://instagram.com/dav.lewis.official",
    facebook: "https://www.facebook.com/1055900717862906",
    // Menu links. Change the label to rename one, delete a line to hide it.
    menu: [
      { label: "Home",         file: "index.html",       page: "home" },
      { label: "Media",        file: "media.html",       page: "media" },
      { label: "Book",         file: "book.html",        page: "book" },
      { label: "Philanthropy", file: "philanthropy.html", page: "philanthropy" },
      { label: "Contact",      file: "contact.html",     page: "contact" }
    ]
  },

  /* ---------- HOME PAGE ---------- */
  home: {
    quote: "Being Good to others through Service is the Ultimate Gift to Self",
    quoteBy: "D. Lewis",
    heading: "Dav Lewis",
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
    ],
    // Set show to false to hide the book box on the home page.
    bookBox: {
      show: true,
      title: "New: the book",
      text: "Read about Dav’s book and where to get a copy.",
      buttonText: "See the book"
    }
  },

  /* ---------- MEDIA PAGE ---------- */
  media: {
    heading: "Media",
    intro: "Selected work from in front of and behind the camera.",
    items: [
      { title: "2nd Chances",     text: "Award-winning documentary directed and produced by Dav Lewis.", linkText: "Watch",           url: "https://www.davlewis.com/video" },
      { title: "Not By Choice",   text: "Comedy series with Dav in the lead role.",                      linkText: "Watch on YouTube", url: "https://youtu.be/JCsfyukk1as" },
      { title: "Adidas Campaign", text: "The Adizero campaign that launched his on-camera career.",      linkText: "Watch on YouTube", url: "https://youtu.be/OXtIEZOzv6E" }
    ]
  },

  /* ---------- BOOK PAGE ---------- */
  book: {
    heading: "The Book",
    title: "Your Book Title Here",
    // Put your cover image in the images folder and type its path, like "images/cover.jpg".
    // Leave it as "" to show a colored placeholder with the title.
    cover: "",
    details: "By Dav Lewis · Published Month YYYY · Publisher · ISBN 000-0-00-000000-0",
    paragraphs: [
      "Write a short, compelling summary here. Two or three sentences on what the book is about, who it is for, and what a reader will take away from it.",
      "Add a second paragraph about the story behind the book if you like."
    ],
    // Leave quote as "" to hide the review quote.
    quote: "A short endorsement or review quote goes here.",
    quoteBy: "Reviewer Name",
    buttons: [
      { text: "Buy the book",    url: "#", outline: false },
      { text: "Read an excerpt", url: "#", outline: true }
    ]
  },

  /* ---------- PHILANTHROPY PAGE ---------- */
  philanthropy: {
    heading: "Philanthropy",
    intro: "Dav Lewis has dedicated his life to giving back to local communities through his nonprofit and his conscious clothing brand.",
    items: [
      { title: "2nd Chances.life", text: "Hope for individuals re-entering society after incarceration: counseling, job placement, housing, and further education.", buttonText: "Learn more & donate", url: "https://www.2ndchances.life" },
      { title: "WOKE WORLD",       text: "A clothing brand with a mission to promote social change and raise awareness for voiceless communities.",                buttonText: "Visit the shop",       url: "https://www.wokeworld.com" }
    ]
  },

  /* ---------- CONTACT PAGE ---------- */
  contact: {
    heading: "Contact",
    intro: "For bookings, speaking, press, and partnerships, reach out below.",
    email: "you@example.com"
  }
};
