const { mrr } = require("../src");

test("[1, 2, 3], [1] == 1", () => {
  expect(mrr({ predictions: [1, 2, 3], expected: [1] })).toEqual(1);
});
test("[1, 2, 3], [2] == 1/2", () => {
  expect(mrr({ predictions: [1, 2, 3], expected: [2] })).toEqual(1 / 2);
});
test("[1, 2, 3], [1, 2] == 1", () => {
  expect(mrr({ predictions: [1, 2, 3], expected: [1, 2] })).toEqual(1);
});
