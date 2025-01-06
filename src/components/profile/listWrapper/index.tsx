import './styles.scss'
import {ReactNode} from "react";
import Backing from "../../genereal/backing";
import {EBacking} from "../../genereal/backing/types.ts";

function Index({children, header, data, baseTop, className}: {className?: string, header?: ReactNode, children?: ReactNode, data: ReactNode, baseTop?: number }) {

  return (
    <div
      style={baseTop ? {top:`${baseTop}px`}  : undefined}
      className={`list-wrapper ${className || ''}`}
    >
      <div className="list-wrapper__header">
        {header}
      </div>
      <div className="list-wrapper__content" >
        <Backing variant={EBacking.Stone}>
          {children}
          <div className="list-wrapper__list">
            {data}
          </div>
        </Backing>
      </div>
    </div>
  );
}

export default Index;
