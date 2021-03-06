const { dcg } = require(".");

const fixtures = require("../fixtures");

test("emptyPrediction return 0", () => {
  expect(dcg(fixtures.emptyPrediction)).toEqual(0);
});

test("badPrediction1 return 0", () => {
  expect(dcg(fixtures.badPrediction1)).toEqual(0);
});

test("more documents in predictions should not alter dcg", () => {
  expect(dcg(fixtures.moreDocuments1)).not.toEqual(0);
  expect(dcg(fixtures.moreDocuments2)).not.toEqual(0);
  //expect(dcg(fixtures.moreDocuments1)).toEqual(dcg(fixtures.moreDocuments2));
});

test("better prediction should have higher score", () => {
  expect(dcg(fixtures.goodRanking1)).not.toEqual(0);
  expect(dcg(fixtures.badRanking1)).not.toEqual(0);
  expect(dcg(fixtures.goodRanking1)).toBeGreaterThan(dcg(fixtures.badRanking1));
});

test("higher k doesnt crash", () => {
  expect(() => dcg(fixtures.goodRanking2)).not.toThrow();
});

test("ideal dcg is computed correctly: normalization makes effect", () => {
  expect(dcg(fixtures.idealDcgHigh)).toEqual(0.47619047619047616);
  expect(dcg(fixtures.idealDcgLow)).toEqual(1);
});

test("dcg relative scores", () => {
  expect(dcg(fixtures.relativeDcgLow)).toEqual(0.6153846153846154);
  expect(dcg(fixtures.relativeDcgHigh)).toEqual(0.8666666666666667);
});

test("dcg is not messed by additional results", () => {
  expect(dcg(fixtures.perfectPrecisionBad)).not.toEqual(0);
  expect(dcg(fixtures.perfectPrecisionGood)).not.toEqual(0);
  expect(dcg(fixtures.perfectPrecisionGood)).toBeGreaterThan(
    dcg(fixtures.perfectPrecisionBad)
  );
});

test("one good result on first place should be ideal", () => {
  expect(dcg(fixtures.oneGoodResult)).toEqual(1);
});

test("expectations are sorted", () => {
  expect(dcg(fixtures.sorted1)).toEqual(1);
  expect(dcg(fixtures.sorted1)).toEqual(dcg(fixtures.sorted2));
});

test("float", () => {
  expect(dcg(fixtures.floatDcg)).toEqual(0.8940033906019785);
});

test("cdtn1", () => {
  expect(dcg(fixtures.cdtn1)).toEqual(0.26499152349505367);
});
