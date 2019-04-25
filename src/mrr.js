/*
MRR: inverse du rang du premier résultat pertinent
    y_pred: list of documents id predicted by the system
    y_true: list of documents expected by human evaluator
*/
const mrr = ({ predictions, expected }) => {
  let res = predictions.length + 1; // if document not found give the rank of the last document + 1;
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
