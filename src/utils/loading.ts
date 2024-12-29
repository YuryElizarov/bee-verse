import {TLoadingMessages} from "../@types";

export const getLoadingMessage = (messages: TLoadingMessages, value: number) => {
  const ids = Object.keys(messages).map(Number)
  let index: number =ids[0]
  for (const id of ids) {
    if (id > value) {
      break
    }
    index = id
  }
  return messages[index]
}
