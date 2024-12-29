import './styles.scss'
import testProfile from '../../../assets/images/profile/testProfile.png'
import {useUserState} from "../../../store/user/hooks.ts";
import Heading from "../../../ui/heading";
import {EHeadingVariant} from "../../../ui/heading/types.ts";

function Index() {
  const {name} = useUserState()
  if (!name) return null
  return (
    <div className={'avatar-and-nickname'}>
      <div className="avatar-and-nickname__avatar">
        <img src={testProfile} alt={name}/>
      </div>
      <div className="avatar-and-nickname__nickname">
        <Heading variant={EHeadingVariant.H4}>{name}</Heading>
      </div>
    </div>
  );
}

export default Index;
