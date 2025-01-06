import ListWrapper from "../../../components/profile/listWrapper";
import './styles.scss'
import {generateArrayFrom} from "../../../utils";
import Tabs from "../../../components/genereal/tabs";
import {useState} from "react";
import Paragraph from "../../../ui/paragraph";
import {EParagraphVariant} from "../../../ui/paragraph/types.ts";
import QuestListItem from "../../../components/profile/listWrapper/questListItem";

function Index() {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <ListWrapper
      className={'quests__list'}
      baseTop={240}
      data={
        <>
          {generateArrayFrom(0, 10).map((_, index) => <QuestListItem key={index}/>)}
        </>
      }
      header={<div className="quests">
        <div className="quests__header">
          <Tabs
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            tabs={[
            {
              item: <Paragraph variant={EParagraphVariant.default_1}>Daily</Paragraph>,
              value: 1
            },
            {
              item: <Paragraph variant={EParagraphVariant.default_1}>Daily</Paragraph>,
              value: 2
            },
            {
              item: <Paragraph variant={EParagraphVariant.default_1}>Partners</Paragraph>,
              value: 3
            },
            {
              item: <Paragraph variant={EParagraphVariant.default_1}>Crypto</Paragraph>,
              value: 4
            },
          ]}/>
        </div>
      </div>}>
    </ListWrapper>
  );
}

export default Index;
