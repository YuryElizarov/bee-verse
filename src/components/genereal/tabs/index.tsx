import './styles.scss'
import Backing from "../backing";
import {EBacking} from "../backing/types.ts";
import {ReactNode} from "react";

function Index({tabs, activeTab, setActiveTab}: {
  activeTab: number,
  setActiveTab: (val: number) => void,
  tabs: Array<{ item: ReactNode, value: number }>
}) {
  return (
    <div className={'tabs'}>
      {tabs.map((tab) => <div onClick={() => setActiveTab(tab.value)}
                              className={["tabs__tab", tab.value === activeTab ? "tabs__tab_active" : ""].join(' ')}
                              key={tab.value}>
        <Backing variant={EBacking.Stone}>
          <div className="tabs__tab__bg"/>
          {tab.item}
        </Backing>
      </div>)}
    </div>
  );
}

export default Index;
