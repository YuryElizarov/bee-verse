import './styles.scss'
import {ReactNode} from "react";
import {EBacking} from "./types.ts";

function Index({children, variant}: { children?: ReactNode, variant: EBacking }) {
  return (
    <div className={["backing", `backing_${variant}`].join(' ')}>
      <div className="backing__inner">
        {children}
      </div>
    </div>
  );
}

export default Index;
