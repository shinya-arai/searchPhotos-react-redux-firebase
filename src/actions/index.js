import firebase from '../firebase';

export const fetchUser = () => async (dispatch, getState) => {
  await firebase.auth().onAuthStateChanged(user => {
    dispatch({
      type: 'FETCH_USER',
      payload: user
    })
  });
}

export const changeWeb = () => {
  return {
    type: 'CHANGE_WEB'
  };
}

export const changeMobile = () => {
  return {
    type: 'CHANGE_MOBILE'
  };
}

export const changeMobileFalse = () => {
  return {
    type: 'CHANGE_MOBILE_FALSE'
  };
}

export const changeModal = () => {
  return {
    type: 'CHANGE_MODAL'
  }
}

export const changeModalAndWeb = () => {
  return {
    type: 'CHANGE_MODAL_AND_WEB'
  }
}