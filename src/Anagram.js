'use strict'

let dataSet;
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      dataSet = xhr.responseText.split('\n')
      console.log(dataSet);
    }
    if (xhr.status == 404) {
      console.log('File or resource not found');
    }
  }
};
xhr.open('get', 'http://codekata.com/data/wordlist.txt', true);
xhr.send();
// Had to turn on CORS chrome extention for this to work



function Anagram(data = dataSet) {
  this.data = data
}

Anagram.prototype.getAnagrams = function(word) {
  let result = [];
  let sortedWord = this.formatWord(word);

  for (let i = 0; i < this.data.length; i +=1) {
    if (this.formatWord(this.data[i]) === sortedWord && this.data[i].toLowerCase() !== word.toLowerCase()) {
      result.push(this.data[i]);
    }
  }
  if (result.length < 1) return `There are no anagrams of ${word}`;
  return `${word} has the following anagrams: ${result.join(', ')}`;
}

Anagram.prototype.formatWord = function(word) {
  return word
    .replace(/['-]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}