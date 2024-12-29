import './styles.scss'
import Heading from "../../../ui/heading";
import {EHeadingVariant} from "../../../ui/heading/types.ts";
import {useEffect, useRef, useState} from "react";
import {TLoadingMessages} from "../../../@types";
import {getLoadingMessage} from "../../../utils/loading.ts";
import honeycombs from '../../../assets/images/loading/progressHoneycombs.png'

const maxPercent = 100
function Index({messages, onLoad}:{messages: TLoadingMessages, onLoad?: () => void}) {
  const [percent, setPercent] = useState<number>(20)
  const interval = useRef<number | null>(null)

  useEffect(() => {
    interval.current = setInterval(() => {
      setPercent(prevState => {
        if (prevState >= maxPercent) {
          clearInterval(interval.current as number)
        }
        return prevState + 10 > maxPercent ? maxPercent : prevState + 10
      })
    }, 1000)
  }, [onLoad])
  useEffect(() => {
    if (percent >= maxPercent) setTimeout(onLoad, 1000)
  }, [percent, onLoad]);

  return (
    <div className="loading-block">
      <div className="loading-block__inner">
        <div className="loading-block__progress" style={{width: `${percent}%`}}>
          <div className="loading-block__progress__inner">
            <img src={honeycombs} alt="Homeycombs" className={'loading-block__progress__inner__image'}/>
          </div>
        </div>
        <Heading variant={EHeadingVariant.H3}>{getLoadingMessage(messages, percent)}</Heading>
      </div>
    </div>
  );
}

export default Index;
