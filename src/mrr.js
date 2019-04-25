/*

MRR: inverse du rang du premier résultat pertinent
    y_pred: list of documents id predicted by the system
    y_true: list of documents expected by human evaluator
*/
const mrr = ({ predictions, expected }) => {
  // if document not found give a fictional rank 100
  let res = 100;
  predictions.every((prediction, i) => {
    if (expected.includes(prediction)) {
      res = 1 / (i + 1);
      return;
    }
    return true;
  });
  return res;
};

module.exports = mrr;
