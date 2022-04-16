import { Dispatch } from 'redux'

import Action from '../actions'
import ActionType from '../action-types'

import { IDetails } from 'src/interfaces/details.interface'

export const setDetails = (details: IDetails) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_DETAILS,
      payload: details,
    })
  }
}
