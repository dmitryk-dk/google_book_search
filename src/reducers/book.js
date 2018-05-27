import * as actionTypes from '../actions/actionTypes';

const initialState = {
  bookId: '',
}

export default function getBook (state=initialState, action) {
  switch(action.type) {
    case actionTypes.GET_BOOKS_REQUEST:
    return Object.assign({}, state, {
      bookId: '',
    });
    case actionTypes.CHOOSE_BOOK:
      return Object.assign({}, state, {
        bookId: action.bookId
      });
    case actionTypes.CLEAR_FILTER: 
      return Object.assign({}, state, {
        bookId: '',
      })  
    default: 
      return state;
  }
}
