import './styles.scss'
import Backing from "../../components/genereal/backing";
import {EBacking} from "../../components/genereal/backing/types.ts";
import {ReactNode} from "react";

function Index({children, onClick}: {children: ReactNode, onClick?: () => void}) {
  return (
    <div className={'icon-button'} onClick={onClick}>
      <Backing variant={EBacking.Stone}>
        {children}
      </Backing>
    </div>
  );
}

export default Index;
