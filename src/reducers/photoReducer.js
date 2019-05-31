const initialState = {
  photos: [],
  term: '',
  isPhotos: null,
  page: 1,
  loading: true
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_LATEST_PHOTOS':
      return {
        ...state,
        photos: action.payload,
        isPhotos: true,
        loading: false,
      };
    case 'CLICK_HOME':
      return {
        ...state,
        term: action.payload.term
      };
    case 'LOADING_TRUE':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_PHOTOS':
      return {
        ...state,
        photos: state.photos.concat(action.payload.photos),
        page: action.payload.page,
        loading: false
      };
      
    case 'SEARCH_PHOTOS':
      return {
        ...state,
        photos: action.payload.photos,
        term: action.payload.term,
        isPhotos: true
      };

    case 'SEARCH_PHOTOS_FALSE':
      return {
        ...state,
        isPhotos: false
      };
    default:
      return state;
  }
}