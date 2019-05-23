const initialState = {
  user: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return { ...state, user: true };
    case 'LOG_OUT':
      return { ...state, user: false };
    default:
      return state;
  }
}