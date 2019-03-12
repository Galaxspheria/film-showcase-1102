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
          <div>
            <div className="Movie page-fade">
              <div className="container-fluid" style={{padding: 0}}>
              <div className="row">
                <div className="col-sm">
                  <img className="rounded mx-auto d-block" style={{maxWidth: "100%", maxHeight: '100%'}} src={filmSheet[this.state.id][ "Image 1"]} alt=""></img>
                </div>
                <div className="col-md">
                  <div className="row">
                    <h3 className="text-light">{filmSheet[this.state.id]["Film"]}</h3>
                  </div>
                  <div className="row">
                    <h4 className="text-light">Released: {filmSheet[this.state.id]["Year"]}</h4>
                  </div>
                  <div className="row">
                    <h4 className="text-light">Director: {filmSheet[this.state.id]["Director"]}</h4>
                  </div>
                    <div className="row">
                    <h4 className="text-light">Starring: {filmSheet[this.state.id]["Starring"]}</h4>
                  </div>
                  <div className="row">
                    <h4 className="text-light">Original Work: {filmSheet[this.state.id]["Original Work"]}</h4>
                  </div>
                    <div className="row">
                    {filmSheet[this.state.id].AuthorID?
                    <Link to={ "/author/" + filmSheet[this.state.id].AuthorID}>
                    <button type="button" className="btn btn-info">Novelist Page</button>
                    </Link> :null} {filmSheet[this.state.id]["Watch Link"]?
                    <a target="_blank" rel="noopener noreferrer" href={filmSheet[this.state.id][ "Watch Link"]}>
                    <button type="button" className="btn btn-warning">Watch Now</button>
                    </a> :null}
                  </div>
                </div>
              </div>
            </div>
          </div>


          
            {filmSheet[this.state.id]["Description"]?
            <div className="container-fluid theme-test text-black text-block">
              <div className="row">
                <h3 className="text-center" style={{margin: "auto"}}>Movie Description</h3>
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
                <h3 className="text-center" style={{margin: "auto"}}>Movie Impact</h3>
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
                <h3 className="text-center" style={{margin: "auto"}}>Works Cited</h3>
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