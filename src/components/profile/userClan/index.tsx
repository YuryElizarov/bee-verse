import './styles.scss'
import Backing from "../../genereal/backing";
import {EBacking} from "../../genereal/backing/types.ts";
import Paragraph from "../../../ui/paragraph";
import {EParagraphVariant} from "../../../ui/paragraph/types.ts";
import {LockIcon} from "../../../ui/svg";

function Index() {
  return (
    <div className={'user-clan'}>
      <Backing variant={EBacking.WoodSmall}>
        <div className="user-clan__content">
          <Paragraph variant={EParagraphVariant.default_1}>Clan</Paragraph>
          <div className="user-clan__lock">
            <LockIcon/> <Paragraph variant={EParagraphVariant.default_1}>soon</Paragraph>
          </div>
        </div>
      </Backing>
    </div>
  );
}

export default Index;
