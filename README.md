# Anagram generator

A small app built with Javascript and tested with Jasmine that lets a user provide a word which is compared to a data file and shows the user any anagrams of that word that are in the file.

tags: TDD, JavaScript, Jasmine

## Test requirements (set as a junior developer tech test)

Set time 1hr
You have been asked to create a simple interactive application which can solve anagrams. For a word entered by a user, generate a list of all possible anagrams contained in this wordlist.
`http://codekata.com/data/wordlist.txt`
For instance, if the user enters `paste`, your program should produce the results `pates`, `peats`, `septa`, `spate`, `tapes`, and `tepas`.
Consider especially how we will know if your code is correct, without having to run it exhaustively against the entire word list.
You may also wish to consider how your code handles edge cases such as hyphenated words.
You can write your answer in any language or framework you feel. You might write a command-line Ruby script, or a JavaScript solution in a web page.

### Process

(before writing any code)

* My initial thoughts are that there is a short time window of 1 hr, so I think this will have to be a simple command line app. It would be great to make a small single page web app but i dont think i have that sort of time.
* I would like to write this in Javascript, using Jasmine as my unit testing framework. The user interaction will take place in the browser in the dev tools console.
* I will first look to work out some basic logic based on a very small test data set of a few words in an array, just to work out how the logic will work.
* Then i need to work out how to get the data from the wordlist.txt into my program in a format i can use. Not sure if that will be a get request via xml or if maybe i should just download the file to the root of my project.

(during)

* I have set up an initial structure of my anagram generator, using a small data sample with no edge cases.
* Before looking at how to get the dictionary data, i want to maybe also just cover a couple of edge cases, like if there is an apostrophe or hyphen and capitalization of a word.

* Introducing an XML call to the file, Ive pretty much run out of time and it would be great to figure out a better way to do this.

(after)

* I now have a program that relies on an xml request that seems to be very slow. There must be a better way to do this, maybe downloading the txt file to the root of my project and trying to work with it there, but im out of time.
* I also am not sure about where to put the xml request. At the moment is sits above my class, all in one file. It just doesnt look right so i will maybe try to do some research and figure out a better way to structure the project.
* Overall im happy with the basic functionality and i think it seems to work.
* The task asked me to think about how i would know my code is correct without running it against the entire list. I think I would probably write some more tests in order to be sure.

### User stories

```
As a user
so that I can see the anagrams of a chose word
I want to be able to enter a word and see the anagrams.
```

### Using the app

```
$ git clone https://github.com/Lucx14/Anagram-generator.git
$ cd Anagram-generator
$ open -a "Google Chrome" SpecRunner.html
```
You should see the Jasmine test output passing.
Open Chrome dev tools to interact with the program.

```
let anagramGenerator = new Anagram();

anagramGenerator.getAnagrams('paste');

"paste has the following anagrams: Pate's, pate's, pates, peat's, peats, septa, spate, tape's, tapes, tepas"
```