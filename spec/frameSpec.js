'use strict';

describe('Frame', function() {
  var frame;
  var knockedPins;

  beforeEach(function() {
    frame = new Frame();
  });

  it('adds knocked pins in the rolls', function() {
    frame.addRolls(5);
    expect(frame.rolls).toContain(5);
  });

  it('checks if it is a strike', function() {
    frame.knockedPins = 10;
    expect(frame.isStrike()).toBe(true);
  });

  it('calculates the score of a simple game', function() {
    frame.addRolls(3);
    frame.addRolls(5);
    expect(frame.returnScore()).toEqual(8);
  });
});
