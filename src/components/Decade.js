import React, { Component } from 'react';
import '../styles/Decade.scss'

class Decade extends Component {
  render() {
    return (
      <div className="Decade page-fade">
        <section id="timeline">
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
        </section>
      </div>
    );
  }
}

export default Decade;
