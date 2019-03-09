import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
              <div className="container-fluid bg-light">
                <div className="row">
                  <div className="col-sm">
                    <img className="rounded mx-auto d-block" src={filmSheet[this.state.id]["Image 1"]} alt=""></img>
                  </div>
                  <div className="col-md">
                    <div className = "row">
                      <h3>{filmSheet[this.state.id]["Film"]}</h3>
                    </div>
                    <div className = "row">
                      <h4>Released: {filmSheet[this.state.id]["Year"]}</h4>
                    </div>
                    <div className = "row">
                      <h4>Director: {filmSheet[this.state.id]["Director"]}</h4>
                    </div>
                    <div className = "row">
                      <h4>Starring: {filmSheet[this.state.id]["Starring"]}</h4>
                    </div>
                    <div className = "row">
                      <h4>Original Work: {filmSheet[this.state.id]["Original Work"]}</h4>
                    </div>
                    <div className = "row">
                      {filmSheet[this.state.id].AuthorID? <Link to={"/author/" + filmSheet[this.state.id].AuthorID}><button type="button" className="btn btn-info">Novelist Page</button></Link> :null}
                      {filmSheet[this.state.id]["Watch Link"]? <a target="_blank" rel="noopener noreferrer" href={filmSheet[this.state.id]["Watch Link"]}><button type="button" className="btn btn-warning">Watch Now</button></a> :null}
                    </div>
                  </div>
                </div>
              </div>

              {filmSheet[this.state.id]["Description"]?
                <div className="container-fluid bg-light">
                  <div className="row">
                    <h3 className="text-center">Movie Description</h3>
                  </div>
                  <div className="row">
                    {filmSheet[this.state.id]["Description"].split("\n").map((p, i) =>
                        <p key={i}>{p}</p>
                    )}
                  </div>
                </div>
              :null}

              {filmSheet[this.state.id]["Impact"]? 
                <div className="container-fluid bg-light">
                  <div className="row">
                    <h3 className="text-center">Movie Impact</h3>
                  </div>
                  <div className="row">
                    {filmSheet[this.state.id]["Impact"].split("\n").map((p, i) =>
                      <p key={i}>{p}</p>
                    )}
                  </div>
                </div>
              :null}

              {filmSheet[this.state.id]["Works Cited"]? 
                <div className="container-fluid bg-light">
                  <div className="row">
                    <h3 className="text-center">Works Cited</h3>
                  </div>
                  <div className="row">
                    {filmSheet[this.state.id]["Works Cited"].split("\n").map((p, i) =>
                      <p key={i}>{p}</p>
                    )}
                  </div>
                </div>
              :null}
            </div>
        );
    }
}

export default Movie;