import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthorList.scss'

class AuthorList extends Component {
    render() {
        return (
            <section className="AuthorList page-fade">
                <h3 className="author-list-title">The Hidden Figures</h3>
                <div className="author-list-parent">
                    {this.props.data.author.elements.map((d, i) => (
                        <Link to={"/author/"+i} key={i} className="nolink author-list-item">
                            {d["Portrait/Headshot Link"]?
                                <div className="author-list-image">
                                    <img className="author-list-img" alt={d.Author} src={d["Portrait/Headshot Link"]}></img>
                                </div>
                            :null}
                            <div className="author-list-content">
                                <div className="author-list-author">{d.Author}</div>
                                <div className="author-list-years">{d["Birth Year"]} - {d["Death Year"]}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        );
    };
}

export default AuthorList;
