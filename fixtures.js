module.exports = {
  emptyPrediction: {
    predictions: [],
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 3
  },
  badPrediction1: {
    predictions: ["e", "f", "g", "h"],
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 3
  },
  moreDocuments1: {
    predictions: ["a", "f", "c", "h"],
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 3
  },
  moreDocuments2: {
    predictions: ["a", "f", "c", "h", "d", "b"],
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 3
  },
  goodRanking1: {
    predictions: ["a", "b", "d"],
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 3
  },
  badRanking1: {
    predictions: ["e", "a", "b", "d"],
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 3
  },
  goodRanking2: {
    predictions: ["a", "b", "d"],
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 5
  },
  idealDcgHigh: {
    predictions: ["a", "b", "d"],
    expectedScores: {
      a: 5,
      e: 8 // simultaneously assert e has no impact
    },
    k: 3
  },
  idealDcgLow: {
    predictions: ["a", "b", "d"],
    expectedScores: {
      a: 1
    },
    k: 3
  },
  relativeDcgLow: {
    predictions: ["a", "b"],
    expectedScores: {
      a: 3,
      b: 2,
      c: 5
    },
    k: 3
  },
  relativeDcgHigh: {
    predictions: ["a", "b"],
    expectedScores: {
      a: 5,
      b: 3,
      c: 5
    },
    k: 3
  },
  perfect1: {
    predictions: ["a", "e", "f", "g", "b"],
    expectedScores: { a: 5, b: 3 },
    k: 2
  },
  perfectPrecision1: {
    predictions: ["a", "g"],
    expectedScores: { a: 5, e: 5, f: 5, g: 5, b: 3 },
    k: 2
  },
  perfectPrecisionGood: {
    predictions: ["d", "a", "w"],
    expectedScores: { a: 5, w: 3 },
    k: 2
  },
  perfectPrecisionBad: {
    predictions: ["d", "w", "a"],
    expectedScores: { a: 5, w: 3 },
    k: 2
  },
  oneGoodResult: {
    predictions: ["a", "b", "d"],
    expectedScores: { a: 5 },
    k: 2
  },
  sorted1: {
    predictions: ["a", "b", "w"],
    expectedScores: { a: 3, b: 2, c: 1 },
    k: 2
  },
  sorted2: {
    predictions: ["a", "b", "w"],
    expectedScores: {
      a: 3,
      c: 1,
      b: 2
    },
    k: 2
  }
};
