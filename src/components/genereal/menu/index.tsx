import './styles.scss'
import Backing from "../backing";
import {EBacking} from "../backing/types.ts";
import MenuItem from "./menuItem.tsx";
import {menuItems} from "../../../config/menu.ts";

function Index() {
  return (
    <div className={'menu'}>
      <Backing variant={EBacking.Stone}>
        <div className="menu__list">
          {menuItems.map((item, id) => <MenuItem key={id} {...item}/>)}
        </div>
      </Backing>
    </div>
  );
}

export default Index;
