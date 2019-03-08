
import React, { Component } from 'react';

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id
        }
    }

    render() {
        return (
            <div className="Movie page-fade">
            {/* Author {this.state.id} */}
            {/* <h1>Is this showing up?</h1> */}
            {/* <Button color="danger">Danger!</Button> */}
            {/* <button type="button" class="btn btn-primary">Primary</button> */}

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <image></image>
                    One of three columns
                  </div>
                  <div class="col-md">
                    Larger Col
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Movie;