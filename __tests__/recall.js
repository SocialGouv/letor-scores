const { recall } = require("../src");

test("[1, 2, 3], [1], k = 1) == 1", () => {
  expect(
    recall({
      predictions: [1, 2, 3],
      expected: [1],
      k: 1
    })
  ).toEqual(1);
});
test("[1, 2, 3], [9], k = 1) == 0", () => {
  expect(
    recall({
      predictions: [1, 2, 3],
      expected: [9],
      k: 1
    })
  ).toEqual(0);
});
test("[1, 2, 3], [1], k = 3) == 1", () => {
  expect(
    recall({
      predictions: [1, 2, 3],
      expected: [1],
      k: 3
    })
  ).toEqual(1);
});
test("[1, 2, 3], [3, 1], k = 1) == 1/2", () => {
  expect(
    recall({
      predictions: [1, 2, 3],
      expected: [3, 1],
      k: 1
    })
  ).toEqual(1 / 2);
});
test("[1, 2, 3], [3, 1, 4], k = 2) == 1/3", () => {
  expect(
    recall({
      predictions: [1, 2, 3],
      expected: [3, 1, 4],
      k: 2
    })
  ).toEqual(1 / 3);
});
