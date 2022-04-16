import ActionType from '../action-types'

import { IDetails } from 'src/interfaces/details.interface'

interface DetailsAction {
  type: ActionType.SET_DETAILS
  payload: IDetails
}

type Action = DetailsAction

export default Action
