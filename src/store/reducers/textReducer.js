import { FETCH_CURRENT_PAGE_ERROR, FETCH_CURRENT_PAGE_SUCCESS, } from '../../constants/actionTypes';

const initialState = {
  error: null,
  text: '',
  percentage: 0,
  uniqueWordsInTotal: 0,
  wordsInTotal: 0
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CURRENT_PAGE_SUCCESS:
      return {
        ...state,
        ...payload
      };

    case FETCH_CURRENT_PAGE_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
