import './styles.scss'
import {useAppAction, useAppState} from "../../../store/app/hooks.ts";
import {EPopups} from "../../../store/app/types.ts";
import Popup from "../../../ui/popup";
import {useCallback, useState} from "react";
import Input from "../../../ui/input";
import {useUserAction} from "../../../store/user/hooks.ts";
function Index() {
  const {popups} = useAppState()
  const {onClosePopup} = useAppAction()
  const {onSetUserName} = useUserAction()

  const [userName, setUserName] = useState<string>('')

  // @ts-ignore
  const handleTagKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSetUserName(userName)
    }
  }, [userName]);

  if (!popups[EPopups.SetName]) return null
  return (
    <Popup onClose={() => onClosePopup(EPopups.SetName)} title="Greetings to you!" isCloseOnMissClick={false}>
      <Input onKeyUp={handleTagKeyDown} placeholder='Write name' name='name' id='username' value={userName} onChange={event => setUserName(event.target.value)}/>
    </Popup>
  );
}

export default Index;
