var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  var wordcount = 0;

  getWordCount(filePathOne, (err, result) => {
    if (err) {
      callback(err);
    } else {
      wordcount += result;
      getWordCount(filePathTwo, (err, result) => {
        if (err) {
          callback
        } else {
          wordcount += result;
          callback(null, wordcount);
        }
      })
    }
  })
};

module.exports = getTotalWordCount;
