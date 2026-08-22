(function () {
  var KEY = "yty-demo-ok";
  var PASS = "yoga";
  if (sessionStorage.getItem(KEY) !== "1") {
    document.documentElement.classList.add("yty-locked");
  }
  function unlock() {
    sessionStorage.setItem(KEY, "1");
    document.documentElement.classList.remove("yty-locked");
    var gate = document.getElementById("yty-gate");
    if (gate) gate.remove();
  }
  function wrong(input, hint) {
    input.value = "";
    input.focus();
    if (hint) hint.textContent = "Not that one. Try again.";
  }
  function showGate() {
    if (sessionStorage.getItem(KEY) === "1") return;
    if (document.getElementById("yty-gate")) return;
    var gate = document.createElement("div");
    gate.id = "yty-gate";
    gate.innerHTML = '<div class="yty-gate-card"><p class="eyebrow">Yoga To You</p><h1 class="display">Private demo</h1><p class="yty-gate-lede">A clickable site concept. Not the live site.</p><form class="yty-gate-form" autocomplete="off"><label>Password <input type="password" name="pw" required></label><button class="btn" type="submit">Enter</button><p class="yty-gate-hint" role="status"></p></form></div>';
    document.body.appendChild(gate);
    var form = gate.querySelector("form");
    var input = gate.querySelector("input");
    var hint = gate.querySelector(".yty-gate-hint");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if ((input.value || "").trim() === PASS) unlock();
      else wrong(input, hint);
    });
    input.focus();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showGate);
  } else {
    showGate();
  }
  function noteFor(form) {
    var existing = form.querySelector(".demo-note");
    if (existing) return existing;
    var p = document.createElement("p");
    p.className = "demo-note";
    p.setAttribute("role", "status");
    form.appendChild(p);
    return p;
  }
  document.addEventListener("submit", function (e) {
    var form = e.target;
    if (!form || form.tagName !== "FORM") return;
    if (form.classList.contains("yty-gate-form")) return;
    e.preventDefault();
    noteFor(form).textContent = "This is a demo — nothing was sent.";
  }, true);
})();
