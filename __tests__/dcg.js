const { dcg } = require("../src");

test("[0,0,0,0] => 0", () => {
  expect(
    dcg({
      predictions: [0, 0, 0, 0],
      expectedScores: { 0: 1, 1: 2 },
      k: 3
    })
  ).toEqual(0);
});

test("[1,0,0,0] => 0.25", () => {
  expect(
    dcg({ predictions: [1, 0, 0, 0], expectedScores: { 0: 1, 1: 2 }, k: 3 })
  ).toEqual(0.25);
});

test("[0,1,0,0] => 0.125", () => {
  expect(
    dcg({ predictions: [0, 1, 0, 0], expectedScores: { 0: 1, 1: 2 }, k: 3 })
  ).toEqual(0.125);
});
