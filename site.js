/* Builds the site from content.js and events.json. You shouldn't need to edit this file. */
(function () {
  var S = window.SITE, page = document.body.dataset.page;
  var esc = function (t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); };
  var fmt = function (t) {
    return esc(t).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>').replace(/\*([^*]+)\*/g, "<em>$1</em>");
  };
  var each = function (l, fn) { return (l || []).map(fn).join(""); };
  var paras = function (l) { return each(l, function (p) { return "<p>" + fmt(p) + "</p>"; }); };
  var quote = function (q, by, st) { return q ? "<blockquote" + (st || "") + ">“" + fmt(q) + "”<cite>— " + fmt(by) + "</cite></blockquote>" : ""; };
  var card = function (t, x, act) { return '<div class="card"><h3>' + fmt(t) + "</h3><p>" + fmt(x) + "</p>" + act + "</div>"; };
  var sec = function (id, inner) { return '<section id="' + id + '">' + inner + "</section>"; };
  var head = function (t, x, top) { var h = top ? "h1" : "h2"; return "<" + h + ">" + fmt(t) + "</" + h + ">" + (x ? "<p>" + fmt(x) + "</p>" : ""); };
  var pic = function (src, label, cls) {
    return src ? '<img class="' + cls + '" src="' + esc(src) + '" alt="' + esc(label || "") + '" loading="lazy">'
               : '<div class="' + cls + ' ph">' + esc(label || "") + "</div>";
  };
  var H = S.home, A = S.about, G = S.gallery, M = S.media, E = S.events, B = S.book, P = S.philanthropy, C = S.contact, X = S.merch;

  var R = {
    home: function () {
      return quote(H.quote, H.quoteBy) + "<h1>" + fmt(H.heading) + '</h1><p class="lead">' + fmt(H.tagline) + "</p>" +
        (H.bookBox.show ? card(H.bookBox.title, H.bookBox.text, '<a class="btn" href="book.html">' + fmt(H.bookBox.buttonText) + "</a>") : "");
    },
    about: function () {
      return head(A.heading) + paras(A.paragraphs) + '<ul class="roles">' + each(A.roles, function (r) { return "<li>" + fmt(r) + "</li>"; }) + "</ul>";
    },
    gallery: function () { return head(G.heading, G.intro) + '<div id="gal"></div>'; },
    media: function () {
      return head(M.heading, M.intro) + '<div class="cards">' +
        each(M.items, function (i) { return card(i.title, i.text, '<a href="' + esc(i.url) + '">' + fmt(i.linkText) + "</a>"); }) + "</div>";
    },
    events: function () { return head(E.heading, E.intro) + '<div id="ev" class="cards"></div>'; },
    philanthropy: function () {
      return head(P.heading, P.intro) + '<div class="cards">' +
        each(P.items, function (i) { return card(i.title, i.text, '<a class="btn" href="' + esc(i.url) + '">' + fmt(i.buttonText) + "</a>"); }) + "</div>";
    },
    book: function (top) {
      return head(B.heading, "", top) + '<div class="book">' + pic(B.cover, B.title, "cover") + "<div><h3>" + fmt(B.title) + '</h3><p class="meta">' + fmt(B.details) + "</p>" +
        paras(B.paragraphs) + quote(B.quote, B.quoteBy, ' style="font-size:1.1rem"') +
        each(B.buttons, function (b) { return '<a class="btn' + (b.outline ? " alt" : "") + '" href="' + esc(b.url) + '">' + fmt(b.text) + "</a>"; }) + "</div></div>";
    },
    merch: function (top) {
      return head(X.heading, X.intro, top) + '<div class="cards">' + each(X.items, function (i) {
        return '<div class="card">' + pic(i.image, i.title, "pic") + "<h3>" + fmt(i.title) + '</h3><p class="meta">' + fmt(i.price) + "</p><p>" + fmt(i.text) + '</p><a class="btn" href="' + esc(i.url) + '">' + fmt(i.buttonText) + "</a></div>";
      }) + "</div>";
    },
    contact: function (top) {
      return head(C.heading, C.intro, top) + '<div class="cards"><div class="card"><h3>Email</h3><p><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></p></div>" +
        '<div class="card"><h3>Social</h3><p><a href="' + esc(S.site.instagram) + '">Instagram</a><br><a href="' + esc(S.site.facebook) + '">Facebook</a></p></div></div>';
    }
  };

  /* Header, main, footer */
  var here = location.pathname.split("/").pop() || "index.html";
  var half = Math.ceil(S.site.menu.length / 2);
  var link = function (m) {
    var href = page === "home" ? m.link.replace(/^index\.html(?=#)/, "") : m.link;
    var cur = m.link.indexOf("#") < 0 && m.link === here;
    return '<a href="' + esc(href) + '"' + (cur ? ' aria-current="page"' : "") + ">" + fmt(m.label) + "</a>";
  };
  document.querySelector("header").innerHTML = "<nav>" + S.site.menu.slice(0, half).map(link).join("") + "</nav>" +
    '<a class="brand" href="index.html#home">' + fmt(S.site.name) + "</a><nav>" + S.site.menu.slice(half).map(link).join("") + "</nav>";
  document.querySelector("main").innerHTML = page === "home"
    ? S.site.sections.map(function (k) { return R[k] ? sec(k, R[k](false)) : ""; }).join("")
    : sec(page, R[page](true));
  document.querySelector("footer").innerHTML = "© " + new Date().getFullYear() + " " + fmt(S.site.name) +
    ' · <a href="' + esc(S.site.facebook) + '">Facebook</a> · <a href="' + esc(S.site.instagram) + '">Instagram</a>';
  var hdr = document.querySelector("header"), hero = page === "home" && H.heroImage;
  if (hero) {
    document.body.classList.add("has-hero");
    var hs = document.getElementById("home");
    hs.classList.add("hero");
    hs.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.15),rgba(0,0,0,.55)),url("' + H.heroImage.replace(/"/g, "%22") + '")';
  }
  var onScroll = function () { hdr.classList.toggle("solid", !hero || window.scrollY > 40); };
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  document.title = page === "home" ? S.site.name : (S[page].heading + " | " + S.site.name);

  /* Gallery: grid and slideshow */
  var gal = document.getElementById("gal");
  if (gal && G.images.length) {
    var n = 0, timer, imgs = G.images;
    gal.innerHTML = '<div class="tabs"><button data-v="grid">Grid</button><button data-v="show">Slideshow</button></div>' +
      '<div class="grid">' + imgs.map(function (im, k) { return '<button class="tile" data-n="' + k + '" aria-label="Open ' + esc(im.caption || "photo") + '">' + pic(im.src, im.caption, "pic") + "</button>"; }).join("") + "</div>" +
      '<div class="show" hidden><div class="stage"></div><button class="arrow prev" aria-label="Previous photo">‹</button><button class="arrow next" aria-label="Next photo">›</button><p class="cap"></p></div>';
    var grid = gal.querySelector(".grid"), show = gal.querySelector(".show"), tabs = gal.querySelectorAll(".tabs button");
    var go = function (k) {
      n = (k + imgs.length) % imgs.length;
      gal.querySelector(".stage").innerHTML = pic(imgs[n].src, imgs[n].caption, "pic");
      gal.querySelector(".cap").textContent = (imgs[n].caption ? imgs[n].caption + "  ·  " : "") + (n + 1) + " / " + imgs.length;
    };
    var view = function (v) {
      grid.hidden = v === "show"; show.hidden = v !== "show";
      tabs.forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.v === v); });
      clearInterval(timer);
      if (v === "show") { go(n); if (G.slideshowSeconds > 0) timer = setInterval(function () { go(n + 1); }, G.slideshowSeconds * 1000); }
    };
    tabs.forEach(function (b) { b.onclick = function () { view(b.dataset.v); }; });
    grid.onclick = function (e) { var t = e.target.closest(".tile"); if (t) { n = +t.dataset.n; view("show"); } };
    gal.querySelector(".prev").onclick = function () { go(n - 1); };
    gal.querySelector(".next").onclick = function () { go(n + 1); };
    document.addEventListener("keydown", function (e) {
      if (show.hidden) return;
      if (e.key === "ArrowLeft") go(n - 1); else if (e.key === "ArrowRight") go(n + 1);
    });
    view(G.startView === "slideshow" ? "show" : "grid");
  }

  /* Events: from apiUrl if set, otherwise events.json */
  var ev = document.getElementById("ev");
  if (ev) {
    var draw = function (list) {
      var today = new Date(); today.setHours(0, 0, 0, 0);
      var dt = function (e) { return e.date ? new Date(e.date + "T00:00:00") : null; };
      list = (list || []).filter(function (e) { var d = dt(e); return E.showPast || !d || d >= today; })
        .sort(function (a, b) { return (dt(a) || 9e15) - (dt(b) || 9e15); });
      ev.innerHTML = list.length ? each(list, function (e) {
        var d = dt(e);
        var when = [d ? d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "Date TBA", e.time].filter(Boolean).join(" · ");
        return '<div class="card"><p class="meta">' + esc(when) + "</p><h3>" + fmt(e.title) + "</h3>" +
          (e.location ? '<p class="meta">' + fmt(e.location) + "</p>" : "") + (e.text ? "<p>" + fmt(e.text) + "</p>" : "") +
          (e.url ? '<a class="btn" href="' + esc(e.url) + '">' + fmt(e.linkText || "Details") + "</a>" : "") + "</div>";
      }) : "<p>" + fmt(E.emptyText) + "</p>";
    };
    fetch(E.apiUrl || "events.json").then(function (r) { if (!r.ok) throw 0; return r.json(); })
      .then(function (d) { draw(Array.isArray(d) ? d : d.events); })
      .catch(function () { draw([]); });
  }

  /* Highlight the menu link for the section on screen (scrolling page only) */
  if (page === "home" && "IntersectionObserver" in window) {
    var links = document.querySelectorAll("nav a");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          if (a.getAttribute("href") === "#" + e.target.id) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main section").forEach(function (s) { io.observe(s); });
  }
})();
