import * as actionTypes from '../actions/actionTypes';

const initialState = {
  books: [],
  isLoading: false,
}
export default function fetchBooks(state=initialState, action) {
  switch(action.type) {
    case actionTypes.GET_BOOKS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      })
    case actionTypes.GET_BOOKS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        books: [
          ...action.data.items
        ]
      });
    case actionTypes.GET_BOOKS_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
      })
    default: 
      return state;
  }
}
