import './styles.scss'
import Paragraph from "../../../../ui/paragraph";
import {EParagraphVariant} from "../../../../ui/paragraph/types.ts";
import {BackIcon, CoinIcon, YouTubeIcon} from "../../../../ui/svg";
import Heading from "../../../../ui/heading";
import {EHeadingVariant} from "../../../../ui/heading/types.ts";

function Index() {
  return (
    <div className={'quest-item'}>
      <div className="quest-item__label">
        <YouTubeIcon/>
      </div>
      <div className="quest-item__content">
        <div className="quest-item__content__left">
          <Paragraph variant={EParagraphVariant.default_1}>Subscribe to the  YouTube channel</Paragraph>
          <div className="quest-item__content__left__row">
            <Heading variant={EHeadingVariant.H4}>+5 000</Heading>
            <CoinIcon/>
          </div>
        </div>
        <div className="quest-item__content__right">
          <BackIcon/>
        </div>
      </div>
    </div>
  );
}

export default Index;
