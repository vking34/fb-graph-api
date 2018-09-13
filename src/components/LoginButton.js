import React, {Component} from 'react';
import {connect} from 'react-redux';
import {pushUserInfo,changeLogState} from "../actions/logging";

class LoginButton extends Component {
    login = () => {
        console.log('logging...');
        window.FB.login(data => {
            console.log("data: ", data);
            localStorage.setItem('token', data.authResponse.accessToken);
            this.props.pushUserInfo();
        }, { scope: 'user_birthday, user_hometown, user_location, user_likes, user_photos, user_videos, user_friends, user_status, user_tagged_places, user_posts, user_gender, user_link, user_age_range, email, manage_pages, pages_show_list, publish_pages, read_page_mailboxes, pages_messaging, public_profile, basic_info', return_scopes: true })
    };

    render(){
        return(
            <div className="col-xs-12" style={{marginLeft: "8px"}}>
                <a className="btn btn-social btn-facebook" onClick={this.login} style={{"backgroundColor": "#3b5998", color: "white"}}>
                    <i className="fa fa-facebook" style={{'paddingRight': '10px', 'borderRight': '1px solid rgba(0,0,0,.2)'}}></i>
                    <span> Login</span>
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
    })(LoginButton);