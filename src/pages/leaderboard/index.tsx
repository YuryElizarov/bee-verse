import './styles.scss'
import Header from "../../views/general/header";
import {EHeaderVariant} from "../../views/general/header/types.ts";
import LeaderboardList from "../../views/leaderboard/leaderboardList";
function Index() {
  return (
    <>
      <Header variant={EHeaderVariant.Diamond} title={'Leader Board'}/>
      <LeaderboardList/>
    </>
  );
}

export default Index;
