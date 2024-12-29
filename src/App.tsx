import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./views/general/layout";
import Welcome from "./views/general/welcome";
import {useState} from "react";
import Profile from "./pages/profile";
import Referrals from "./pages/referrals";
import LeaderBoard from "./pages/leaderboard";
import Quests from "./pages/quests";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  if (isLoading) return <Welcome onLoading={() => setIsLoading(false)}/>
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/referrals'} element={<Referrals/>}/>
          <Route path={'/leaderboard'} element={<LeaderBoard/>}/>
          <Route path={'/quests'} element={<Quests/>}/>
          <Route path={'*'} element={<Navigate to={'/profile'}/>}/>
        </Route>
      </Routes>
    </>

  )
}

export default App
