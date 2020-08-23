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
    qs("top-button").addEventListener("click", topOfPage);

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