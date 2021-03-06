const sum = (arr) => arr.reduce((a, c) => a + c, 0);

const computeDcg = (predictions) =>
  sum(predictions.map((prediction, i) => prediction / (Math.log2(i + 1) + 1)));

const dcg = ({ predictions, expectedScores, k = 3 }) => {
  if (predictions.length === 0) {
    return 0;
  }

  if (k > predictions.length) {
    k = predictions.length;
  }

  const yScores = predictions.map(
    (prediction) => expectedScores[prediction] || 0
  );

  const computedDcg = computeDcg(yScores.slice(0, k));

  const idealScores = Object.keys(expectedScores)
    .map((key) => expectedScores[key])
    .sort()
    .reverse();

  const idealDcg = computeDcg(idealScores.slice(0, k));

  //console.log({ computedDcg, idealDcg, idealScores });

  return computedDcg / idealDcg || 0;
};

module.exports = dcg;
