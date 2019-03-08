import React, { Component } from 'react';
import '../styles/Decade.scss'

class AuthorList extends Component {
    render() {
        return (
            <section>
              <div className="container py-3">
                <div className="card">
                  <div className="row">
                    <div className="col-md-4">
                                <div className="demo-card-wrapper">
                                    {this.props.data.author.elements.map((d, i) => (
                                        <div key={i} className={"demo-card demo-card--step"+i}>
                                                {d.Image?
                                                    <img alt={d.Author} src={d["Portrait/Headshot Link"]}></img>
                                                :null}
                                        </div>

                                    ))}
                                </div>
                    </div>
                        <div className="col-md-8 px-3">
                            <div className="card-block px-3">
                                <h4 className="card-title" style={{paddingTop: "10px"}}>Author Name</h4>
                                <p className="card-text">
                                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                  </div>
                </div>
              </div>
            </section>
        );
    };
}

export default AuthorList;
