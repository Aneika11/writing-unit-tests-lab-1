/* eslint-disable linebreak-style */

const { text } = require("stream/consumers");

// Question 1
const isUpperCase = (words) => {
return  words === words.toUpperCase() ? true : false;
};

// Question 2
const removeVowels = (words) => {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return words.map(word => {
        return word.split('').filter(el => !vowels.includes(el)).join('');
    });
};

// Question 3
const wordCap = (string) => {
  let words = string.split(/\s+/);
  let capitalizedWords = words.map(function(word) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(" ");
};

// Question 4
const swapCase = (string) => {
  let swapped = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char === char.toUpperCase()) {
      swapped += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      swapped += char.toUpperCase();
    } else {
      swapped += char;
    }
  }
  return swapped;
};

// Question 5
const staggeredCase = (string) => {
  let result = "";
  let isUpper = true;
  for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (char.match(/[a-zA-Z]/)) {
          if (isUpper) {
              result += char.toUpperCase();
          } else {
              result += char.toLowerCase();
          }
          isUpper = !isUpper;
      } else {
          result += char;
      }
  }
  return result;
};

// Question 6
const wordLengths = (sentence) => {
  if (!sentence) return [];

  let words = sentence.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(`${words[i]} ${words[i].length}`);
  }
  return result;
};

// Question 7
const searchWord = (word, string) => {
return string.replace(/[,?!.]/ig,"").split(" ").filter(el => el.toLowerCase() === word.toLowerCase() ).length
};


// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
