import React, { Component } from 'react';

class Author extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id
        }
    }

    render() {
        return (
            <div className="Author page-fade">
            Author {this.state.id}
            </div>
        );
    }
}

export default Author;
