'use strict'

describe ('Anagram', () => {

  let anagram;
  let data = ['paste', 'pates', 'peats', 'septa', 'spate', 'tapes', 'tepas', 'zzzzz', 'moreletters'];

  beforeEach(() => {
    anagram = new Anagram(data);
  });

  it('shows all the anagrams of a sample word', () => {
    expect(anagram.getAnagrams('paste')).toEqual('paste has the following anagrams: pates, peats, septa, spate, tapes, tepas');
  });
  it('shows you when there are no anagrams', () => {
    expect(anagram.getAnagrams('carpenter')).toEqual('There are no anagrams of carpenter');
  });
});