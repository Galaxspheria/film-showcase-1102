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
              <img id = 'image-auth'src='../../public/image.jpg'>
                //replace src to {author.PortraitLink}
              </img>
            </div>
            <div className='author-detail'>
              <p id='name-author'>{author.Author}</p>
              <p className='author-subdata'>Dates Alive: {author.BirthYear} - {author.DeathYear}</p>
              <p className='author-subdata'>Important Works:
                {author.ImportantWork1Name},
                {author.ImportantWork2Name},
                {author.ImportantWork2Name}
              </p>
              <p className='author-subdata'>Adapted Works: {author.AdaptedWork1},
                {author.AdaptedWork2},
                {author.AdaptedWork3}</p>
            </div>
          </div>

          <div className='adapted-works'>
            <p className='direct-head' style='text-align: center'>Adapted Works</p>
            <div className='adapted'>
              <img src="../../public/image.jpg" alt="Picture">
              <p>Movie Name:</p>
              <p>Author's Role:</p>
            </div>
            <div className='adapted'>
              <img src="../../public/image.jpg" alt="Picture">
              <p>Movie Name:</p>
              <p>Author's Role:</p>
            </div>
            <div className='adapted'>
              <img src="../../public/image.jpg" alt="Picture">
              <p>Movie Name:</p>
              <p>Author's Role:</p>
            </div>
          </div>

          <div className='impact-sect'>
            <p className='direct-head' style='text-align: center'>Impact Description</p>
            <p>{author.Impact}</p>
          </div>

        );
    }
}

export default Author;
