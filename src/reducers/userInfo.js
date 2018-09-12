var userInfo = (state = {}, action) => {
  switch (action.type) {
      case 'UPDATE_USER':
          return {...state, ...action.userInfo};
      case 'REMOVE_USER':
          return {};
      default:
          return {};
  }
};

module.exports = userInfo;