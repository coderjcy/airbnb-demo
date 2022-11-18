import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchHomeData } from '@/services'
export const getHomeDataAction = createAsyncThunk('getHomeData', async (payload, store) => {
  const res = await fetchHomeData()
  store.dispatch(amendPremiumInfoAction(res))
  // return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homename: 'jcy',
    premiumInfo: {}
  },
  reducers: {
    amendPremiumInfoAction(state, { payload }) {
      state.premiumInfo = payload
    }
  },
  // extraReducers: {
  //   [getHomeDataAction.fulfilled](state, { payload }) {
  //     state.premiumInfo = payload
  //   }
  // }
})

export default homeSlice.reducer
export const { amendPremiumInfoAction } = homeSlice.actions