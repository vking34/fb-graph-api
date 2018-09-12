import React, { Component } from 'react';
import '../css/App.css';
import {connect} from 'react-redux';
import TopBar from "./TopBar";

class App extends Component {

  logout = () => {

    window.FB.logout( function(response) {
      console.log("response");
    }) 
  };

  componentDidMount() {

    if(window.FB) {
      console.log("load ok: ");
    } else {
      console.log("haven't loaded yet");
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">
              <TopBar/>
          </div>
        </nav>
          <h2>{this.props.log_state}</h2>
      </div>
    );
  }
}

export default connect(function (state) {
    return {
        user: state.user,
        log_state: state.log_state
    }
})(App);
