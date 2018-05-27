import React, {PureComponent} from 'react';

class Book extends PureComponent {
  
  render () {
    const {book, onClick, isBookSelected} = this.props;
    const {volumeInfo, id} = book;
    const {
        title, 
        authors, 
        publishedDate, 
        imageLinks,
        subtitle,
      } = volumeInfo;
    const thumbnail = imageLinks ? imageLinks.thumbnail: '';
    return (
      <div 
        className="card mb-3 col-md-4" 
        style={{width: '10rem'}}
        onClick={() => onClick(id)}
      >
        {
          isBookSelected ? 
            <img className="card-img-top" src={thumbnail ? thumbnail : ''} alt="Card cap" />: 
            null
        }
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {isBookSelected ? <h6>{subtitle}</h6>: null}
          <p className="card-text">
            {authors ? authors.map(author => <span key={author}>{author}</span>): []}
          </p>
          <p>
            {publishedDate}
          </p>
        </div>
      </div>
    );
  }
}

export default Book;
