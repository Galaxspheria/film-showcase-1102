import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tabletop from 'tabletop';
import './App.css';

import Home from './components/Home'
import About from './components/About'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    var that = this
    Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/14i0nvudUdYZkTer6euXjCnceQKkxGRq5dStdpHlPUn4/edit?usp=sharing',
      callback: function(data) { 
          console.log(data)
          that.setState({data})
      },
      simpleSheet: true } )
  }

  driveURLConvert(url) {
    return "https://docs.google.com/uc?id=" + url.substring(32, 65)
  }

  render() {
    return (
        <div className="App">
          <Router>
            {this.state.data?
              <div>
                <header className="App-header">
                  {this.state.data.map((d) => (
                        <p>
                          {d.Film}
                          {d.Image?
                            <img src={this.driveURLConvert(d.Image)}></img>
                          :null}
                        </p>
                  ))}
                </header>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
              </div>
            :<div className="loader"></div>}
          </Router>
        </div>
    );
  }
}

export default App;
