import {BrowserRouter} from "react-router-dom";
import {store} from "./store";
import {Provider} from "react-redux";
import Popups from "./Popups.tsx";


interface Props {
  children: React.ReactNode
}

function Providers({children}: Props) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Popups/>
        {children}
      </Provider>
    </BrowserRouter>
  );
}

export default Providers;
