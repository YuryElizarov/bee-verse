import './styles.scss'
import Header from "../../views/general/header";
import {EHeaderVariant} from "../../views/general/header/types.ts";
import QuestsList from "../../views/quests/questsList";
import Widgets from "../../views/quests/widgets";
function Index() {
  return (
    <>
      <Header variant={EHeaderVariant.Green} title={'Daily bonus'} text={'30 day  5%'} widgets={<Widgets/>}/>
      <QuestsList/>
    </>
  );
}

export default Index;
