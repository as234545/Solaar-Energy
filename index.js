(function(window) {

  "use strict";

  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  function flipCards(options) {
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  flipCards.prototype.options = {
    cardsClass: "flip-card",
    activeClass: "active"
  }

  flipCards.prototype._initEvents = function() {
    var cards = document.getElementsByClassName(this.options.cardsClass),
      i = 0,
      len = cards.length,
      self = this;
    if (len === 0) return;
    for (i, len; i < len; i++) {
      cards[i].addEventListener('click', function() {
        this.classList.toggle(self.options.activeClass);
      });
    }
}

  flipCards.prototype._init = function() {
    this._initEvents();
  }
  window.FlipCards = flipCards;

  // Support for CommonJS Module format and AMD format.
  if (typeof module !== "undefined" && module.exports) {
    module.exports.FlipCards = flipcards;
  } else if ((typeof define !== "undefined" && define !== null) && (define.amd !== null)) {
    define("flipcards.js", function() {
      return flipcards;
    });
  }

})(window);

var flipcards = new FlipCards({
  cardsClass: "flip-card", //default
  activeClass: "active" //default
});