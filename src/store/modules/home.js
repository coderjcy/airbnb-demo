import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchHomeData,
  fetchHomeHighSocreData,
  fetchHomeDiscontData,
  fetchRecommendData,
  fetchLongForData,
  fetchHomePluseData
} from '@/services'
// export const getHomeDataAction = createAsyncThunk('getHomeData', async (payload, store) => {
//   const res = await fetchHomeData()
//   store.dispatch(changePremiumInfoAction(res))
//   // return res
// })
export const getHomeDataAction = createAsyncThunk('getHomeData', async (payload, store) => {
  fetchHomeData().then(res => {
    store.dispatch(changePremiumInfoAction(res))
  })
  fetchHomeHighSocreData().then(res => {
    store.dispatch(changeHighScoreInfoAction(res))
  })
  fetchHomeDiscontData().then(res => {
    store.dispatch(changeHomeDiscontAction(res))
  })
  fetchRecommendData().then(res => {
    store.dispatch(changeRecommendInfoAction(res))
  })
  fetchLongForData().then(res => {
    store.dispatch(changeLongforInfoAction(res))
  })
  fetchHomePluseData().then(res => {
    store.dispatch(changeHomePlusAction(res))
  })

})
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homename: 'jcy',
    premiumInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    plusInfo: {}
  },
  reducers: {
    changePremiumInfoAction(state, { payload }) {
      state.premiumInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeHomeDiscontAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changeHomePlusAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },
  // extraReducers: {
  //   [getHomeDataAction.fulfilled](state, { payload }) {
  //     state.premiumInfo = payload
  //   }
  // }
})

export default homeSlice.reducer
export const { changePremiumInfoAction,
  changeHighScoreInfoAction,
  changeHomeDiscontAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changeHomePlusAction } = homeSlice.actions