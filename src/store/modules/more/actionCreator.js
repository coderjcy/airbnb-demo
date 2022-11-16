import * as actionTypes from "./constants"


// export function getData() {
//   return (dispatch, getState) => {
//     fetch('http://123.207.32.32:8000/home/multidata').then(res => res.json()).then(res => {
//       const banners = res.data.banner.list
//       dispatch(changeBanners(banners))
//     })
//   }
// }
export function changeBanners(banner) {
  return { type: actionTypes.CHANGE_BANNER, banner }
}
