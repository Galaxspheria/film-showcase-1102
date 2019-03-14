import React, { Component } from 'react';
import '../styles/About.scss'

class About extends Component {
  render() {
    return (
      <div className="About page-fade">
        <div className="intro-blurb">
          <h1 className="page-title">Additional Information</h1>
          <br/>
          <h3>Design Decisions</h3>
          <br/>
          {this.props.data.about.elements[0]["Design Blurb"].split("\n").map((p, i) =>
            <p key={i}>{p}</p>
          )}
          <br/>
          <h3>Credits</h3>
          <br/>
          <div className="credits-container">
            <div className="credit-parent">
              <h5 className="credit-header">DEVELOPMENT</h5>
              {this.props.data.about.elements.map((a, i) => (
                a['Development']? <p key={i}>{a['Development']}</p> :null
              ))}
            </div>
            <div className="credit-parent">
              <h5 className="credit-header">DESIGN</h5>
              {this.props.data.about.elements.map((a, i) => (
                a['Design']? <p key={i}>{a['Design']}</p> :null
              ))}
            </div>
            <div className="credit-parent">
              <h5 className="credit-header">CONTENT</h5>
              {this.props.data.about.elements.map((a, i) => (
                a['Content'] && i <= this.props.data.about.elements.length / 2? <p key={i}>{a['Content']}</p> :null
              ))}
            </div>
            <div className="credit-parent">
              <h5 className="credit-header">&nbsp;</h5>
              {this.props.data.about.elements.map((a, i) => (
                a['Content'] && i > this.props.data.about.elements.length / 2? <p key={i}>{a['Content']}</p> :null
              ))}
            </div>
          </div>
          <div className="hero-img" style={{backgroundImage: "url(" + this.props.data.home.elements[0]["Hero Image"] + ")"}}></div>
        </div>
      </div>
    );
  }
}

export default About;
