import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';

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
        <header className="App-header">
          {this.state.data?
            this.state.data.map((d) => (
              <p>
                {d.Film}
                {d.Image?
                  <img src={this.driveURLConvert(d.Image)}></img>
                :null}
              </p>
            ))
          :<div className="loader"></div>}
        </header>
      </div>
    );
  }
}

export default App;
