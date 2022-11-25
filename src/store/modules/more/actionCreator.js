import { fetchaMoreRoomListData } from "@/services/modules/more"
import * as actionTypes from "./constants"


// export function getData() {
//   return (dispatch, getState) => {
//     fetch('http://123.207.32.32:8000/home/multidata').then(res => res.json()).then(res => {
//       const banners = res.data.banner.list
//       dispatch(changeBanners(banners))
//     })
//   }
// }
export function changeTotalCount(data) {
  return { type: actionTypes.CHANGE_TOTAL_COUNT, data }
}
export function changeRoomList(data) {
  return { type: actionTypes.CHANGE_ROOM_LIST, data }
}
export function changeCurrentPage(data) {
  return { type: actionTypes.CHANGE_CURRENT_PAGE, data }
}
export function changeIsLoading(data) {
  return { type: actionTypes.CHANGE_IS_LOADING, data }
}

export function getRoomListAction(page = 0) {
  return async (dispatch, getState) => {
    dispatch(changeCurrentPage, page)
    const currentPage = getState().more.currentPage;
    dispatch(changeIsLoading(true))
    const res = await fetchaMoreRoomListData(currentPage * 20)
    dispatch(changeIsLoading(false))
    dispatch(changeRoomList(res.list))
    dispatch(changeTotalCount(res.totalCount))
  }
}