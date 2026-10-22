/* Builds each page from content.js. You shouldn't need to edit this file. */
(function () {
  var S = window.SITE, page = document.body.dataset.page;
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

  var C = S[page], html = "";
  if (page === "home") {
    html = quote(C.quote, C.quoteBy) + "<h1>" + fmt(C.heading) + "</h1>" + paras(C.paragraphs) +
      '<ul class="roles">' + each(C.roles, function (r) { return "<li>" + fmt(r) + "</li>"; }) + "</ul>" +
      (C.bookBox.show ? card(C.bookBox.title, C.bookBox.text, '<a class="btn" href="book.html">' + fmt(C.bookBox.buttonText) + "</a>") : "");
  } else if (page === "media") {
    html = "<h1>" + fmt(C.heading) + "</h1><p>" + fmt(C.intro) + '</p><div class="cards">' +
      each(C.items, function (i) { return card(i.title, i.text, '<a href="' + esc(i.url) + '">' + fmt(i.linkText) + "</a>"); }) + "</div>";
  } else if (page === "philanthropy") {
    html = "<h1>" + fmt(C.heading) + "</h1><p>" + fmt(C.intro) + '</p><div class="cards">' +
      each(C.items, function (i) { return card(i.title, i.text, '<a class="btn" href="' + esc(i.url) + '">' + fmt(i.buttonText) + "</a>"); }) + "</div>";
  } else if (page === "book") {
    var cover = C.cover
      ? '<img class="cover" src="' + esc(C.cover) + '" alt="Cover of ' + esc(C.title) + '">'
      : '<div class="cover" role="img" aria-label="Book cover placeholder">' + fmt(C.title) + "</div>";
    html = "<h1>" + fmt(C.heading) + '</h1><div class="book">' + cover + "<div><h2>" + fmt(C.title) + '</h2><p class="meta">' + fmt(C.details) + "</p>" +
      paras(C.paragraphs) + quote(C.quote, C.quoteBy, ' style="font-size:1.1rem"') +
      each(C.buttons, function (b) { return '<a class="btn' + (b.outline ? " alt" : "") + '" href="' + esc(b.url) + '">' + fmt(b.text) + "</a>"; }) + "</div></div>";
  } else if (page === "contact") {
    html = "<h1>" + fmt(C.heading) + "</h1><p>" + fmt(C.intro) + '</p><div class="cards">' +
      '<div class="card"><h3>Email</h3><p><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></p></div>" +
      '<div class="card"><h3>Social</h3><p><a href="' + esc(S.site.instagram) + '">Instagram</a><br><a href="' + esc(S.site.facebook) + '">Facebook</a></p></div></div>';
  }

  var nav = each(S.site.menu, function (m) {
    return '<a href="' + esc(m.file) + '"' + (m.page === page ? ' aria-current="page"' : "") + ">" + fmt(m.label) + "</a>";
  });
  document.querySelector("header").innerHTML = '<a class="brand" href="index.html">' + fmt(S.site.name) + "</a><nav>" + nav + "</nav>";
  document.querySelector("main").innerHTML = html;
  document.querySelector("footer").innerHTML = "© " + new Date().getFullYear() + " " + fmt(S.site.name) +
    ' · <a href="' + esc(S.site.facebook) + '">Facebook</a> · <a href="' + esc(S.site.instagram) + '">Instagram</a>';
  var pageTitle = page === "home" ? S.site.name : (C.heading + " | " + S.site.name);
  document.title = pageTitle;
})();
