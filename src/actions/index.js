import { 
  GET_BOOKS_REQUEST, 
  GET_BOOKS_SUCCESS, 
  CHOOSE_BOOK,
  CLEAR_FILTER,
} from "./actionTypes";

export function getBooks(url) {
  return (dispatch) => {
    dispatch({
      type: GET_BOOKS_REQUEST,
    });
    fetch(url, {method: 'GET'})
      .then(resp => resp.json())
      .then((data) => dispatch({
        type: GET_BOOKS_SUCCESS,
        data,
      }));
  } 
}

export function chooseBook(bookId) {
  return (dispatch) => {
    dispatch({
      type: CHOOSE_BOOK,
      bookId,
    });
  }
}

export function clearFilter() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };
}
