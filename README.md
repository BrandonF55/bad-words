Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2




Test: "It should show you all my three words"
Code: wordCounter("hi there brandon");
Expected Output: 3


Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0


test: 'outputs a single word when you put one in it"
code:numberOfOccurrencesInText
let wordCount
numberOfOccurrencesInText(word, text)
expeped 1