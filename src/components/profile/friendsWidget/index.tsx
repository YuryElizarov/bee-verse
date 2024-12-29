import './styles.scss'
import Backing from "../../genereal/backing";
import {EBacking} from "../../genereal/backing/types.ts";
import {FriendsIcon} from "../../../ui/svg";
import Heading from "../../../ui/heading";
import {EHeadingVariant} from "../../../ui/heading/types.ts";
import {useNavigate} from "react-router-dom";

function Index() {
  const navigate = useNavigate()
  return (
    <div className={'friends-widget'} onClick={() => navigate('/referrals')}>
      <Backing variant={EBacking.Stone}>
        <div className="friends-widget__content">
          <FriendsIcon/>
          <Heading variant={EHeadingVariant.H4}>12</Heading>
        </div>
      </Backing>
    </div>
  );
}

export default Index;
