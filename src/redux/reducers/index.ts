import { combineReducers } from 'redux'

import DetailsReducer from './detailsReducer'

const reducers = combineReducers({
  details: DetailsReducer,
})

export type State = ReturnType<typeof reducers>

export default reducers
