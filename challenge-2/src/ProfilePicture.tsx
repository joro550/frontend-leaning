import { User } from "./loader/dataLoader"

type ProfilePictureProps = {user:User}
export function ProfilePicture(props:ProfilePictureProps) {
    if(props.user === null)
        return <></>


    return (
        <div className="h-10 w-10 rounded-lg">
            <img
                alt={"Profile picture for " + props.user.username }
                src={props.user.image.png}
                />
        </div>
    )
}