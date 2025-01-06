import './styles.scss'
import Header from "../../views/general/header";
import {EHeaderVariant} from "../../views/general/header/types.ts";
import QuestsList from "../../views/quests/questsList";
import Widgets from "../../views/quests/widgets";
import PageListWrapper from "../../components/genereal/pageListWrapper";
function Index() {
  return (
    <PageListWrapper>
      <Header variant={EHeaderVariant.Green} title={'Daily bonus'} text={'30 day  5%'} widgets={<Widgets/>}/>
      <QuestsList/>
    </PageListWrapper>
  );
}

export default Index;
