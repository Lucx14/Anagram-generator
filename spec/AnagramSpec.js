'use strict'

describe ('Anagram', () => {

  let anagram;
  let data = ['paste', 'pates', 'peats', 'septa', 'spate', 'tapes', 'tepas', 'zzzzz', 'moreletters'];

  beforeEach(() => {
    anagram = new Anagram(data);
  });

  it('shows all the anagrams of a sample word', () => {
    expect(anagram.getAnagrams('paste')).toEqual('pates, peats, septa, spate, tapes, tepas');
  });
});