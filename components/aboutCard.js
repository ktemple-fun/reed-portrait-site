import Image from 'next'

export default function About ({ profile }) {
    return(
    <div>
        <h1>About {profile.ownerName}</h1>  
        <p>{profile.aboutMe}</p>
        <Image
            src={profile.profilePhoto.url}
            width={profile.profilePhoto.width}
            height={profile.profilePhoto.height}
        />
    </div>
    )
  }