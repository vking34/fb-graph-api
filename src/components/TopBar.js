import React, {Component} from 'react';

import {connect} from 'react-redux';
import {pushUserInfo, changeLogState} from "../actions/logging";

class TopBar extends Component{

    login = () => {
        console.log('logging...');
        window.FB.login(data => {
            console.log("data: ", data);

            this.props.pushUserInfo(data);
            this.props.changeLogState();

        }, { scope: 'email, manage_pages, pages_show_list, publish_pages, read_page_mailboxes, pages_messaging, public_profile', return_scopes: true })
    };

    logged(){
        console.log('logged...');
        this.props.changeLogState();
    }

    render(){
        return(
            <div className="col-xs-12" style={{marginLeft: "10px"}}>
                <a className="btn btn-social btn-facebook" onClick={this.login} style={{"backgroundColor": "#3b5998", color: "white"}}>
                    <i className="fa fa-facebook" style={{'paddingRight': '10px', 'borderRight': '1px solid rgba(0,0,0,.2)'}}></i>
                    <span>     Login</span>
                </a>
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
    })(TopBar);