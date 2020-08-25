/*
 * May Wang
 * July 14, 2020
 *
 * This is the JS to implement the UI for my personal website.
 */
"use strict";
(function() {
  window.addEventListener("load", init);

  /** Runs when the page is loaded and initializes event listeners on certain elements */
  function init() {
    id("top-btn").addEventListener("click", topOfPage);
    id("home-btn").addEventListener("click", homeView);
    id("work-btn").addEventListener("click", workView);
    id("resume-btn").addEventListener("click", () => (window.open("files/MayWang_Resume.pdf", "_blank")));
    id("contact-btn").addEventListener("click", newContact);
    qs("#about span").addEventListener("click", newContact);
  }

  function newContact() {
    id("home").classList.add("hidden");
    id("work").classList.add("hidden");
    id("contact").classList.remove("hidden");
    id("top-btn").classList.add("invisible");
  }

  function workView() {
    id("home").classList.add("hidden");
    id("work").classList.remove("hidden");
    id("contact").classList.add("hidden");
    id("top-btn").classList.remove("invisible");
  }

  function homeView() {
    id("home").classList.remove("hidden");
    id("work").classList.add("hidden");
    id("contact").classList.add("hidden");
    id("top-btn").classList.remove("invisible");
  }

  /** Scrolls to the top of the page */
  function topOfPage() {
    window.scrollTo(0, 0);
  }

  /** alias functions */
  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
})();