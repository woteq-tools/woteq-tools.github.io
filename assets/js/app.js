/* ==========================================================================
   Woteq Tools — landing page behaviour
   Category filter + live search. No dependencies.
   ========================================================================== */

(function () {
  "use strict";

  var grid = document.getElementById("tool-grid");
  var search = document.getElementById("search");
  var clearBtn = document.getElementById("search-clear");
  var noResults = document.getElementById("no-results");
  var resetBtn = document.getElementById("reset-filters");
  var chips = Array.prototype.slice.call(
    document.querySelectorAll(".chip[data-filter]")
  );

  if (!grid) return;

  var cards = Array.prototype.slice.call(grid.querySelectorAll(".card"));
  var activeFilter = "all";

  function matches(card) {
    if (activeFilter !== "all" && card.dataset.category !== activeFilter) {
      return false;
    }
    var q = (search.value || "").trim().toLowerCase();
    if (!q) return true;
    var haystack = (
      card.textContent +
      " " +
      (card.dataset.tags || "") +
      " " +
      (card.dataset.category || "")
    ).toLowerCase();
    return haystack.indexOf(q) !== -1;
  }

  function apply() {
    var visible = 0;
    cards.forEach(function (card) {
      var show = matches(card);
      card.hidden = !show;
      if (show) visible++;
    });
    if (noResults) noResults.hidden = visible !== 0;
    if (clearBtn) clearBtn.hidden = !search.value;
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) {
        c.classList.toggle("is-active", c === chip);
      });
      activeFilter = chip.dataset.filter;
      apply();
    });
  });

  if (search) {
    search.addEventListener("input", apply);
    search.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && search.value) {
        search.value = "";
        apply();
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      search.value = "";
      apply();
      search.focus();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      search.value = "";
      activeFilter = "all";
      chips.forEach(function (c) {
        c.classList.toggle("is-active", c.dataset.filter === "all");
      });
      apply();
    });
  }

  // Keep the tool counter in sync with the number of published web tools.
  var stat = document.getElementById("stat-tools");
  if (stat) stat.textContent = String(cards.length);

  // Sticky header border on scroll.
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  apply();
})();
