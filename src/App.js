import React, { Component } from 'react';
import { connect } from 'react-redux';
import BooksContainer from './containers/BooksContainer';
import FormSearchConatiner from './containers/FormContainer';
import './App.css';

class App extends Component {

  render() {
    const {isLoading} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Book Search</h1>
        </header>
        {
          isLoading ? 
            <div>isLoading</div>:
            <div>
              <FormSearchConatiner />
              <BooksContainer />
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    isLoading: state.books.isLoading,
});

export default connect(mapStateToProps)(App);
