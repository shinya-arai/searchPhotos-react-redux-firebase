import firebase from '../firebase';

export const fetchUser = () => async (dispatch, getState) => {
  await firebase.auth().onAuthStateChanged(user => {
    dispatch({
      type: 'FETCH_USER',
      payload: user
    })
  });
}