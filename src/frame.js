'use strict';
function Frame() {
  this.knockedPins = 0;
  this.MAX_KNOCKED_PINS = 10;
  this.rolls = [];
}
  Frame.prototype.addRolls = function(knockedPins) {
      this.rolls.push(knockedPins);
  };

  Frame.prototype.knockedPins = function () {
    return this.knockedPins;
  };

  Frame.prototype.isStrike = function() {
    return this.knockedPins === this.MAX_KNOCKED_PINS;
  };

  Frame.prototype.returnScore = function () {
    return (this.rolls[0] + this.rolls[1]);
  };
