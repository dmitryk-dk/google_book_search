import FormSearch from '../components/Form_search';
import {connect} from 'react-redux';
import {getBooks, clearFilter} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  searchBooks: (url) => dispatch(getBooks(url)),
  clearFilter: () => dispatch(clearFilter()),
});

export default connect(null, mapDispatchToProps)(FormSearch);
