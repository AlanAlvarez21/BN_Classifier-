const natural = require("natural");

natural.BayesClassifier.load(
  "bayesClassifier.json", // call the trained script
  null,
  function (err, classifier) {
    console.log(classifier.classify("i need to lear foreach"));
  }
);
