const initialState = {
  web: true,
  mobile: false,
  modal: false,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_WEB':
      return { 
        ...state, 
        web: !state.web 
      };

    case 'CHANGE_MOBILE':
      return { 
        ...state, 
        mobile: !state.mobile
      };
    case 'CHANGE_MOBILE_FALSE':
      return { 
        ...state, 
        mobile: false 
      };

    case 'CHANGE_MODAL':
      return { 
        ...state, 
        modal: !state.modal 
      };

    case 'CHANGE_MODAL_AND_WEB':
      return {
        ...state,
        web: !state.web,
        modal: !state.modal
      }

    default:
      return state;
  }
}