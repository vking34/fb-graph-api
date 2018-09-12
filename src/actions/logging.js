
export const pushUserInfo = (user) => {
    console.log('push user info...');
    return(dispatch) => {
        dispatch({
            type: 'UPDATE_USER',
            userInfo: user
        });
    }
};

export const changeLogState = () =>
{
    console.log('change Log State...');
    return(dispatch) => {
        dispatch({type: "LOGIN"});
    }
};