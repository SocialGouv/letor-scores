const { precisionK } = require(".");

const fixtures = require("../fixtures");

// add "expected" key from the fixtures expectedScores
const format = (fixture) => ({
  ...fixture,
  expected: Object.keys(fixture.expectedScores),
});

test("emptyPrediction", () => {
  expect(precisionK(format(fixtures.emptyPrediction))).toEqual(0);
});
test("badPrediction1", () => {
  expect(precisionK(format(fixtures.emptyPrediction))).toEqual(0);
});
test("more predictions should not change results", () => {
  expect(precisionK(format(fixtures.moreDocuments1))).not.toEqual(0);
  expect(precisionK(format(fixtures.moreDocuments1))).toEqual(
    precisionK(format(fixtures.moreDocuments2))
  );
});
test("goodRanking vs badRanking", () => {
  expect(precisionK(format(fixtures.goodRanking1))).toEqual(1);
  expect(precisionK(format(fixtures.badRanking1))).toEqual(2 / 3);
  expect(precisionK(format(fixtures.goodRanking1))).toBeGreaterThan(
    precisionK(format(fixtures.badRanking1))
  );
});

test("higher k doesnt crash", () => {
  expect(() =>
    precisionK(format({ ...fixtures.goodRanking1, k: 5 }))
  ).not.toThrow();
});

test("perfect results", () => {
  expect(precisionK(format({ ...fixtures.perfect1, k: 5 }))).not.toEqual(1);
});

test("perfect precision", () => {
  expect(precisionK(format({ ...fixtures.perfectPrecision1, k: 5 }))).toEqual(
    1
  );
});

test("[1, 2, 3], [1], 3) == 1/3", () => {
  expect(
    precisionK({
      expected: [1],
      k: 3,
      predictions: [1, 2, 3],
    })
  ).toEqual(1 / 3);
});
test("[1, 2, 3], [1, 2], 3) == 2/3", () => {
  expect(
    precisionK({
      expected: [1, 2],
      k: 3,
      predictions: [1, 2, 3],
    })
  ).toEqual(2 / 3);
});
test("[1, 2, 3], [1, 2, 3], 3) == 1.0", () => {
  expect(
    precisionK({
      expected: [1, 2, 3],
      k: 3,
      predictions: [1, 2, 3],
    })
  ).toEqual(1.0);
});
test("[1, 2, 3], [1, 2, 3, 1], 3) == 1.0", () => {
  expect(
    precisionK({
      expected: [1, 2, 3, 1],
      k: 3,
      predictions: [1, 2, 3],
    })
  ).toEqual(1.0);
});
test("[1, 2, 3], [4], 3) == 0.0", () => {
  expect(
    precisionK({
      expected: [4],
      k: 3,
      predictions: [1, 2, 3],
    })
  ).toEqual(0.0);
});
test("[1, 2, 3], [4, 5, 6], 3) == 0.0", () => {
  expect(
    precisionK({
      expected: [4, 5, 6],
      k: 3,
      predictions: [1, 2, 3],
    })
  ).toEqual(0.0);
});
test("empty predictions return 0", () => {
  expect(
    precisionK({
      expected: [4, 5, 6],
      k: 3,
      predictions: [],
    })
  ).toEqual(0.0);
});
