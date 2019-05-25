import firebase from '../firebase';
// import history from '../history';

export const fetchUser = () => async (dispatch, getState) => {
  await firebase.auth().onAuthStateChanged(user => {
    dispatch({
      type: 'FETCH_USER',
      payload: user
    })
    console.log(user);
  });
}