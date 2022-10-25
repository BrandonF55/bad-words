

//------------------------------------------------------------------

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(word) {
    wordCount++;
		
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (word === text) {
    return 1;
  }
  return 0;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (word.toLowerCase() === element.toLowerCase()) {
      wordCount++
    }
		
  }); 
  return wordCount;
} 
numberOfOccurrencesInText('how','how mant words is this'); 


function includesRarestLetter(word) {
  if (word.toLowerCase().includes("q")) {
    return true;
  }
  return false;
}
console.log(includesRarestLetter("queen"));

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}
console.log(numberOfOccurrencesInText("epic", "epicodus"));