/*def find_recall_k(y_pred, y_true, k):
    """recall: qelle proportion de documents pertinents en regardant seulement les k premiers documents.
    y_pred: list of documents id predicted by the system
    y_true: list of documents expected by human evaluator"""
    res = 0
    nb_relevant = len(y_true)
    if k > len(y_pred):
        raise ValueError("k: longer than nb of results in y_pred")

    relevant_found = len(set(y_pred[:k]).intersection(y_true))
    return relevant_found/nb_relevant
*/

const recall = ({ predictions, expected, k = 3 }) => {
  if (predictions.length === 0) {
    return 0;
  }
  if (k > predictions.length) {
    k = predictions.length;
  }
  const revelantFound = predictions
    .slice(0, k)
    .filter(prediction => expected.includes(prediction)).length;

  return revelantFound / expected.length;
};

module.exports = recall;
