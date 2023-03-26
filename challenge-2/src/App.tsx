import { type } from "os";
import { useState } from "react";
import { Comment, DataLoader, Reply, User } from "./loader/dataLoader";
import { ProfilePicture } from "./ProfilePicture";
import { Replies } from "./Replies";

function App() {
  var dataLoader = new DataLoader();

  var data = dataLoader.loadFile();

  return (
    <div className="flex bg-gray-200 min-w-screen min-h-screen">
      <div className="mx-auto">
        {data.comments.map(c => {
            return <CommentComponent 
                      key={c.id} 
                      comment={c}  
                      currentUser={data.currentUser}  
                    />
        })}
      </div>
    </div>
  );
}

export default App;

type CommentProps = { comment: Comment | Reply, currentUser:User}
export function CommentComponent(props : CommentProps){
  let [score, setScore] = useState(props.comment.score);
  let [isReplying, setIsReplying] = useState(false);

  const addToScore = (numberToAdd : number) => {
    setScore(score + numberToAdd);
  }

  const getReplies = () => {
    var comment = props.comment as Comment;
    if(comment === null)
      return <></>;

    return (<Replies currentUser={props.currentUser} replies={comment.replies} />);
  }

  var data = props.comment;

  return (
    <div className="mx-auto">

      <div className="mx-auto rounded-md mt-3 bg-white p-3 max-w-sm md:max-w-md">
        <div className="flex container p-3">
          <ProfilePicture user={data.user} />
          <div className="pt-3 pl-3">{data.user.username}</div>
          <div className="pt-3 pl-3 text-gray-500">{data.createdAt}</div>
        </div>

        <div className="pl-5 pr-5 pb-5 text-gray-500 text-left text-wrap">
          {data.content}
        </div>

        <div className="flex container pl-1 pr-5 justify-between">
          <div className=" flex w-20 bg-gray-100 p-1 justify-between rounded-lg">
            <div 
              className="pl-2 text-gray-300 hover:text-blue-200"
              onClick={(e) => addToScore(-1)}  
            >
                -
              </div>
            <div className="text-blue-500">{score}</div>
            <div 
              className="pr-2 text-gray-300 hover:text-blue-200"
              onClick={(e) => addToScore(1)}
            >
              +
            </div>
          </div>
          <div className="text-blue-500 flex">
            <div className="pt-2">
              <img
                className="h-3 w-3"
                alt="reply button"
                src="/img/icons/icon-reply.svg" />
            </div>
            <div
              onClick={(e) => setIsReplying(true)} 
              className="pl-1">
                Reply
            </div>
          </div>
        </div>
      </div>

      <div className={!isReplying ? "hidden" : ""}>
        <ReplyComponent user={props.currentUser}/>
      </div>

      {getReplies()}      
    </div>
  );
}

type ReplyProps = {user: User}
function ReplyComponent(props:ReplyProps) {
  return (
    <div className="flex bg-white mt-3 rounded-lg p-3 container ">
      <ProfilePicture user={props.user} />
      <div className="pl-5 container">
       <textarea className="container h-28 border pl-3 rounded-md border-black" /> 
      </div>
      <button className="ml-3 h-12 p-2 rounded-lg bg-purple-300">Reply</button>
    </div>
  )}