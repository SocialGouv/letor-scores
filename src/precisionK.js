/*
 precision at k: quelle proportion de resultat pertinents dans les k premiers documents.

Description reference:
    Kishida, Kazuaki. "Property of average precision and its generalization:
    An examination of evaluation indicator for information retrieval experiments."
    Tokyo, Japan: National Institute of Informatics, 2005.

Parameters:
    reference   - a gold standard (perfect) ordering Ex: [5,4,3,2,1]
    hypothesis  - a proposed ordering Ex: [5,2,2,3,1]
    k           - a number of top element to consider

Returns:
    precision   - a score
*/

const precisionK = ({ predictions, expected, k = 3 }) => {
  // check if result precise (positional)
  if (predictions.length === 0) {
    return 0;
  }
  if (k > predictions.length) {
    k = predictions.length;
  }
  const targetPredictions = predictions.slice(0, k);
  const intersection = targetPredictions.filter(prediction =>
    expected.includes(prediction)
  );

  const precision = intersection.length / targetPredictions.length;

  return precision;
};

module.exports = precisionK;
