const API = "http://localhost:3001"

// thunk allows us to return a function that takes in the argument of dispatch, instead of a plain object representing the action
export const setAnimes = () => {
  return dispatch => {
    fetch(API + "/animes")
    .then(res => res.json())
    .then(animes => dispatch({
      type: "SET_ANIMES",
      payload: animes
    })
  )}
}
export const setSelectedAnime = (id) => {
  console.log(id)
  return dispatch => {
    fetch(API + "/animes/" + id)
    .then(res => res.json())
    .then(anime => dispatch({
      type: "SET_SELECTED_ANIME",
      payload: anime
    })
  )}
}

export const unsetAnime = () => ({type: "UNSET_ANIME"})