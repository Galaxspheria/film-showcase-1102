import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Movie.scss'

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id
        }
    }

    render() {
        const filmSheet = this.props.data.film.elements
        return (
          <div className="Movie page-fade">
            <div>
              <div className="container-fluid" style={{padding: 0}}>
              <div className="row header-parent">
                <button className="back-button" onClick={() => this.props.history.goBack()}><i className="fas fa-arrow-left"></i></button>
                <div className="col-sm movie-main-img-parent">
                  <img className="rounded mx-auto d-block movie-main-img" src={filmSheet[this.state.id][ "Image 1"]} alt=""></img>
                </div>
                <div className="col-md movie-header-details">
                  <div className="row">
                    <h2 className="movie-header-title">{filmSheet[this.state.id]["Film"]}</h2>
                  </div>
                  <div className="row">
                    <h4 className="text-light">Release Date: {filmSheet[this.state.id]["Year"]}</h4>
                  </div>
                  <div className="row">
                    <h4 className="text-light">Director: {filmSheet[this.state.id]["Director"]}</h4>
                  </div>
                    <div className="row">
                    <h4 className="text-light">Starring: {filmSheet[this.state.id]["Starring"]}</h4>
                  </div>
                  <div className="row">
                    <h4 className="text-light">Original Story: {filmSheet[this.state.id]["Original Work"]}</h4>
                  </div>
                    <div className="row">
                    {filmSheet[this.state.id].AuthorID?
                    <Link to={ "/author/" + filmSheet[this.state.id].AuthorID}>
                    <button type="button" className="btn film-primary-button">Novelist Page</button>
                    </Link> :null} {filmSheet[this.state.id]["Watch Link"]?
                    <a target="_blank" rel="noopener noreferrer" href={filmSheet[this.state.id][ "Watch Link"]}>
                    <button type="button" className="btn film-secondary-button">Watch Now</button>
                    </a> :null}
                  </div>
                </div>
              </div>
            </div>
          </div>


          
            {filmSheet[this.state.id]["Description"]?
            <div className="container-fluid theme-test text-black text-block">
              <div className="row">
                <h3 className="text-center">Movie Description</h3>
              </div>
              <div className="row">
                {filmSheet[this.state.id]["Description"].split("\n").map((p, i) =>
                <p key={i}>{p}</p>
                )}
              </div>
            </div> :null} 
          
            
            {filmSheet[this.state.id]["Impact"]?
            <div className="container-fluid theme-dark text-white text-block">
              <div className="row">
                <h3 className="text-center">Movie Impact</h3>
              </div>
              <div className="row">
                {filmSheet[this.state.id]["Impact"].split("\n").map((p, i) =>
                  <p key={i}>{p}</p>
                )}
              </div>
            </div> :null} 
            
            
            {filmSheet[this.state.id]["Works Cited"]?
            <div className="container-fluid theme-primary text-block text-white works-cited">
              <div className="row">
                <h3 className="text-center">Works Cited</h3>
              </div>
              <div className="row">
                {filmSheet[this.state.id]["Works Cited"].split("\n").map((p, i) =>
                  <p key={i}>{p}</p>
                )}
              </div>
            </div> :null}
        </div>
      );
    }
}

export default Movie;