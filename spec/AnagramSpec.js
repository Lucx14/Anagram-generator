'use strict'

describe ('Anagram', () => {

  let anagram;
  let anagram2;
  let anagram3;
  let anagram4;
  let data = ['paste', 'pates', 'peats', 'septa', 'spate', 'tapes', 'tepas', 'zzzzz', 'moreletters'];
  let data2 = ['Paste', 'PATES', 'Peats', 'SEPTA', 'Spate', 'Tapes', 'Tepas', 'Zzzzz', 'MorEletters'];
  let data3 = ['AA'];
  let data4 = ["Malin's", "Malebolge's", "Paron's", "Reynaldo's"]

  beforeEach(() => {
    anagram = new Anagram(data);
    anagram2 = new Anagram(data2);
    anagram3 = new Anagram(data3);
    anagram4 = new Anagram(data4);
  });

  it('shows all the anagrams of a sample word', () => {
    expect(anagram.getAnagrams('paste')).toEqual('paste has the following anagrams: pates, peats, septa, spate, tapes, tepas');
  });
  it('shows you when there are no anagrams', () => {
    expect(anagram.getAnagrams('carpenter')).toEqual('There are no anagrams of carpenter');
  });
  it('takes account of capitalization when matches', () => {
    expect(anagram2.getAnagrams('paste')).toEqual('paste has the following anagrams: PATES, Peats, SEPTA, Spate, Tapes, Tepas');
  });
  it('takes account of capitalization when no matches', () => {
    expect(anagram3.getAnagrams('aa')).toEqual('There are no anagrams of aa')
  });
  it('takes account of apostrophes when matches', () => {
    expect(anagram4.getAnagrams("snilam")).toEqual("snilam has the following anagrams: Malin's");
  });
  it('takes account of apostrophes when input word contains one', () => {
    expect(anagram4.getAnagrams("snila'm")).toEqual("snila'm has the following anagrams: Malin's");
  });
});