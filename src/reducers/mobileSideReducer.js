const initialState = {
  isOpen: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_MOBILE_SIDE':
      return { ...state, isOpen: !state.isOpen };
    case 'MOBILE_SIDE_FALSE':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}
