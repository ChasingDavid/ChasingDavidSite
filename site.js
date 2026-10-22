/* Builds the one-page site from content.js. You shouldn't need to edit this file. */
(function () {
  var S = window.SITE;
  var esc = function (t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); };
  var fmt = function (t) {
    return esc(t).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>').replace(/\*([^*]+)\*/g, "<em>$1</em>");
  };
  var each = function (list, fn) { return (list || []).map(fn).join(""); };
  var paras = function (list) { return each(list, function (p) { return "<p>" + fmt(p) + "</p>"; }); };
  var quote = function (q, by, style) {
    return q ? '<blockquote' + (style || "") + '>“' + fmt(q) + "”<cite>— " + fmt(by) + "</cite></blockquote>" : "";
  };
  var card = function (title, text, action) {
    return '<div class="card"><h3>' + fmt(title) + "</h3><p>" + fmt(text) + "</p>" + action + "</div>";
  };
  var section = function (id, inner) { return '<section id="' + id + '">' + inner + "</section>"; };

  var H = S.home, M = S.media, B = S.book, P = S.philanthropy, C = S.contact;
  var cover = B.cover
    ? '<img class="cover" src="' + esc(B.cover) + '" alt="Cover of ' + esc(B.title) + '">'
    : '<div class="cover" role="img" aria-label="Book cover placeholder">' + fmt(B.title) + "</div>";

  var sections = {
    home: section("home", quote(H.quote, H.quoteBy) + "<h1>" + fmt(H.heading) + "</h1>" + paras(H.paragraphs) +
      '<ul class="roles">' + each(H.roles, function (r) { return "<li>" + fmt(r) + "</li>"; }) + "</ul>" +
      (H.bookBox.show ? card(H.bookBox.title, H.bookBox.text, '<a class="btn" href="#book">' + fmt(H.bookBox.buttonText) + "</a>") : "")),
    media: section("media", "<h2>" + fmt(M.heading) + "</h2><p>" + fmt(M.intro) + '</p><div class="cards">' +
      each(M.items, function (i) { return card(i.title, i.text, '<a href="' + esc(i.url) + '">' + fmt(i.linkText) + "</a>"); }) + "</div>"),
    book: section("book", "<h2>" + fmt(B.heading) + '</h2><div class="book">' + cover + "<div><h3>" + fmt(B.title) + '</h3><p class="meta">' + fmt(B.details) + "</p>" +
      paras(B.paragraphs) + quote(B.quote, B.quoteBy, ' style="font-size:1.1rem"') +
      each(B.buttons, function (b) { return '<a class="btn' + (b.outline ? " alt" : "") + '" href="' + esc(b.url) + '">' + fmt(b.text) + "</a>"; }) + "</div></div>"),
    philanthropy: section("philanthropy", "<h2>" + fmt(P.heading) + "</h2><p>" + fmt(P.intro) + '</p><div class="cards">' +
      each(P.items, function (i) { return card(i.title, i.text, '<a class="btn" href="' + esc(i.url) + '">' + fmt(i.buttonText) + "</a>"); }) + "</div>"),
    contact: section("contact", "<h2>" + fmt(C.heading) + "</h2><p>" + fmt(C.intro) + '</p><div class="cards">' +
      '<div class="card"><h3>Email</h3><p><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></p></div>" +
      '<div class="card"><h3>Social</h3><p><a href="' + esc(S.site.instagram) + '">Instagram</a><br><a href="' + esc(S.site.facebook) + '">Facebook</a></p></div></div>')
  };

  // Sections appear in the same order as the menu.
  var order = S.site.menu.map(function (m) { return m.section; });
  Object.keys(sections).forEach(function (k) { if (order.indexOf(k) < 0) order.push(k); });

  var nav = each(S.site.menu, function (m) { return '<a href="#' + esc(m.section) + '">' + fmt(m.label) + "</a>"; });
  document.querySelector("header").innerHTML = '<a class="brand" href="#home">' + fmt(S.site.name) + "</a><nav>" + nav + "</nav>";
  document.querySelector("main").innerHTML = order.map(function (k) { return sections[k] || ""; }).join("");
  document.querySelector("footer").innerHTML = "© " + new Date().getFullYear() + " " + fmt(S.site.name) +
    ' · <a href="' + esc(S.site.facebook) + '">Facebook</a> · <a href="' + esc(S.site.instagram) + '">Instagram</a>';
  document.title = S.site.name;

  // Highlight the menu link for the section currently on screen.
  var links = document.querySelectorAll("nav a");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) links.forEach(function (a) {
          if (a.getAttribute("href") === "#" + e.target.id) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main section").forEach(function (s) { io.observe(s); });
  }
})();
