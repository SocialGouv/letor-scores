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
