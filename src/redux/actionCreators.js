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

export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})

export const handleLoginFormChange = (e) => ({
  type: "LOGIN_FORM_CHANGE",
  payload: {name: e.target.name, value: e.target.value}
})

export const sendSignup = (userData) => {
  return dispatch => {
    // localhost:3000/users
    fetch(API + "/users", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(response => {
      localStorage.token = response.token
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
  })
  }
}

export const sendLogin = (userData) => {
  return dispatch => {
    // localhost:3000/users
    fetch(API + "/login", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(response => {
      localStorage.token = response.token
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
  })
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.clear("token")
    dispatch({type: "LOGOUT"})
  }
}
