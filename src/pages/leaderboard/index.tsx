import './styles.scss'
import Header from "../../views/general/header";
import {EHeaderVariant} from "../../views/general/header/types.ts";
import LeaderboardList from "../../views/leaderboard/leaderboardList";
import PageListWrapper from "../../components/genereal/pageListWrapper";
function Index() {
  return (
    <PageListWrapper>
      <Header variant={EHeaderVariant.Diamond} title={'Leader Board'}/>
      <LeaderboardList/>
    </PageListWrapper>
  );
}

export default Index;
