import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Decade.scss'

class Decade extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id
    }
  }

  componentDidMount() {
    var low = parseInt(this.props.data.decade.elements[this.state.id]["Start Year"], 10)
    var high = parseInt(this.props.data.decade.elements[this.state.id]["Stop Year"], 10)
    var films = []
    for (var film in this.props.data.film.elements) {
      if (low < parseInt(this.props.data.film.elements[film].Year, 10) && parseInt(this.props.data.film.elements[film].Year, 10) < high) {
        films.push({...this.props.data.film.elements[film], id: film})
      }
    }
    this.setState({films})
  }

  render() {
    const decade = this.props.data.decade.elements[this.state.id]
    return (
      <div className="Decade page-fade">
        <div className="intro-blurb decade-blurb">
          <Link className="back-button" to="/"><i className="fas fa-arrow-left"></i></Link>
          <h1>{decade.Name}</h1>
          <h3 style={{textTransform: "uppercase"}}>{decade.Era}</h3>
          <div className="hero-img" style={{backgroundImage: "url(" + decade.Image + ")"}}></div>
        </div>
        <div className = "intro-blurb">
          <h2>Era Summary</h2>
          {decade.Summary.split("\n").map((p, i) =>
            <p key={i}>{p}</p>
          )}
        </div>
        <div className="timeline-wrapper">
          {this.state.films?
            this.state.films.map((f, i) => (
              <Link to={"/movie/"+f.id} className={"timeline-card " + ((i % 2 === 0)? "even" : "odd")} key={i}>
                <div className="timeline-text">
                  <h4>{f.Film}</h4>
                  <h5>{f.Year}</h5>
                </div>
                <div className="timeline-line">
                  <div className="timeline-node"></div>
                </div>
                <div className="timeline-image">
                  <img src={f["Image 1"]? f["Image 1"] : "https://via.placeholder.com/300"}/>
                </div>
              </Link>
            ))
          :null}
        </div>
        {/* <section id="timeline">
            <div className="demo-card-wrapper">
                {this.props.data.film.elements.map((d, i) => (
                    <div key={i} className={"demo-card demo-card--step"+i}>
                        <div className="head">
                            <div className="number-box">
                                <span>{d.Date}</span>
                            </div>
                            <h2><span className="small">{d.Author}</span>{d.Film}</h2>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                            {d.Image?
                                <img alt={d.Film} src={d.Image}></img>
                            :null}
                        </div>
                    </div>
                ))}
            </div>
        </section> */}
      </div>
    );
  }
}

export default Decade;
