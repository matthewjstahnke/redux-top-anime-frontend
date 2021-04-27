const initialanimeState = {
  animes: []
}

const animesReducer = (state=initialanimeState, action) => {
  switch (action.type){
    case "SET_ANIMES":
      return {...state, animes: action.payload}
    default:
      return {...state}
  }
}

export default animesReducer