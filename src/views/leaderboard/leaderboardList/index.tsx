import ListWrapper from "../../../components/profile/listWrapper";
import './styles.scss'
import UserListItem from "../../../components/profile/listWrapper/userListItem";
import {generateArrayFrom} from "../../../utils";
import Backing from "../../../components/genereal/backing";
import {EBacking} from "../../../components/genereal/backing/types.ts";
import Heading from "../../../ui/heading";
import {EHeadingVariant} from "../../../ui/heading/types.ts";
import Tabs from "../../../components/genereal/tabs";

import leaderboard1 from '../../../assets/images/leaderboard/leaderboard1.png'
import leaderboard2 from '../../../assets/images/leaderboard/leaderboard2.png'
import leaderboard3 from '../../../assets/images/leaderboard/leaderboard3.png'
import leaderboard4 from '../../../assets/images/leaderboard/leaderboard4.png'
import leaderboard5 from '../../../assets/images/leaderboard/leaderboard5.png'
import {useState} from "react";

function Index() {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <ListWrapper
      maxTop={-200}
      baseTop={-200}
      data={
        <>
          {generateArrayFrom(0, 10).map((_, index) => <UserListItem key={index}/>)}
        </>
      }
      header={<div className="leaderboard">
        <div className="leaderboard__header">
          <Tabs
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            tabs={[
            {
              item: <img className={'leaderboard__tab'} src={leaderboard1} alt={'Leaderboard 1'}/>,
              value: 1
            },
            {
              item: <img className={'leaderboard__tab'} src={leaderboard2} alt={'Leaderboard 2'}/>,
              value: 2
            },
            {
              item: <img className={'leaderboard__tab'} src={leaderboard3} alt={'Leaderboard 1'}/>,
              value: 3
            },
            {
              item: <img className={'leaderboard__tab'} src={leaderboard4} alt={'Leaderboard 1'}/>,
              value: 4
            },
            {
              item: <img className={'leaderboard__tab'} src={leaderboard5} alt={'Leaderboard 1'}/>,
              value: 5
            },
          ]}/>
        </div>
      </div>}>
      <div className="leaderboard__body">
        <div className="leaderboard__body__rating">
          <Backing variant={EBacking.Stone}>
            <Heading variant={EHeadingVariant.H4}>5 000 - 10 000</Heading>
          </Backing>
        </div>
      </div>
    </ListWrapper>
  );
}

export default Index;
