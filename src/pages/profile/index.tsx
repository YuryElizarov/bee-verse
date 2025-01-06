import './styles.scss'
import Header from "../../views/general/header";
import {EHeaderVariant} from "../../views/general/header/types.ts";
import FriendsList from "../../views/profile/friendsList";
import Widgets from "../../views/profile/widgets";
import PageListWrapper from "../../components/genereal/pageListWrapper";
function Index() {
  return (
    <PageListWrapper>
      <Header variant={EHeaderVariant.Green} title={'Profile'} widgets={<Widgets/>}/>
      <FriendsList/>
    </PageListWrapper>
  );
}

export default Index;
