import React, { Component } from 'react';
import '../css/App.css';
import {connect} from 'react-redux';
import {pushUserInfo, changeLogState} from "../actions/logging";

class App extends Component {

  login = () => {
    window.FB.login(data => {
      console.log("data: ", data);

      this.props.pushUserInfo(data);
      this.props.changeLogState();

    }, { scope: 'email, manage_pages, pages_show_list, publish_pages, read_page_mailboxes, pages_messaging, public_profile', return_scopes: true })
  };

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

            <div className="col-xs-12" style={{marginLeft: "30px"}}>
              <a className="btn btn-social btn-facebook" onClick={this.login} style={{"backgroundColor": "#3b5998", color: "white"}}>
                <i className="fa fa-facebook" style={{'paddingRight': '10px', 'borderRight': '1px solid rgba(0,0,0,.2)'}}></i>
                <span>VKing34</span>
              </a>
            </div>
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
},
    {
        pushUserInfo,
        changeLogState
    })(App);
