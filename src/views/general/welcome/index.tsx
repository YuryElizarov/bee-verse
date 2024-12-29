import './styles.scss'
import Loading from "../../../components/genereal/loading";
import {mainLoading} from "../../../config/loadings.ts";
import {useUserState} from "../../../store/user/hooks.ts";
import {useCallback, useEffect} from "react";
import {useAppAction} from "../../../store/app/hooks.ts";
import {EPopups} from "../../../store/app/types.ts";

function Index({onLoading}: {onLoading: () => void}) {

  const {name} = useUserState()
  const {onOpenPopup} = useAppAction()

  const onLoadingHandler = useCallback(() => {
    if (name) {
      const loading = document.getElementById('loading')
      if (loading) {
        loading.remove()
      }
      onLoading()
    }
  }, [onLoading, name])

  useEffect(() => {
    if (!name) {
      onOpenPopup({popup: EPopups.SetName})
    }
  }, [name]);
  return (
    <>
      <div className="welcome__loading">
        <Loading onLoad={onLoadingHandler} messages={mainLoading}/>
      </div>
    </>
  );
}

export default Index;
