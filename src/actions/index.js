import firebase from '../firebase';

export const fetchUser = () => async (dispatch, getState) => {
  await firebase.auth().onAuthStateChanged(user => {
    dispatch({
      type: 'FETCH_USER',
      payload: user
    })
  });
}

export const changeWebSide = () => {
  return {
    type: 'CHANGE_WEB_SIDE'
  };
}

export const changeMobileSide = () => {
  return {
    type: 'CHANGE_MOBILE_SIDE'
  };
}

export const mobileSideFalse = () => {
  return {
    type: 'MOBILE_SIDE_FALSE'
  };
}

export const changeModal = () => {
  return {
    type: 'CHANGE_MODAL'
  }
}