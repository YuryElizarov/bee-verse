import './styles.scss'
import {ReactNode} from "react";
function Index({children}: {children: ReactNode}) {
  return (
    <div className={'page-list-wrapper'}>
      {children}
    </div>
  );
}

export default Index;
