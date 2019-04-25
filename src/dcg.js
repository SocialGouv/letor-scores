var mean = require("compute-mean");

const dcg = predictions =>
  mean(predictions.map((prediction, i) => prediction / (Math.log2(i + 1) + 1)));

module.exports = dcg;
