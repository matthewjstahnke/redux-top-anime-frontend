const nullAnime = {
  id: null,
  title: "",
  synopsis: "",
  date: "",
  episodes: "",
  poster: ""
}

const initialanimeState = {
  animes: [],
  selectedAnime: nullAnime
}

const animesReducer = (state=initialanimeState, action) => {
  switch (action.type){
    case "SET_ANIMES":
      return {...state, animes: action.payload}
    case "SET_SELECTED_ANIME":
      return {...state, selectedAnime: action.payload}
    case "UNSET_ANIME":
      return {...state, selectedAnime: nullAnime}
    default:
      return {...state}
  }
}

export default animesReducer