const initialState = {
  isOpen: true,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_WEB_SIDE':
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}