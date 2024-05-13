import { useContext } from "react"
import UserContext from "../context/UserContext"


const Profile = () => {
    const {user} = useContext(UserContext)

if(!user) return <h3>User not logged in</h3>
  return (
    <div>
      <h2> Profile : {user.userName}</h2>
    </div>
  )
}

export default Profile
