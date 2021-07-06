var natural = require("natural");
var classifier = new natural.BayesClassifier();

// Training Data From input Dataset

// classifier.addDocument("I need to buy a new computer", "hardware");
// classifier.addDocument("I need to clean the code", "software");
// classifier.addDocument("We need to buy a new hard drive", "hardware");
// classifier.addDocument("i need a new power supply", "hardware");
// classifier.addDocument("The motherboard is broken", "hardware");
// classifier.addDocument("We are running out of memory storage", "hardware");
// classifier.addDocument("The computer is new", "hardware");
// classifier.addDocument("The unit test failed", "software");
// classifier.addDocument("The code works well", "software");
// classifier.addDocument("I want to refactor the program", "software");
// classifier.addDocument("program", "software");
// classifier.addDocument("You have to push the code to github", "software");

// External Dataset
const data = require("./data.json"); // Load Data Set from external json

data.forEach((item) => {
  classifier.addDocument(item.text, item.category);
});

// Train
classifier.train();

// Apply/Predict
//console.log(classifier.classify("build pc"));

//Persisting /Save
classifier.save("bayesClassifier.json", function (err, classifier) {});
