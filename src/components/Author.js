import React, { Component } from 'react';
import '../styles/Author.css'

className Author extends Component {
  const author;
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id
        }
        author = this.props.data.author.elements;

    }

    render() {
        return (
          <div className='author-data'>
            <div className='author-image'>
              <img id = 'image-auth'src={author['Portrait/Headshot Link']}>
                //replace src to {author.PortraitLink}
              </img>
            </div>
            <div className='author-detail'>
              <p id='name-author'>{author['Author']}</p>
              <p className='author-subdata'>Dates Alive: {author['Birth Year']} - {author['Death Year']}</p>
              <p className='author-subdata'>Important Works:
                {author['Important Work 1 Name']},
              {author['Important Work 2 Name']},
                {author['Important Work 3 Name']}
              </p>
              <p className='author-subdata'>Adapted Works:
                {author['Adapted Work 1 Name']},
                {author['Adapted Work 2 Name']},
                {author['Adapted Work 3 Name']}</p>
            </div>
          </div>
          <div className='adapted-works'>
            <p className='direct-head' style='text-align: center'>Adapted Works</p>
            <div className='adapted'>
              <img src="author['Portrait/Headshot Link']" alt="Picture">
              <p>Movie Name: {author['Adapted Work 1 Name']}</p>
              <p>Author's Role: {author['Role in Adapted Work 1']}</p>
            </div>
            <div className='adapted'>
              <img src={author['Portrait/Headshot Link']} alt="Picture">
              <p>Movie Name: {author['Adapted Work 2 Name']}</p>
              <p>Author's Role: {author['Role in Adapted Work 2']}</p>
            </div>
            <div className='adapted'>
              <img src={author['Portrait/Headshot Link']} alt="Picture">
              <p>Movie Name: {author['Adapted Work 3 Name']}</p>
              <p>Author's Role: {author['Role in Adapted Work 3']}</p>
            </div>
          </div>

          <div className='impact-sect'>
            <p className='direct-head' style='text-align: center'>Impact Description</p>
            <p>{author['Impact']}</p>
          </div>

        );
    }
}

export default Author;
