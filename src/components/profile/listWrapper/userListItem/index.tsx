import './styles.scss'
import Paragraph from "../../../../ui/paragraph";
import {EParagraphVariant} from "../../../../ui/paragraph/types.ts";
import leaderboard5 from "../../../../assets/images/leaderboard/leaderboard5.png";
import {CoinIcon, DiamondIcon} from "../../../../ui/svg";

function Index() {
  return (
    <div className={'user-item'}>
      <div className="user-item__label">
        <img src={leaderboard5} alt="Leaderborad 5"/>
        <Paragraph variant={EParagraphVariant.default_1}>4 166</Paragraph>
      </div>
      <div className="user-item__content">
        <div className="user-item__content__left">
          <Paragraph variant={EParagraphVariant.default_1}>ErenYeager</Paragraph>
        </div>
        <div className="user-item__content__right">
          <div className="user-item__content__right__row">
            <CoinIcon/>
            <Paragraph variant={EParagraphVariant.default_1}>592 264 (+567/h)</Paragraph>
          </div>
          <div className="user-item__content__right__row">
            <DiamondIcon/>
            <Paragraph variant={EParagraphVariant.default_1}>592 264</Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
