import './styles.scss'
import Header from "../../views/general/header";
import {EHeaderVariant} from "../../views/general/header/types.ts";
import Widgets from "../../views/referrals/widgets";
import ReferralsList from "../../views/referrals/referralsList";
function Index() {
  return (
    <>
      <Header variant={EHeaderVariant.Default} title={'Referrals'} text={'For you and your friend'} widgets={<Widgets/>}/>
      <ReferralsList/>
    </>
  );
}

export default Index;
