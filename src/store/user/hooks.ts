import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {AppDispatch, RootState} from "../index";
import {
  setUserName, UserState
} from "./userSlice";

export const getUser = (state: RootState) => state.user

export function useUserAction() {
  const dispatch = useDispatch<AppDispatch>()

  const onSetUserName = useCallback((data: string | null) => {
    dispatch(setUserName(data))
  }, [dispatch])

  return useMemo(() => ({
    onSetUserName
  }), [onSetUserName])
}

export function useUserState(): UserState {
  return useSelector(getUser)
}
