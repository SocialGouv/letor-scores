const { recall } = require(".");

const fixtures = require("../fixtures");

// add "expected" key from the fixtures expectedScores
const format = (fixture) => ({
  ...fixture,
  expected: Object.keys(fixture.expectedScores),
});

test("emptyPrediction", () => {
  expect(recall(format(fixtures.emptyPrediction))).toEqual(0);
});

test("badPrediction1", () => {
  expect(recall(format(fixtures.badPrediction1))).toEqual(0);
});

test("more documents than k should have identical results", () => {
  expect(recall(format(fixtures.moreDocuments1))).toEqual(0.5);
  expect(recall(format(fixtures.moreDocuments1))).toEqual(
    recall(format(fixtures.moreDocuments2))
  );
});

test("goodRanking vs badRanking1", () => {
  expect(recall(format(fixtures.goodRanking1))).toBeGreaterThan(
    recall(format(fixtures.badRanking1))
  );
});

test("higher k doesnt crash", () => {
  expect(() =>
    recall(format({ ...fixtures.goodRanking1, k: 5 }))
  ).not.toThrow();
});

test("perfect results", () => {
  expect(recall(format({ ...fixtures.perfect1, k: 5 }))).toEqual(1);
});

test("perfect precision", () => {
  expect(recall(format({ ...fixtures.perfectPrecision1, k: 5 }))).not.toEqual(
    1
  );
});

test("[1, 2, 3], [1], k = 1) == 1", () => {
  expect(
    recall({
      expected: [1],
      k: 1,
      predictions: [1, 2, 3],
    })
  ).toEqual(1);
});

test("[1, 2, 3], [9], k = 1) == 0", () => {
  expect(
    recall({
      expected: [9],
      k: 1,
      predictions: [1, 2, 3],
    })
  ).toEqual(0);
});

test("[1, 2, 3], [1], k = 3) == 1", () => {
  expect(
    recall({
      expected: [1],
      k: 3,
      predictions: [1, 2, 3],
    })
  ).toEqual(1);
});

test("[1, 2, 3], [3, 1], k = 1) == 1/2", () => {
  expect(
    recall({
      expected: [3, 1],
      k: 1,
      predictions: [1, 2, 3],
    })
  ).toEqual(1 / 2);
});

test("[1, 2, 3], [3, 1, 4], k = 2) == 1/3", () => {
  expect(
    recall({
      expected: [3, 1, 4],
      k: 2,
      predictions: [1, 2, 3],
    })
  ).toEqual(1 / 3);
});
