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
      if (low <= parseInt(this.props.data.film.elements[film].Year, 10) && parseInt(this.props.data.film.elements[film].Year, 10) <= high) {
        films.push({...this.props.data.film.elements[film], id: film})
      }
    }
    this.setState({films})
  }

  changePage(newID) {
    this.setState({id: newID})
    this.props.history.push('/decade/'+newID)
  }

  render() {
    const decade = this.props.data.decade.elements[this.state.id]
    var last = null
    var next = null
    if (parseInt(this.state.id,10) - 1 >= 0) {
      last = this.props.data.decade.elements[this.state.id - 1]
    }
    if (parseInt(this.state.id,10) + 1 < this.props.data.decade.elements.length) {
      next = this.props.data.decade.elements[parseInt(this.state.id,10) + 1]
    }

    return (
      <div className="Decade page-fade">
        <div className="intro-blurb decade-blurb">
          <Link className="back-button" to="/"><i className="fas fa-arrow-left"></i></Link>
          <h1>{decade.Name}</h1>
          <h2 style={{textTransform: "uppercase"}}>{decade.Era}</h2>
          <div className="hero-img" style={{backgroundImage: "url(" + decade.Image + ")"}}></div>
        </div>
        <div className="decade-content">
          <div className="intro-blurb decade-green-content">
            <h3>Era Summary</h3>
            {decade.Summary.split("\n").map((p, i) =>
              <p key={i}>{p}</p>
            )}
            <div className="timeline-card even">
              <div className="timeline-text">
              </div>
              <div className="timeline-line-l"/>
              <div className="timeline-line"/>
              <div className="timeline-line-r"/>
              <div className="timeline-image">
              </div>
            </div>
          </div>
          <div className="timeline-wrapper">
            {this.state.films?
              this.state.films.map((f, i) => (
                <Link to={"/movie/"+f.id} className={"timeline-card " + ((i % 2 === 0)? "even" : "odd")} key={i}>
                  <div className="timeline-text">
                    <h4 className="timeline-name">{f.Film}</h4>
                    <h3 className="timeline-year">{f.Year}</h3>
                  </div>
                  <div className="timeline-line-l"/>
                  <div className="timeline-line">
                    <div className="timeline-node"></div>
                  </div>
                  <div className="timeline-line-r"/>
                  <div className="timeline-image">
                    <img src={f["Image 1"]? f["Image 1"] : "https://via.placeholder.com/300"}/>
                  </div>
                </Link>
              ))
            :null}
          </div>
          {decade["Works Cited"]?
            <div className = "intro-blurb" style={{display: 'block'}}>
              <h4 style={{margin: 'auto', textAlign: 'center', marginBottom: '8px'}}>Works Cited</h4>
              {decade['Works Cited'].split("\n").map((p, i) =>
                <p key={i}>{p}</p>
              )}
            </div>
          :null}
          <div className="decade-next-last-parent">
            {console.log("/decade/"+(this.state.id - 1))}
            {last?
            <button onClick={() => this.changePage(this.state.id - 1)} className="decade-last" style={{backgroundImage: "url(" + last.Image + ")"}}>
              <h2>{last.Name}</h2>
              <h3><i className="fas fa-arrow-left"></i> PREV</h3>
            </button>
            :null}
            {next?
            <button onClick={() => this.changePage(parseInt(this.state.id,10) + 1)} className="decade-next" style={{backgroundImage: "url(" + next.Image + ")"}}>              <h2>{next.Name}</h2>
              <h3>NEXT <i className="fas fa-arrow-right"></i></h3>
            </button>
            :null}
          </div>
        </div>
      </div>
    );
  }
}

export default Decade;
