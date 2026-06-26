
import profilePic from './assets/IMG_0046.JPEG';

function Profile() {
    return(
        <div className="profile">
            <img src={profilePic} alt="profile pic" id="PFP"></img>
        </div>
    )
}

export default Profile