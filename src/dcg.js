const sum = arr => arr.reduce((a, c) => a + c, 0);

const computeDcg = predictions =>
  sum(predictions.map((prediction, i) => prediction / (Math.log2(i + 1) + 1)));

const dcg = ({ predictions, expectedScores, k = 3 }) => {
  if (predictions.length === 0) {
    return 0;
  }

  if (k > predictions.length) {
    k = predictions.length;
  }

  const isExpectedPrediction = prediction =>
    Object.keys(expectedScores).includes(prediction);

  const yScores = predictions.map(
    prediction => expectedScores[prediction] || 0
  );
  const computedDcg = computeDcg(yScores.slice(0, k));

  const getIdealScore = key =>
    predictions.includes(key) ? expectedScores[key] : 0;

  const idealScores = Object.keys(expectedScores)
    .map(getIdealScore)
    .sort()
    .reverse();

  const idealDcg = computeDcg(idealScores.slice(0, k));

  return computedDcg / idealDcg || 0;
};

module.exports = dcg;
