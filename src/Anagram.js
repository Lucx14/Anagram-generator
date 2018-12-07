'use strict'

function Anagram(data) {
  this.data = data
}

Anagram.prototype.getAnagrams= function(word) {
  let result = [];
  let sortedWord = word.toLowerCase().split('').sort().join('');

  console.log(sortedWord);
  console.log(this.data);

  for (let i = 0; i < this.data.length; i +=1) {
    if (this.data[i].toLowerCase().split('').sort().join('') === sortedWord && this.data[i].toLowerCase() !== word.toLowerCase()) {
      result.push(this.data[i]);
    }
  }

  console.log(result.join(', '));

  if (result.length < 1) {
    return `There are no anagrams of ${word}`
  }
  return `${word} has the following anagrams: ${result.join(', ')}`;
}