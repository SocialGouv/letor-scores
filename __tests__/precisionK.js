const { precisionK } = require("../src");

test("[1, 2, 3], [1], 3) == 1/3", () => {
  expect(
    precisionK({
      predictions: [1, 2, 3],
      expected: [1],
      k: 3
    })
  ).toEqual(1 / 3);
});
test("[1, 2, 3], [1, 2], 3) == 2/3", () => {
  expect(
    precisionK({
      predictions: [1, 2, 3],
      expected: [1, 2],
      k: 3
    })
  ).toEqual(2 / 3);
});
test("[1, 2, 3], [1, 2, 3], 3) == 1.0", () => {
  expect(
    precisionK({
      predictions: [1, 2, 3],
      expected: [1, 2, 3],
      k: 3
    })
  ).toEqual(1.0);
});
test("[1, 2, 3], [2, 3, 1], 3) == 0.0", () => {
  expect(
    precisionK({
      predictions: [1, 2, 3],
      expected: [2, 3, 1],
      k: 3
    })
  ).toEqual(0.0);
});
test("[1, 2, 3], [1, 2, 3, 1], 3) == 1.0", () => {
  expect(
    precisionK({
      predictions: [1, 2, 3],
      expected: [1, 2, 3, 1],
      k: 3
    })
  ).toEqual(1.0);
});
test("[1, 2, 3], [4], 3) == 0.0", () => {
  expect(
    precisionK({
      predictions: [1, 2, 3],
      expected: [4],
      k: 3
    })
  ).toEqual(0.0);
});
test("[1, 2, 3], [4, 5, 6], 3) == 0.0", () => {
  expect(
    precisionK({
      predictions: [1, 2, 3],
      expected: [4, 5, 6],
      k: 3
    })
  ).toEqual(0.0);
});
test("empty predictions return 0", () => {
  expect(
    precisionK({
      predictions: [],
      expected: [4, 5, 6],
      k: 3
    })
  ).toEqual(0.0);
});
