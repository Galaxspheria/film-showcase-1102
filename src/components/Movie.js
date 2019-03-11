import React, { Component } from 'react';

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
                    {console.log("here")}
                    {console.log(filmSheet)}
                    <img class="rounded mx-auto d-block" src={filmSheet[this.state.id]["Image 1"]} alt=""></img>
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
                      <button type="button" class="btn btn-info">Novelist Page</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-fluid bg-light">
                <div className="row">
                  <h3 className="text-center" style={{margin: "auto"}}>Movie Description</h3>
                </div>
                <div className="row">
                  <p>{filmSheet[this.state.id]["Description"]}</p>
                </div>
              </div>

              <div className="container-fluid bg-light">
                <div className="row">
                  <h3 className="text-center" style={{margin: "auto"}}>Movie Impact</h3>
                </div>
                <div className="row">
                  <p>{filmSheet[this.state.id]["Impact"]}</p>
                </div>
              </div>
            </div>
        );
    }
}

export default Movie;