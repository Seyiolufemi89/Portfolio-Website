
import profilePic from './assets/pixel-avatar-poses.gif';

function Profile() {
    return(
        <div className="profile">
            <img src={profilePic} alt="Animated pixel-art profile portrait" id="PFP" />
        </div>
    )
}

export default Profile