import Action from '../actions'
import ActionType from '../action-types'

import { IDetails } from 'src/interfaces/details.interface'

const INITIAL_STATE: IDetails = {
  id: '',
  fullname: '',
  email: '',
  status: '',
}

const DetailsReducer = (state: IDetails = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.SET_DETAILS:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}

export default DetailsReducer
