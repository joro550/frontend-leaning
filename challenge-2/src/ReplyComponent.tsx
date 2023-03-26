import { User } from "./loader/dataLoader"
import { ProfilePicture } from "./ProfilePicture"

type ReplyProps = {user: User}
export function ReplyComponent(props:ReplyProps) {
  return (
    <div className="flex bg-white mt-3 rounded-lg p-3 container ">
      <ProfilePicture user={props.user} />
      <div className="pl-5 container">
       <textarea className="container h-28 border pl-3 rounded-md border-black" /> 
      </div>
      <button className="ml-3 h-12 p-2 rounded-lg bg-purple-300">Reply</button>
    </div>
  )}