export const validateText = (text, minWords, maxWords) => {
  
  // Check if text is empty
  if (text === "" || text === undefined) {
    return false;
  }
  
  // Remove leading and trailing white space from text
  text = text.trim();
  // Count the number of words in the text
  const words = text.split(" ");
  const numWords = words.length;
  
  // Check if the number of words is within the specified range
  if (numWords < minWords || numWords > maxWords) {
    return false;
  }
  
  // If the text is not empty and has an adequate number of words, consider it valid
  return true;
}