var userInfo = (state = {}, action) => {
  switch (action.type) {
      case 'UPDATE_USER':
          return {...state, ...action.userInfo};
      default:
          return state;
  }
};

module.exports = userInfo;