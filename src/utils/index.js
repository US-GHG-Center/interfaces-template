export function stringToNumberHash(str) {
  let hash = 0;
  // If the string is empty, return 0
  if (str.length === 0) {
    return hash;
  }

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i); // Get the Unicode value of the character
    hash = ((hash << 5) - hash) + char; // A common hash algorithm (hash * 31 + char)
    hash |= 0; // Convert to a 32-bit integer (effectively a signed 32-bit integer)
  }

  // Return the absolute value to ensure it's always positive,
  // or you can leave it signed if your use case allows negative numbers.
  // Using Math.abs() to ensure it's positive, as colors or indices are usually positive.
  return Math.abs(hash);
}


/*
  Converts a string to title case, capitalizing the first letter of each word
*/
export function titleCase(text) {
  if (!text) {
    return ''; // Handle empty strings gracefully
  }

  // Convert the string to lowercase, then split it into an array of words
  const words = text.toLowerCase().split(' ');

  // Map over the array, capitalizing the first letter of each word
  const titleCasedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words back into a single string with spaces
  return titleCasedWords.join(' ');
}