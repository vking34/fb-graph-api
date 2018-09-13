import fetch from 'cross-fetch';
const graph_url = 'https://graph.facebook.com/v3.1';

export const pushUserInfo = () => {
    console.log('push user info...');
    const token = localStorage.getItem('token');
    return(dispatch) => {
        fetch(`${graph_url}/me?fields=id,name,picture&access_token=${token}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((user) => {
                dispatch({
                    type: 'UPDATE_USER',
                    userInfo: user
                });
                dispatch({type: "LOGIN"});
            })
    }
};

export const changeLogState = () =>
{
    console.log('change Log State...');
    return(dispatch) => {
        dispatch({type: "LOGOUT"});
    }
};