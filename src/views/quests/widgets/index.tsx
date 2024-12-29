import './styles.scss'
import Paragraph from "../../../ui/paragraph";
import {EParagraphVariant} from "../../../ui/paragraph/types.ts";
import Backing from "../../../components/genereal/backing";
import {EBacking} from "../../../components/genereal/backing/types.ts";
import {CheckIcon, CoinIcon} from "../../../ui/svg";

function Index() {
  return (
    <div className={'quests-widgets'}>
      <div className="quests-widgets__chain"/>
      <div className="quests-widgets__days">
        <div className="quests-item">
          <div className="quests-item__title">
            <Paragraph variant={EParagraphVariant.default_1}>4 day</Paragraph>
          </div>
          <div className="quests-item__desc">
            <Backing variant={EBacking.WoodSmall}>
              <CheckIcon/>
              <Paragraph variant={EParagraphVariant.default_1}>195К</Paragraph>
            </Backing>
          </div>
        </div>
        <div className="quests-item quests-item__current">
          <div className="quests-item__title">
            <Paragraph variant={EParagraphVariant.default_1}>5 day</Paragraph>
          </div>
          <div className="quests-item__desc">
            <Backing variant={EBacking.WoodSmall}>
              <div className="quests-item__bg"/>
              <CoinIcon/>
              <Paragraph variant={EParagraphVariant.default_1}>195К</Paragraph>
            </Backing>
          </div>
        </div>
        <div className="quests-item quests-item__next">
          <div className="quests-item__title">
            <Paragraph variant={EParagraphVariant.default_1}>6 day</Paragraph>
          </div>
          <div className="quests-item__desc">
            <Backing variant={EBacking.WoodSmall}>
              <div className="quests-item__bg"/>
              <CoinIcon/>
              <Paragraph variant={EParagraphVariant.default_1}>5%</Paragraph>
            </Backing>
          </div>
        </div>
      </div>
      <Paragraph variant={EParagraphVariant.default_1}>Each day, you receive a 5% bonus for defeating the boss and completing daily quests. </Paragraph>
    </div>
  );
}

export default Index;
