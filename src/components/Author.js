import React, { Component } from 'react';
import '../styles/Author.css'

class Author extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id
        }
    }

    render() {
      const author = this.props.data.author.elements[this.state.id]
        return (
          <div className="page-fade" style={{background: 'white'}}>
            <div className='author-data'>
            <div className='author-image'>
                <img className="author" id = 'image-auth'src={author['Portrait/Headshot Link']}/>
            </div>
            <div className='author-detail'>
                <p id='name-author'>
                {author['Author']}
                </p>
                <p className='author-subdata'>
                Dates Alive: {author['Birth Year']} - {author['Death Year']}
                </p>
                <p className='author-subdata'>Important Works:&nbsp;
                {author['Important Work 1 Name']},&nbsp;
                {author['Important Work 2 Name']},&nbsp;
                {author['Important Work 3 Name']}
                </p>
                <p className='author-subdata'>Adapted Works:&nbsp;
                {author['Adapted Work 1 Name']},&nbsp;
                {author['Adapted Work 2 Name']},&nbsp;
                {author['Adapted Work 3 Name']}
                </p>
            </div>
            </div>
                {/* TODO: link adapted works to their film pages, if they exist */}
                <div className='adapted-works'>
                <p className='direct-head' style={{textAlign: 'center'}}>Adapted Works</p>
                <div className='adapted'>
                    <img className="author" src={author['Adapted Work 1 Image']} alt="Picture"></img>
                    <p>Movie Name: {author['Adapted Work 1 Name']}</p>
                    <p>Author's Role: {author['Role in Adapted Work 1']}</p>
                </div>
                {author['Adapted Work 2 Name']?
                    <div className='adapted'>
                        <img className="author" src={author['Adapted Work 2 Image']} alt="Picture"></img>
                        <p>Movie Name: {author['Adapted Work 2 Name']}</p>
                        <p>Author's Role: {author['Role in Adapted Work 2']}</p>
                    </div>
                :null}
                {author['Adapted Work 3 Name']?
                    <div className='adapted'>
                        <img className="author" src={author['Adapted Work 3 Image']} alt="Picture"></img>
                        <p>Movie Name: {author['Adapted Work 3 Name']}</p>
                        <p>Author's Role: {author['Role in Adapted Work 3']}</p>
                    </div>
                :null}
            </div>

            {author["Impact"]?
                <div className='impact-sect'>
                    <p className='direct-head' style={{textAlign: 'center'}}>Impact Description</p>
                    {author["Impact"].split("\n").map((p, i) =>
                        <p key={i}>{p}</p>
                    )}
                </div>
            :null}

            {author["Works Cited"]?
                <div className='impact-sect'>
                    <p className='direct-head' style={{textAlign: 'center'}}>Works Cited</p>
                    {author["Works Cited"].split("\n").map((p, i) =>
                        <p key={i}>{p}</p>
                    )}
                </div>
            :null}
          </div>
        );
    }
}

export default Author;
