(function () {
  function noteFor(form) {
    var existing = form.querySelector(".demo-note");
    if (existing) return existing;
    var p = document.createElement("p");
    p.className = "demo-note";
    p.setAttribute("role", "status");
    form.appendChild(p);
    return p;
  }

  document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = noteFor(form);
      note.textContent = "This is a demo — nothing was sent.";
    });
  });
})();
