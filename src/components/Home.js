import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Timeline.scss';
import '../styles/Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home page-fade">
        <div className="intro-blurb">
          <h2>{this.props.data.home.elements[0]["Site Name"]}</h2>
          {this.props.data.home.elements[0]["Intro Blurb"].split("\n").map((p, i) =>
            <p key={i}>{p}</p>
          )}
          <h1><i className="fas fa-angle-down"></i></h1>
          <div className="hero-img" style={{backgroundImage: "url(" + this.props.data.home.elements[0]["Hero Image"] + ")"}}></div>
        </div>
        <section id="decade-timeline">
            <Link className="tl-item" to="/decade/1">
                
                <div className="tl-bg" style={{backgroundImage: "url(https://static.tvtropes.org/pmwiki/pub/images/mpw_tess_pic.jpg)"}}></div>
                
                <div className="tl-year">
                <p className="f2 heading--sanSerif">1910s</p>
                </div>

                <div className="tl-content">
                <h1>Lorem ipsum dolor sit</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

            </Link>

            <Link className="tl-item" to="/decade/2">
                
                <div className="tl-bg" style={{backgroundImage: "url(https://scifist.files.wordpress.com/2014/09/1923_black_oxen_002.jpg)"}}></div>
                
                <div className="tl-year">
                <p className="f2 heading--sanSerif">1920s</p>
                </div>

                <div className="tl-content">
                <h1 className="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
                <p>Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu.</p>
                </div>

            </Link>

            <Link className="tl-item" to="/decade/3">
                
                <div className="tl-bg" style={{backgroundImage: "url(https://journeysinclassicfilm.files.wordpress.com/2018/05/lostlady.jpg?w=1000&h=806)"}}></div>
                
                <div className="tl-year">
                <p className="f2 heading--sanSerif">1930s</p>
                </div>

                <div className="tl-content">
                <h1 className="f3 text--accent ttu">Phasellus mauris elit</h1>
                <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor.</p>
                </div>

            </Link>

            <Link className="tl-item" to="/decade/4">
                
                <div className="tl-bg" style={{backgroundImage: "url(https://i.ytimg.com/vi/B2VxHYw6CYM/maxresdefault.jpg)"}}></div>
                
                <div className="tl-year">
                <p className="f2 heading--sanSerif">1940s</p>
                </div>

                <div className="tl-content">
                <h1 className="f3 text--accent ttu">Mauris vitae nunc elem</h1>
                <p>Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod. Donec vestibulum efficitur tortor, eget efficitur enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius metus, bibendum imperdiet.</p>
                </div>

            </Link>

            <Link className="tl-item" to="/decade/5">
                
                <div className="tl-bg" style={{backgroundImage: "url(https://m.media-amazon.com/images/M/MV5BMTY3NTE1NTAyNF5BMl5BanBnXkFtZTcwNzYzNTYyNw@@._V1_SY1000_CR0,0,1322,1000_AL_.jpg)"}}></div>
                
                <div className="tl-year">
                <p className="f2 heading--sanSerif"><span className="small">EARLY</span><br/>1950s</p>
                </div>

                <div className="tl-content">
                <h1 className="f3 text--accent ttu">Mauris vitae nunc elem</h1>
                <p>Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod. Donec vestibulum efficitur tortor, eget efficitur enim. Curabitur diam quam, blandit at risus nec, pulvinar porttitor lorem. Pellentesque dolor elit.</p>
                </div>

            </Link>

            <Link className="tl-item" to="/decade/6">
                
                <div className="tl-bg" style={{backgroundImage: "url(http://fourthreefilm.com/wp-content/uploads/2015/11/Gloria-NakedAlibi.jpg)"}}></div>
                
                <div className="tl-year">
                <p className="f2 heading--sanSerif"><span className="small">LATE</span><br/>1950s</p>
                </div>

                <div className="tl-content">
                <h1 className="f3 text--accent ttu">Mauris vitae nunc elem</h1>
                < p > Etiam id cursus arcu, in dapibus nibh.Pellentesque non porta leo.Nulla eros odio, egestas quis efficitur vel, pretium sed. Vivamus laoreet laoreet elit.Ut ut varius metus, bibendum imperdiet curabitur diam.</p>
                </div>

            </Link>
            </section>
      </div>
    );
  }
}

export default Home;
