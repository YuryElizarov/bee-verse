import './styles.scss'
import AvatarAndNickname from "../../../components/profile/avatarAndNickname";
import UserClan from "../../../components/profile/userClan";
import FriendsWidget from "../../../components/profile/friendsWidget";
import LevelWidget from "../../../components/profile/levelWidget";
import LeaderboardWidget from "../../../components/profile/leaderboardWidget";

function Index() {
  return (
    <div className={'profile-widgets'}>
      <div className="profile-widgets__row">
        <div className="profile-widgets__nickname-and-clan">
          <AvatarAndNickname/>
          <UserClan/>
        </div>
        <div className="profile-widgets__row">
          <FriendsWidget/>
        </div>
      </div>
      <div className="profile-widgets__row">
        <LevelWidget/>
        <LeaderboardWidget/>
      </div>
    </div>
  );
}

export default Index;
