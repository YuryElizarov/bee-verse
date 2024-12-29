import ListWrapper from "../../../components/profile/listWrapper";
import './styles.scss'
import Heading from "../../../ui/heading";
import {EHeadingVariant} from "../../../ui/heading/types.ts";
import IconButton from "../../../ui/iconButton";
import {CoinIcon, ShareIcon, UpdateIcon} from "../../../ui/svg";
import Button from "../../../ui/button";
import {EButtonVariant} from "../../../ui/button/types.ts";
import UserListItem from "../../../components/profile/listWrapper/userListItem";
import {generateArrayFrom} from "../../../utils";

function Index() {
  return (
    <ListWrapper
    data={
      <>
        {generateArrayFrom(0, 10).map((_, index) => <UserListItem key={index}/>)}
      </>
    }
      header={<div className="friends">
      <div className="friends__header">
        <div className="friends__header__update">
          <IconButton><UpdateIcon/></IconButton>
        </div>
        <div className="friends__header__title-block">
          <Heading variant={EHeadingVariant.H2}>My friends</Heading>
        </div>
      </div>
    </div>}>
      <div className="friends__body">
        <div className="friends__body__button">
          <Button variant={EButtonVariant.StoneDiamond} icon={<ShareIcon/>}>Invite new friends</Button>
          <Button variant={EButtonVariant.StoneGold} icon={<div className={'friends__body__button__icon'}><CoinIcon/></div>}>Get income: 52.256,526</Button>
        </div>
      </div>
    </ListWrapper>
  );
}

export default Index;
