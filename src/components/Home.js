import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Timeline.scss';
import '../styles/Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home page-fade">
        <div className="intro-blurb">
          <h2>{this.props.data.home.elements[0]["Site Name"]}</h2>
          {this.props.data.home.elements[0]["Intro Blurb"].split("\n").map((p, i) =>
            <p key={i}>{p}</p>
          )}
          <h1><i className="fas fa-angle-down"></i></h1>
          <div className="hero-img" style={{backgroundImage: "url(" + this.props.data.home.elements[0]["Hero Image"] + ")"}}></div>
        </div>
        <section id="decade-timeline">
          {this.props.data.decade.elements.map((d, i) => (
            <Link key={i} className="tl-item" to={"/decade/"+i}>
                <div className="tl-bg" style={{backgroundImage: "url(" + d.Image + ")"}}></div>
                <div className="tl-year">
                <p className="f2 heading--sanSerif">{d.Name}</p>
                </div>
                <div className="tl-content">
                <h1>{d.Era}</h1>
                <p>{d.Summary.length < 250? d.Summary : d.Summary.substring(0, 250) + "..."}</p>
                </div>
            </Link>
          ))}
        </section>
      </div>
    );
  }
}

export default Home;
