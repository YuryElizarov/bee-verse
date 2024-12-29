import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface UserState {
  name: string | null
}

export const initialState: UserState = {
  name: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state: UserState, action: PayloadAction<string | null>) => {
      state.name = action.payload
    },
  },
  // extraReducers: builder => {
  //   builder
  // }
})

export const {
  setUserName,
} = userSlice.actions
export default userSlice.reducer
