import './styles.scss'
import Backing from "../../genereal/backing";
import {EBacking} from "../../genereal/backing/types.ts";
import {EHeadingVariant} from "../../../ui/heading/types.ts";
import Heading from "../../../ui/heading";
import leaderboard5 from '../../../assets/images/leaderboard/leaderboard5.png'
import {useNavigate} from "react-router-dom";

function Index() {
  const navigate = useNavigate()
  return (
    <div className={'leaderboard-widget'} onClick={() => navigate('/leaderboard')}>
      <div className="leaderboard-widget__rank">
        <Backing variant={EBacking.Stone}>
          <img src={leaderboard5} alt="Leaderborad 5"/>
        </Backing>
      </div>
      <div className="leaderboard-widget__value">
        <Backing variant={EBacking.Stone}>
          <div className="leaderboard-widget__value__content">
            <Heading variant={EHeadingVariant.H4}>6 357</Heading>
          </div>
        </Backing>
      </div>
    </div>
  );
}

export default Index;
