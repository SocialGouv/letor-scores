const { dcg } = require("../src");

test("[0,0,0,0] => 0", () => {
  expect(dcg([0, 0, 0, 0])).toEqual(0);
});

test("[1,0,0,0] => 0.25", () => {
  expect(dcg([1, 0, 0, 0])).toEqual(0.25);
});

test("[0,1,0,0] => 0.125", () => {
  expect(dcg([0, 1, 0, 0])).toEqual(0.125);
});
