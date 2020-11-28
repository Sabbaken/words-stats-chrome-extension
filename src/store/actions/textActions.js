import { cleanUpText, countWords, percentageOfMostPopularWords } from '../../helpers/textHelper';
import { FETCH_CURRENT_PAGE_SUCCESS } from '../../constants/actionTypes';

export const processPage = (page) => (dispatch, getState) => {

  let text = cleanUpText(page.toString());
  let arrayOfWords = countWords(text);

  let wordsInTotal = arrayOfWords.reduce((total, word) => (total + word.value), 0)
  let uniqueWordsInTotal = arrayOfWords.length;
  let percentage = percentageOfMostPopularWords(arrayOfWords);

  dispatch({
    type: FETCH_CURRENT_PAGE_SUCCESS,
    payload: { percentage, uniqueWordsInTotal, wordsInTotal }
  })
};
