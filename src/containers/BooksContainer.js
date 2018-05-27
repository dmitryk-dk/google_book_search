import Books from '../components/Books';
import {connect} from 'react-redux';
import {chooseBook} from '../actions';

const mapStateToProps = (state) => {
  const {books} = state.books;
  const {bookId} = state.book;
  return {
    books: bookId ? books.filter(book => book.id === bookId): books,
    bookId
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  chooseBook: (bookId) => dispatch(chooseBook(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
