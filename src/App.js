import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tabletop from 'tabletop';

import './styles/App.css';

import Home from './components/Home';
import About from './components/About';
import Author from './components/Author';

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
          for (var d in data.film.elements) {
            if (data.film.elements[d].Image) {
              data.film.elements[d].Image = that.driveURLConvert(data.film.elements[d].Image);
            }
          }
          that.setState({data})
      },
      simpleSheet: false } )
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
                  Header
                </header>
                <Route path="/" exact render={(props) => <Home {...props} data={this.state.data} />} />
                <Route path="/about/" render={(props) => <About {...props} data={this.state.data} />} />
                <Route path="/author/:id" render={(props) => <Author {...props} data={this.state.data} />} />
              </div>
            :<div className="loader"></div>}
          </Router>
        </div>
    );
  }
}

export default App;
