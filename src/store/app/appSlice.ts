import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EPopups} from "./types";

export interface AppState {
  popups: { [modal in EPopups]: boolean | {params?: {[key: string]: any}} },
}

const initialState: AppState = {
  popups: {
    [EPopups.SetName]: false,
  },
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<{ popup: EPopups, params?: {[key: string]: any} }>) => {
      state.popups[action.payload.popup] = {params: action.payload.params}
    },
    closePopup: (state, action: PayloadAction<EPopups>) => {
      state.popups[action.payload] = false
    },
  },
  // extraReducers: builder => {
  //   builder
  // }
})

export const {closePopup, openPopup} = appSlice.actions
export default appSlice.reducer
