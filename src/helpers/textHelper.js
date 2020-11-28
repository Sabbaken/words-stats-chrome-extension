import { mostUsedWords } from '../constants/mostUsedWords';

export const cleanUpText = (pageText) => {
  let text = pageText.replace(/(\r\n|\n|\r)/gm, "");

  text = text.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ");
  text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ");
  text = text.replace(/<img\b[^<]*(?:(?!<\/img>)<[^<]*)*<\/img>/gi, " ");
  text = text.replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, " ");
  text = text.replace(/<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi, " ");
  text = text.replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, " ");
  text = text.replace(/<a\b[^<]*(?:(?!<\/a>)<[^<]*)*<\/a>/gi, " ");
  text = text.replace(/<!--.*?-->/sg, "");

  text = text.replace(/(&nbsp;|<([^>]+)>)/ig, " ");
  text = text.replace(
    /(~|`|!|@|#|\$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=|—|©|«|»)/g,
    " ");
  text = text.replace(/([0-9])/g, ' ');
  text = text.replace(/(\r\n|\n|\r)/gm, '');
  text = text.replace(/\s\s+/g, ' ');
  text = text.toLowerCase();
  ;

  return text;
}

export const countWords = (text) => {
  // Count words
  let str = text,
    split = str.split(" "),
    obj = {};

  for (let x = 0; x < split.length; x++) {
    if (obj[split[x]] === undefined) {
      obj[split[x]] = 1;
    } else {
      obj[split[x]]++;
    }
  }

  // Convert from object to aray
  let arrayOfWords = [];
  for (const [key, value] of Object.entries(obj)) {
    arrayOfWords.push({ word: key, value: value })
  }

  // Sort
  arrayOfWords.sort((a, b) => a.value - b.value);

  return (arrayOfWords)
}

export const percentageOfMostPopularWords = (arrayOfWords) => {
  let onlyWords = arrayOfWords.map((wordObj) => (wordObj.word))
  const duplicatedValues = [...new Set(onlyWords)].filter(item => mostUsedWords.includes(item));
  return (duplicatedValues.length / arrayOfWords.length);
}

