const initialState = {
  photos: [],
  term: '',
  isPhotos: null,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_LATEST_PHOTOS':
      return {
        ...state,
        photos: action.payload,
        isPhotos: true,
      };
    case 'CLICK_HOME':
      return {
        ...state,
        term: action.payload.term
      }
      
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