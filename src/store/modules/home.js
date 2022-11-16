import { createSlice } from '@reduxjs/toolkit'


const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homename: 'jcy'
  },
  reducers: {
    a() {

    }
  }

})

export default homeSlice.reducer
export const { a } = homeSlice.actions