# letor-scores

JavaScript port of https://github.com/ArmandGiraud/letor_scores

## Usage

```js
const { mrr, dcg, precisionK, recall } = require("@socialgouv/letor-scores");

console.log(
  mrr({
    predictions: ["a", "b", "c", "d"],
    expected: ["c", "d"]
  })
);

console.log(
  dcg({
    predictions: ["a", "b", "c", "d"],
    expectedScores: {
      a: 2,
      c: 1
    },
    k: 3
  })
);

console.log(
  precisionK({
    predictions: ["a", "b", "c", "d"],
    expected: ["c", "d"],
    k: 3
  })
);

console.log(
  recall({
    predictions: ["a", "b", "c", "d"],
    expected: ["c", "d"],
    k: 3
  })
);
```

## Dev

Install yarn : `npm i -g yarn`

Then launch tests with `yarn test`

```
 PASS  src/recall.test.js
  ✓ emptyPrediction (4ms)
  ✓ badPrediction1
  ✓ more documents than k should have identical results (1ms)
  ✓ goodRanking vs badRanking1
  ✓ higher k doesnt crash (1ms)
  ✓ perfect results
  ✓ perfect precision
  ✓ [1, 2, 3], [1], k = 1) == 1
  ✓ [1, 2, 3], [9], k = 1) == 0 (1ms)
  ✓ [1, 2, 3], [1], k = 3) == 1
  ✓ [1, 2, 3], [3, 1], k = 1) == 1/2
  ✓ [1, 2, 3], [3, 1, 4], k = 2) == 1/3

 PASS  src/precisionK.test.js
  ✓ emptyPrediction (1ms)
  ✓ badPrediction1
  ✓ more predictions should not change results (1ms)
  ✓ goodRanking vs badRanking (1ms)
  ✓ higher k doesnt crash
  ✓ higher k doesnt crash
  ✓ perfect results
  ✓ perfect precision (1ms)
  ✓ [1, 2, 3], [1], 3) == 1/3
  ✓ [1, 2, 3], [1, 2], 3) == 2/3
  ✓ [1, 2, 3], [1, 2, 3], 3) == 1.0
  ✓ [1, 2, 3], [1, 2, 3, 1], 3) == 1.0 (1ms)
  ✓ [1, 2, 3], [4], 3) == 0.0
  ✓ [1, 2, 3], [4, 5, 6], 3) == 0.0
  ✓ empty predictions return 0

 PASS  src/mrr.test.js
  ✓ [1, 2, 3], [1] == 1 (1ms)
  ✓ [1, 2, 3], [4] == 0.01 (1ms)
  ✓ [1, 2, 3], [2] == 1/2
  ✓ [1, 2, 3], [1, 2] == 1
  ✓ [1, 2, 3], [4, 5, 6] == 0.01 (1ms)
  ✓ emptyPrediction
  ✓ badPrediction1
  ✓ moreDocuments should not alter mrr (1ms)
  ✓ goodRanking vs bad ranking
  ✓ higher k doesnt crash

 PASS  src/dcg.test.js
  ✓ emptyPrediction return 0 (1ms)
  ✓ badPrediction1 return 0
  ✓ more documents in predictions should not alter dcg
  ✓ better prediction should have higher score (1ms)
  ✓ higher k doesnt crash (1ms)
  ✓ ideal dcg is computed correctly: normalization makes effect
  ✓ dcg relative scores (1ms)
  ✓ dcg is not messed by additional results
  ✓ one good result on first place should be ideal
  ✓ expectations are sorted (1ms)

Test Suites: 4 passed, 4 total
Tests:       47 passed, 47 total
Snapshots:   0 total
Time:        1.909s
```

