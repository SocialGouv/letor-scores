const { mrr } = require(".");

const fixtures = require("../fixtures");

// add "expected" key from the fixtures expectedScores
const format = fixture => ({
  ...fixture,
  expected: Object.keys(fixture.expectedScores)
});

test("[1, 2, 3], [1] == 1", () => {
  expect(mrr({ predictions: [1, 2, 3], expected: [1] })).toEqual(1);
});

test("[1, 2, 3], [4] == 0.01", () => {
  expect(mrr({ predictions: [1, 2, 3], expected: [4] })).toEqual(0.01);
});

test("[1, 2, 3], [2] == 1/2", () => {
  expect(mrr({ predictions: [1, 2, 3], expected: [2] })).toEqual(1 / 2);
});

test("[1, 2, 3], [1, 2] == 1", () => {
  expect(mrr({ predictions: [1, 2, 3], expected: [1, 2] })).toEqual(1);
});

test("[1, 2, 3], [4, 5, 6] == 0.01", () => {
  expect(mrr({ predictions: [1, 2, 3], expected: [4, 5, 6] })).toEqual(0.01);
});

test("emptyPrediction", () => {
  expect(mrr(format(fixtures.emptyPrediction))).toEqual(0.01);
});

test("badPrediction1", () => {
  expect(mrr(format(fixtures.badPrediction1))).toEqual(0.01);
});

test("moreDocuments should not alter mrr", () => {
  expect(mrr(format(fixtures.moreDocuments1))).toEqual(1);
  expect(mrr(format(fixtures.moreDocuments1))).toEqual(
    mrr(format(fixtures.moreDocuments2))
  );
});

test("goodRanking vs bad ranking", () => {
  expect(mrr(format(fixtures.goodRanking1))).toEqual(1);
  expect(mrr(format(fixtures.badRanking1))).toEqual(0.5);
  expect(mrr(format(fixtures.goodRanking1))).toBeGreaterThan(
    mrr(format(fixtures.badRanking1))
  );
});

test("higher k doesnt crash", () => {
  expect(() => mrr(format({ ...fixtures.goodRanking1, k: 5 }))).not.toThrow();
});

