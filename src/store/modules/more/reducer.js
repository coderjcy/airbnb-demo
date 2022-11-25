import * as actionTypes from './constants'

const initialState = {
  isLoading: false,
  currentPage: 0,
  totalCount: 0,
  roomList: {}
}

function reducer(state = initialState, action) {


  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, action, currentPage: action.data };
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.data }
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.data }
    case actionTypes.CHANGE_IS_LOADING:
      return { ...state, isLoading: action.data }
    default:
      return state
  }
}


export default reducer
