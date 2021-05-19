import animesReducer from './animesReducer'
import userReducer from './userReducer'
import usersReducer from './usersReducer'

import { combineReducers } from 'redux'

// combineReducers allows us to combine multiple reducers, keeping their parts of state separate based on the keys we define
export const reducer = combineReducers({
  animes: animesReducer,
  user: userReducer,
  users: usersReducer
})