const initialState = {
  isOpen: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_MODAL':
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}