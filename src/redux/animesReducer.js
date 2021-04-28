const nullAnime = {
  id: null,
  title: "",
  synopsis: "",
  date: "",
  episodes: "",
  poster: "",
  reviews:[]
}

const nullReviewForm = {
  content: "",
  rating: 0
}

const initialanimeState = {
  animes: [],
  selectedAnime: nullAnime,
  reviewForm: nullReviewForm
}

const animesReducer = (state=initialanimeState, action) => {
  switch (action.type){
    case "SET_ANIMES":
      return {...state, animes: action.payload}
    case "SET_SELECTED_ANIME":
      return {...state, selectedAnime: action.payload}
    case "UNSET_ANIME":
      return {...state, selectedAnime: nullAnime}
    case "REVIEW_FORM_CHANGE":
      return {...state, reviewForm: {
        ...state.reviewForm,
        [action.payload.name]: action.payload.value
      }}
    case "SET_REVIEW":
      return {
        ...state,
        selectedAnime: {
          ...state.selectedAnime,
          reviews: [...state.selectedAnime.reviews, action.payload]
        },
        reviewForm: nullReviewForm
      }
    default:
      return {...state}
  }
}

export default animesReducer