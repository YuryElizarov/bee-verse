import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {AppDispatch, RootState} from "../index";
import {
  closePopup, openPopup
} from "./appSlice";
import {EPopups} from "./types";

export const getApp = (state: RootState) => state.app

export function useAppAction() {
  const dispatch = useDispatch<AppDispatch>()

  const onClosePopup = useCallback((popup: EPopups) => {
    dispatch(closePopup(popup))
  }, [dispatch])
  const onOpenPopup = useCallback((data: { popup: EPopups, params?: { [key: string]: any } }) => {
    dispatch(openPopup(data))
  }, [dispatch])

  return useMemo(() => ({
    onClosePopup,
    onOpenPopup,
  }), [onClosePopup, onOpenPopup])
}

export function useAppState() {
  return useSelector(getApp)
}
