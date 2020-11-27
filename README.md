# letor-scores

[![Github Master CI Status](https://github.com/SocialGouv/letor-scores/workflows/CI/badge.svg?branch=master)](https://github.com/SocialGouv/letor-scores/actions/)
[![codecov](https://codecov.io/gh/SocialGouv/letor-scores/branch/master/graph/badge.svg)](https://codecov.io/gh/SocialGouv/letor-scores)
[![NPM version](http://img.shields.io/npm/v/@socialgouv/letor-scores.svg)](https://npmjs.org/package/@socialgouv/letor-scores)

JavaScript port of https://github.com/ArmandGiraud/letor_scores

## Usage

```js
const { mrr, dcg, precisionK, recall } = require("@socialgouv/letor-scores");

const predictions = ["a", "b", "c"];
const expected = ["b", "e"];
const expectedScoresDict = { b: 5, e: 1 };

console.log({
  mrr: mrr({
    predictions,
    expected
  }),
  dcg: dcg({
    predictions,
    expectedScores: expectedScoresDict,
    k
  }),
  precision: precisionK({
    predictions,
    expected,
    k
  }),
  recall: recall({
    predictions,
    expected,
    k
  })
});
```

## Dev

Install yarn : `npm i -g yarn`

Then launch tests with `yarn test`

```
 PASS  src/dcg.test.js
  ✓ emptyPrediction return 0 (5ms)
  ✓ badPrediction1 return 0 (1ms)
  ✓ more documents in predictions should not alter dcg
  ✓ better prediction should have higher score (1ms)
  ✓ higher k doesnt crash (1ms)
  ✓ ideal dcg is computed correctly: normalization makes effect
  ✓ dcg relative scores (1ms)
  ✓ dcg is not messed by additional results
  ✓ one good result on first place should be ideal (1ms)
  ✓ expectations are sorted
  ✓ float
  ✓ cdtn1

 PASS  src/mrr.test.js
  ✓ [1, 2, 3], [1] == 1 (6ms)
  ✓ [1, 2, 3], [4] == 0.01
  ✓ [1, 2, 3], [2] == 1/2 (1ms)
  ✓ [1, 2, 3], [1, 2] == 1
  ✓ [1, 2, 3], [4, 5, 6] == 0.01
  ✓ emptyPrediction
  ✓ badPrediction1 (1ms)
  ✓ moreDocuments should not alter mrr
  ✓ goodRanking vs bad ranking (1ms)
  ✓ higher k doesnt crash (1ms)

 PASS  src/recall.test.js
  ✓ emptyPrediction (5ms)
  ✓ badPrediction1 (1ms)
  ✓ more documents than k should have identical results (1ms)
  ✓ goodRanking vs badRanking1
  ✓ higher k doesnt crash (1ms)
  ✓ perfect results
  ✓ perfect precision
  ✓ [1, 2, 3], [1], k = 1) == 1 (1ms)
  ✓ [1, 2, 3], [9], k = 1) == 0
  ✓ [1, 2, 3], [1], k = 3) == 1
  ✓ [1, 2, 3], [3, 1], k = 1) == 1/2 (1ms)
  ✓ [1, 2, 3], [3, 1, 4], k = 2) == 1/3

 PASS  src/precisionK.test.js
  ✓ emptyPrediction (5ms)
  ✓ badPrediction1
  ✓ more predictions should not change results (1ms)
  ✓ goodRanking vs badRanking (1ms)
  ✓ higher k doesnt crash
  ✓ higher k doesnt crash
  ✓ perfect results (1ms)
  ✓ perfect precision
  ✓ [1, 2, 3], [1], 3) == 1/3
  ✓ [1, 2, 3], [1, 2], 3) == 2/3
  ✓ [1, 2, 3], [1, 2, 3], 3) == 1.0 (1ms)
  ✓ [1, 2, 3], [1, 2, 3, 1], 3) == 1.0
  ✓ [1, 2, 3], [4], 3) == 0.0
  ✓ [1, 2, 3], [4, 5, 6], 3) == 0.0
  ✓ empty predictions return 0

Test Suites: 4 passed, 4 total
Tests:       49 passed, 49 total
Snapshots:   0 total
Time:        1.743s
```
