import firebase from '../apis/firebase';
import unsplash from '../apis/unsplash';

export const fetchUser = () => async dispatch => {
  await firebase.auth().onAuthStateChanged(user => {
    dispatch({
      type: 'FETCH_USER',
      payload: user
    })
  });
};

export const fetchLatestPhotos = () => async (dispatch, getState) => {
  const { term } = getState().photo;

  const response = await unsplash.get('/photos', {
    params: {
      order_by: 'latest',
      per_page: 15,
    }
  });

  if(term) {
    dispatch({
      type: 'CLICK_HOME',
      payload: {
        term: 'Latest Photos'
      }
    });
  }
 
  dispatch({
    type: 'FETCH_LATEST_PHOTOS',
    payload: response.data
  });
};

export const loadingTrue = () => {
  return {
    type: 'LOADING_TRUE',
  };
};

export const addPhotos = () => async (dispatch, getState) => {
  const { page, term } = getState().photo;

  if(!term || term === 'Latest Photos') {
    const response = await unsplash.get('/photos', {
      params: {
        order_by: 'latest',
        page: page + 1,
        per_page: 15,
      }
    });
  
    dispatch({
      type: 'ADD_PHOTOS',
      payload: {
        photos: response.data,
        page: page + 1
      }
    });
  }

  else if(term) {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
        page: page + 1,
        per_page: 15
      }
    });

    dispatch({
      type: 'ADD_PHOTOS',
      payload: {
        photos: response.data.results,
        page: page + 1
      }
    });
  }
};

export const searchPhotos = term => async dispatch => {
  const response = await unsplash.get('/search/photos', {
    params: {
      query: term,
      per_page: 15,
    }
  });

  if(!response.data.total) {
    dispatch({
      type: 'SEARCH_PHOTOS_FALSE',
    });
  } else {
    dispatch({
      type: 'SEARCH_PHOTOS',
      payload: {
        photos: response.data.results,
        term: term,
      }
    });
  }
};

export const changeWeb = () => {
  return {
    type: 'CHANGE_WEB'
  };
};

export const changeMobile = () => {
  return {
    type: 'CHANGE_MOBILE'
  };
};

export const changeMobileFalse = () => {
  return {
    type: 'CHANGE_MOBILE_FALSE'
  };
};

export const changeModal = () => {
  return {
    type: 'CHANGE_MODAL'
  };
};

export const changeModalAndWeb = () => {
  return {
    type: 'CHANGE_MODAL_AND_WEB'
  };
};