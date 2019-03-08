import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tabletop from 'tabletop';

import './styles/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Decade from './components/Decade';
import Author from './components/Author';
import Movie from './components/Movie';
import AuthorList from './components/AuthorList';

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
            if (data.film.elements[d]["Image 1"]) {
              data.film.elements[d]["Image 1"] = that.driveURLConvert(data.film.elements[d]["Image 1"])
            }
          }
          for (d in data.decade.elements) {
            if (data.decade.elements[d].Image) {
              data.decade.elements[d].Image = that.driveURLConvert(data.decade.elements[d].Image)
            }
          }
          for (d in data.author.elements) {
            console.log(data.author.elements[d])
            if (data.author.elements[d]['Portrait/Headshot Link']) {
              data.author.elements[d]['Portrait/Headshot Link'] = that.driveURLConvert(data.author.elements[d]['Portrait/Headshot Link'])
            }
          }
          data.home.elements[0]["Hero Image"] = that.driveURLConvert(data.home.elements[0]["Hero Image"])
          that.setState({data})
      },
      simpleSheet: false } )
  }

  driveURLConvert(url) {
    if(url && url.length > 65) {
    return "https://docs.google.com/uc?id=" + url.substring(32, 65)
    }
  }

  render() {
    return (
        <div className="App">
          <Router>
            {this.state.data?
              <div>
                <Header/>
                <Route path="/" exact render={(props) => <Home {...props} data={this.state.data} />} />
                <Route path="/about/" render={(props) => <About {...props} data={this.state.data} />} />
<<<<<<< HEAD
                <Route path="/authors/" render={(props) => <AuthorList {...props} data={this.state.data} />} />
                <Route path="/decade/" render={(props) => <Decade {...props} data={this.state.data} />} />
=======
                <Route path="/decade/:id" render={(props) => <Decade {...props} data={this.state.data} />} />
>>>>>>> 57604c54fb8309c75bf10418882708abd20c27d1
                <Route path="/author/:id" render={(props) => <Author {...props} data={this.state.data} />} />
                <Route path="/movie/:id" render={(props) => <Movie {...props} data={this.state.data} />} />
                <Footer/>
              </div>
            :<div className="loader-parent"><div className="loader"></div></div>}
          </Router>
        </div>
    );
  }
}

export default App;
