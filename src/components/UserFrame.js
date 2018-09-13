import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeLogState} from '../actions/logging';

class UserFrame extends Component{

    logout = () => {
        console.log('logout...');
        localStorage.removeItem('token');
        this.props.changeLogState();
    };

    render()
    {
        return(
            <div>
                <div className="col-xs-4" style={{marginLeft: "4px"}}>
                    <a className="btn btn-social btn-facebook" style={{"backgroundColor": "#3b5998", color: "white"}}>
                        <img src={this.props.user.picture.data.url} alt="Avatar" className="avatar" style={{width: '30px', height: '30px'}} />
                        <span style={{'paddingLeft': '10px'}}>{this.props.user.name}</span>
                    </a>
                </div>
                <div className="col-xs-4" >
                    <button type="submit" onClick={this.logout}>Logout</button>
                </div>
            </div>
        );
    }
}

export default connect(function(state){
    return {
        user: state.user,
        log_state: state.log_state
    }
},
    {
        changeLogState
    })(UserFrame);