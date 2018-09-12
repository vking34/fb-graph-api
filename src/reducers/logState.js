var logState = (state = 'Not logged', action) => {
  switch (action.type) {
      case 'LOGIN':
          return 'Logged';
      default:
          return state;
  }
};

module.exports = logState;