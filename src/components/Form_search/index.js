import React, {Component} from 'react';
import * as CONST from '../../utils';

export default class FormSearch extends Component {

  state = {
    'query': '',
  }

  handlerChange = ({target}) => {
    const {name, value} = target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {query} = this.state;
    const {searchBooks} = this.props;
    const url = `${CONST.BASE_URL}${encodeURIComponent(query)}`
    searchBooks(url);
  }

  handleClick = () => {
    this.props.clearFilter();
  }

  render() {
    const {query} = this.state;
    return (
      <form 
        onSubmit={this.handleSubmit}
      >
        <div className="align-items-center">
          <div className="col-auto">
            <label className="mr-3">
              Please enter search params: 
              <input 
                type="text" 
                onChange={this.handlerChange} 
                name='query'
                placeholder={'Enter search params'}
                className="form-control"
              />
            </label>
            <button 
              type="submit" 
              className="btn btn-success mr-3"
              onClick={this.handleSubmit}
              disabled={!query}
            >
              Search
            </button>
            <button
              type="button"
              className="btn btn-warning" 
              onClick={this.handleClick}
            >
              Clear selected book
            </button>
          </div>
        </div>
      </form>
    );
  }
}
