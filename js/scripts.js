

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
}wordCounter;
wordCounter('hi there im starting to get it');