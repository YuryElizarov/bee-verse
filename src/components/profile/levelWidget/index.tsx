import './styles.scss'
import Heading from "../../../ui/heading";
import {EHeadingVariant} from "../../../ui/heading/types.ts";
import Backing from "../../genereal/backing";
import {EBacking} from "../../genereal/backing/types.ts";
import Paragraph from "../../../ui/paragraph";
import {EParagraphVariant} from "../../../ui/paragraph/types.ts";

function Index() {
  const percent = 50
  return (
    <>
      <svg className="level-widget__svg">
        <clipPath id="level-widget__progress__line" clipPathUnits="objectBoundingBox"><path d="M0,0 H0.962 C0.99,0,1,0.178,0.996,0.326 L0.945,0.881 C0.939,0.954,0.926,1,0.912,1 H0 V0"></path></clipPath>
        {/*<clipPath id="level-widget__progress__line__inner" clipPathUnits="objectBoundingBox"><path d="M0,0 H0.962 C0.99,0,1,0.178,0.996,0.326 L0.945,0.881 C0.939,0.954,0.926,1,0.912,1 H0 V0"></path></clipPath>*/}
        <clipPath id="level-widget__progress__line__inner" clipPathUnits="objectBoundingBox"><path d="M0,0 H0.962 C0.99,0,1,0.178,0.965,0.600 L0.945,0.881 C0.939,0.954,0.926,1,0.912,1 H0 V0"></path></clipPath>
      </svg>
      <div className={'level-widget'}>
        <div className="level-widget__level">
          <Heading variant={EHeadingVariant.H4}>1</Heading>
        </div>
        <div className="level-widget__progress">
          <Backing variant={EBacking.WoodSmall}>
            <div className={["level-widget__progress__line", percent >= 100 ? 'level-widget__progress__line_full' : ''].join(' ')} style={{width: `${percent}%`}}>
              <div className="level-widget__progress__line__inner"/>
            </div>
            <Paragraph variant={EParagraphVariant.default_1}>Wisdom bee</Paragraph>
          </Backing>
        </div>
      </div>
    </>
  );
}

export default Index;
