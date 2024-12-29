import Backing from "../backing";
import {EBacking} from "../backing/types.ts";
import {IMenuItem} from "../../../config/menu.ts";
import {Link, useLocation} from "react-router-dom";
import chain from '../../../assets/images/chain.png'
import Paragraph from "../../../ui/paragraph";
import {EParagraphVariant} from "../../../ui/paragraph/types.ts";
import {useMemo} from "react";

function MenuItem({href, icon, title, isBlocked}: IMenuItem) {
  const {pathname} = useLocation()
  const isActive = useMemo(() => href === pathname, [href, pathname])
  return (
    <Link to={href} onClick={event => {
      if (isBlocked) event.preventDefault()
    }} className={['menu-item', isBlocked ? 'menu-item_blocked' : '', isActive ? 'menu-item_active' : ''].join(' ')}>
      {isBlocked && <div className={'menu-item__chain'}>
          <img src={chain} alt="Chain"/>
      </div>}
      <Backing variant={EBacking.WoodSmall}>
        <div className="menu-item__icon">
          <img src={icon} alt={title}/>
          {isActive && <Paragraph variant={EParagraphVariant.default_1}>{title}</Paragraph>}
        </div>
      </Backing>
    </Link>
  );
}

export default MenuItem;
