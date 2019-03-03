import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {this.props.data.map((d, i) => (
            <p key={i}>
                {d.Film}
                {d.Image?
                    <img alt={d.Film} src={d.Image}></img>
                :null}
            </p>
        ))}
      </div>
    );
  }
}

export default Home;
