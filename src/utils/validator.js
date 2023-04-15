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

export const countWordsAndTruncate = (paragraph, count) => {
  if (!paragraph || paragraph.trim() === '') {
    return '';
  }

  const words = paragraph.split(' ');

  if (words.length <= count) {
    return paragraph;
  }

  const truncatedWords = words.slice(0, count);

  return `${truncatedWords.join(' ')}...`;
}

export const formatDate = (timestamp) => {
  const date = new Date(timestamp.seconds * 1000);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};