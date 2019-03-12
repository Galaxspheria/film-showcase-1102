import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Author.scss'

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
            <div className="Author page-fade">
                <div>
                    <div className="container-fluid" style={{padding: 0}}>
                        <div className="row header-parent">
                            <div className="col-sm movie-main-img-parent">
                            <img className="rounded mx-auto d-block movie-main-img" src={author['Portrait/Headshot Link']} alt=""></img>
                            </div>
                            <div className="col-md movie-header-details">
                            <div className="row">
                                <h2 className="movie-header-title">{author['Author']}</h2>
                            </div>
                            <div className="row">
                                <h2 className="movie-header-title text-light">{author['Birth Year']} - {author['Death Year']}</h2>
                            </div>
                            <div className="row">
                                <h4 className="text-light">Important Work:</h4>
                                <p className='author-subdata text-light'>
                                {author['Important Work 1 Name']}
                                {author['Important Work 2 Name']? ", "+author['Important Work 2 Name'] : null}
                                {author['Important Work 3 Name']? ", "+author['Important Work 3 Name'] : null}
                                </p>
                            </div>
                            <div className="row">
                                {author.MovieID?
                                <Link to={ "/movie/" + author.MovieID}>
                                <button type="button" className="btn film-primary-button">Film Page</button>
                                </Link> :null}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='theme-primary' style={{paddingTop: '2rem'}}>
                <p className='direct-head text-light' style={{textAlign: 'center'}}>Adapted Work</p>
                <div className='theme-primary adapted-work'>
                <div className="adapted-work-flex">
                    <div className='adapted'>
                        <img className="author" src={author['Adapted Work 1 Image']} alt="Picture"></img>
                        <h4 className="text-light">{author['Adapted Work 1 Name']}</h4>
                        <h5>as {author['Role in Adapted Work 1']}</h5>
                    </div>
                    {author['Adapted Work 2 Name']?
                        <div className='adapted'>
                            <img className="author" src={author['Adapted Work 2 Image']} alt="Picture"></img>
                            <h4 className="text-light">{author['Adapted Work 2 Name']}</h4>
                            <h5>as {author['Role in Adapted Work 2']}</h5>
                        </div>
                    :null}
                    {author['Adapted Work 3 Name']?
                        <div className='adapted'>
                            <img className="author" src={author['Adapted Work 3 Image']} alt="Picture"></img>
                            <h4 className="text-light">{author['Adapted Work 2 Name']}</h4>
                            <h5>as {author['Role in Adapted Work 2']}</h5>
                        </div>
                    :null}
                    </div>
                </div>
            </div>
                
                {author["Impact"]?
                <div className="container-fluid theme-dark text-white text-block">
                <div className="row">
                    <h3 className="text-center">Author Impact</h3>
                </div>
                <div className="row">
                    {author["Impact"].split("\n").map((p, i) =>
                    <p key={i}>{p}</p>
                    )}
                </div>
                </div> :null} 
                
                
                {author["Works Cited"]?
                <div className="container-fluid theme-primary text-block text-white works-cited">
                <div className="row">
                    <h3 className="text-center">Works Cited</h3>
                </div>
                <div className="row">
                    {author["Works Cited"].split("\n").map((p, i) =>
                    <p key={i}>{p}</p>
                    )}
                </div>
                </div> :null}
            </div>
        );
    }
}

export default Author;
