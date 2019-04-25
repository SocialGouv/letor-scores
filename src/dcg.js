const mean = require("compute-mean");

const computeDcg = predictions =>
  mean(predictions.map((prediction, i) => prediction / (Math.log2(i + 1) + 1)));

const dcg = ({ predictions, expectedScores, k = 3 }) => {
  if (k > predictions.length) {
    k = predictions.length;
  }
  const yScores = predictions.map(
    prediction => expectedScores[prediction] || 0
  );

  const computedDcg = computeDcg(yScores.slice(0, k));

  const idealScores = Object.values(expectedScores);
  idealScores.reverse();

  const idealDcg = computeDcg(idealScores.slice(0, k));

  return computedDcg / idealDcg;
};

module.exports = dcg;
