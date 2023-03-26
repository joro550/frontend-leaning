import { CommentComponent } from "./CommentComponent";
import { Reply, User } from "./loader/dataLoader";

type ReplyProps = {replies : Reply[], currentUser : User}

export function Replies(props:ReplyProps) {
    if(props.replies == null || props.replies.length == 0)
        return (<></>);
    
    return (
        <div className="flex m-3 container">
            <div className="bg-gray-300 w-1 rounded-lg"></div>
            <div className="ml-5">
                {props.replies.map(r => {
                    return (<CommentComponent 
                                key={r.id} 
                                comment={r}
                                currentUser={props.currentUser} />);
                })}
            </div>
        </div>
    );
}