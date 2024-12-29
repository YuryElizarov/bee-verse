import {configureStore} from '@reduxjs/toolkit'
import {save, load} from 'redux-localstorage-simple';
import appSlice, {AppState} from "./app/appSlice";
import userSlice, {UserState} from "./user/userSlice";

type MergedState = {
  app: AppState
  user: UserState
}
const PERSISTED_KEYS: string[] = [
  'user'
]
const NAMESPACE_STORE: string = 'bee-verse__local'
const loadedState = load({
  states: PERSISTED_KEYS, namespace: NAMESPACE_STORE, disableWarnings: true,
}) as MergedState
export const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
  },
  preloadedState: loadedState,
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: true,
  })
    .concat(
      save({states: PERSISTED_KEYS, namespace: NAMESPACE_STORE,}),
    )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
