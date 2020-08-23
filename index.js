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
    qs("button").addEventListener("click", topOfPage);

    let factButtons = document.getElementsByClassName("fact-button");
    for (let i = 0; i < factButtons.length; i++) {
      factButtons[i].addEventListener("click", revealFact);
    }

    id("mys-btn").addEventListener("dblclick", mysMsg);
  }

  /** Creates a mystery message to be shown */
  function mysMsg() {
    let para = document.createElement("p");
    para.textContent = "CSE 154 is cool";
    para.classList.add("show");
    this.removeEventListener("dblclick", mysMsg);
    this.parentNode.replaceChild(para, this);
  }

  /** Scrolls to the top of the page */
  function topOfPage() {
    window.scrollTo(0, 0);
  }

  /** Reveals and hides facts */
  function revealFact() {
    let para = this.parentNode.lastElementChild;
    para.classList.toggle("show");
  }

  // alias functions
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