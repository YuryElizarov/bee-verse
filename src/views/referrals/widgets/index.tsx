import './styles.scss'
import Backing from "../../../components/genereal/backing";
import {EBacking} from "../../../components/genereal/backing/types.ts";
import Heading from "../../../ui/heading";
import {EHeadingVariant} from "../../../ui/heading/types.ts";
import {CoinIcon, CombatStarIcon, FriendsIcon, StarIcon} from "../../../ui/svg";
import Paragraph from "../../../ui/paragraph";
import {EParagraphVariant} from "../../../ui/paragraph/types.ts";

function Index() {
  return (
    <div className={'referrals-widgets'}>
      <div className="referrals-widgets__widget">
        <Backing variant={EBacking.Stone}>
          <div className="referrals-widgets__widget__icon">
            <FriendsIcon/>
          </div>
          <div className="referrals-widgets__widget__content">
            <div className="referrals-widgets__widget__content__header">
              <Heading variant={EHeadingVariant.H4}>5.000</Heading>
              <CoinIcon/>
            </div>
            <Paragraph variant={EParagraphVariant.default_1}>Invite friend!</Paragraph>
          </div>
        </Backing>
      </div>
      <div className="referrals-widgets__widget">
        <Backing variant={EBacking.Stone}>
          <div className="referrals-widgets__widget__icon">
            <StarIcon/>
          </div>
          <div className="referrals-widgets__widget__content">
            <div className="referrals-widgets__widget__content__header">
              <Heading variant={EHeadingVariant.H4}>10.000</Heading>
              <CoinIcon/>
            </div>
            <Paragraph variant={EParagraphVariant.default_1}>Invite friend with Telegram premium</Paragraph>
          </div>
        </Backing>
      </div>
      <div className="referrals-widgets__widget">
        <Backing variant={EBacking.Stone}>
          <div className="referrals-widgets__widget__icon">
            <CombatStarIcon/>
          </div>
          <div className="referrals-widgets__widget__content">
            <div className="referrals-widgets__widget__content__header">
              <Heading variant={EHeadingVariant.H4}>Receive 0.5%</Heading>
            </div>
            <Paragraph variant={EParagraphVariant.default_1}>Get from earnings from each invited friend!</Paragraph>
          </div>
        </Backing>
      </div>
    </div>
  );
}

export default Index;
