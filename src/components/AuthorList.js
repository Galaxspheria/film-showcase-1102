import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Decade.scss'

class AuthorList extends Component {
    render() {
        return (
            <section>
                {this.props.data.author.elements.map((d, i) => (
                    <Link to={"/author/"+i} key={i} className="nolink container py-3">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="demo-card-wrapper">
                                        <div className={"demo-card demo-card--step"+i}>
                                            {d["Portrait/Headshot Link"]?
                                                <img alt={d.Author} src={d["Portrait/Headshot Link"]}></img>
                                            :null}
                                        </div>
                                    </div>
                                </div>
                                    <div className="col-md-8 px-3">
                                        <div className="card-block px-3">
                                            <h4 className="card-title" style={{paddingTop: "10px"}}>{d.Author}</h4>
                                            <p className="card-text">
                                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
        );
    };
}

export default AuthorList;
