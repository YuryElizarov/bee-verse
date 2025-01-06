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
import Backing from "../../../components/genereal/backing";
import {EBacking} from "../../../components/genereal/backing/types.ts";
import Paragraph from "../../../ui/paragraph";
import {EParagraphVariant} from "../../../ui/paragraph/types.ts";

function Index() {
  return (
    <ListWrapper
      baseTop={240}
      data={
        <>
          {generateArrayFrom(0, 10).map((_, index) => <UserListItem key={index}/>)}
        </>
      }
      header={<div className="referrals">
        <div className="referrals__stats">
          <div className="referrals__stats__statistic">
            <Backing variant={EBacking.Stone}>
              <Paragraph variant={EParagraphVariant.default_1}>Received for all time</Paragraph>
              <div className="referrals__stats__statistic__value">
                <Heading variant={EHeadingVariant.H2}>250К</Heading>
                <CoinIcon/>
              </div>
            </Backing>
          </div>
          <Button variant={EButtonVariant.StoneDiamond} icon={<ShareIcon/>}>Invite</Button>
        </div>
        <div className="referrals__header">
          <div className="referrals__header__update">
            <IconButton><UpdateIcon/></IconButton>
          </div>
          <div className="referrals__header__title-block">
            <Heading variant={EHeadingVariant.H2}>My referrals</Heading>
          </div>
        </div>
      </div>}>
      <div className="referrals__body">
        <div className="referrals__body__button">
          <Button variant={EButtonVariant.StoneGold}
                  icon={<div className={'referrals__body__button__icon'}><CoinIcon/></div>}>Get income:
            52.256,526</Button>
        </div>
      </div>
    </ListWrapper>
  );
}

export default Index;
