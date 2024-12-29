
import {Outlet} from "react-router-dom";
import './styles.scss'
import Menu from "../../../components/genereal/menu";
function Index() {
  return (
    <div className={'app-wrapper'}>
      <Outlet/>
      <Menu/>
    </div>
  );
}

export default Index;
