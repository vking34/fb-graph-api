var logState = (state = false, action) => {
  switch (action.type) {
      case 'LOGIN':
          return true;
      default:
          return false;
  }
};

export default logState;