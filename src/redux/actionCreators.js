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
  //console.log(id)
  return dispatch => {
    fetch(API + "/animes/" + id)
    .then(res => res.json())
    .then(anime => dispatch({
      type: "SET_SELECTED_ANIME",
      payload: anime
    })
  )}
}

export const setUsers = () => {
  return dispatch => {
    fetch(API + "/users")
    .then(res => res.json())
    .then(users => dispatch({
      type: "SET_USERS",
      payload: users
    })
  )}
}

// export const setSelectedUser = (id) => {
//   console.log(id)
//   return dispatch => {
//     fetch(API + "/users/" + id)
//     .then(res => res.json())
//     .then(anime => dispatch({
//       type: "SET_SELECTED_USER",
//       payload: users
//     })
//   )}
// }


export const unsetAnime = () => ({type: "UNSET_ANIME"})

export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})

export const handleLoginFormChange = (e) => ({
  type: "LOGIN_FORM_CHANGE",
  payload: {name: e.target.name, value: e.target.value}
})

export const onlyUnique = (value, index, self) => {
  //debugger
  return self.indexOf(value) === index;
}

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

export const autoLogin = () => {
  return dispatch => {
    // localhost:3000/users
    fetch(API + "/autologin", {
      method: 'POST', // or 'PUT'
      headers: {
        'Authorization': localStorage.token,
      },
    })
    .then(response => response.json())
    .then(response => {
      //console.log("Auto Hello")
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

export const reviewFormChange = (e) => ({
  type: "REVIEW_FORM_CHANGE",
  payload: {name: e.target.name, value: e.target.value}
})

export const submitReview = (reviewData) => {
  return dispatch => {
    fetch(API + "/reviews", {
      method: 'POST', // or 'PUT'
      headers: {
        'Authorization': localStorage.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData)
    })
    .then(res=> res.json())
    .then(review => dispatch({
      type: "SET_REVIEW",
      payload: review
    }))
  }
}

export const handleSearchFormChange = (e) => {
  const target = e.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  return ({
    type: "FILTERS_FORM_CHANGE",
    payload: {name: e.target.name, value: value}
  })
}

