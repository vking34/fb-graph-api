import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginButton from './LoginButton';
import UserFrame from "./UserFrame";

class TopBar extends Component{

    render(){
        return(
            <div>
                {
                    this.props.log_state ? <UserFrame/> : <LoginButton/>
                }
            </div>
        );
    }
}

export default connect(function (state) {
    return {
        user: state.user,
        log_state: state.log_state
    }
})(TopBar);