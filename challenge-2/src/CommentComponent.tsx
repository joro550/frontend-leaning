import { useState } from "react";
import { Reply, User, Comment } from "./loader/dataLoader";
import { ProfilePicture } from "./ProfilePicture";
import { Replies } from "./Replies";
import { ReplyButton } from "./ReplyButton";
import { ReplyComponent } from "./ReplyComponent";
import { ScoreComponent } from "./ScoreComponent";

type CommentProps = { comment: Comment | Reply, currentUser: User }

export function CommentComponent(props: CommentProps) {
    let [score, setScore] = useState(props.comment.score);
    let [isReplying, setIsReplying] = useState(false);

    const addToScore = (numberToAdd: number) => {
        setScore(score + numberToAdd);
    }

    const getReplies = () => {
        var comment = props.comment as Comment;
        if (comment === null)
            return <></>;

        return (
            <div className="md:ml-18 container">
                <Replies currentUser={props.currentUser} replies={comment.replies} />
            </div>
        );
    }

    var data = props.comment;

    return (
        <div className="mx-auto p-3 max-w-sm md:max-w-4xl">

            <div className="mx-auto rounded-md mt-3 bg-white container">
                <div className="flex">
                    <div className="hidden md:block">
                        <ScoreComponent
                            score={score}
                            onMinusClick={() => { addToScore(-1); }}
                            onPlusClick={() => { addToScore(1); }}
                            className="m-3 w-9 text-center"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between" >
                            <div className="flex container p-3">
                                <ProfilePicture user={data.user} />
                                <div className="pt-3 pl-3">{data.user.username}</div>
                                <div className="pt-3 pl-3 text-gray-500">{data.createdAt}</div>
                            </div>
                            <div className="hidden md:block m-5">
                                <ReplyButton
                                    onClick={() => { setIsReplying(true); } } 
                                    className={undefined} 
                                    />
                            </div>
                        </div>

                        <div className="pl-5 pr-5 pb-5 text-gray-500 text-left text-wrap">
                            {data.content}
                        </div>

                        <div className="md:hidden md:flex-none flex container pl-4 pr-5 justify-between pb-3">
                            <ScoreComponent
                                score={score}
                                onMinusClick={() => { addToScore(-1); }}
                                onPlusClick={() => { addToScore(1); }}
                                className="flex md:hidden"
                            />    
                            <ReplyButton className="md:hidden" onClick={() => { setIsReplying(true) }} />
                        </div>

                    </div>

                </div>
           </div>

            <div className={!isReplying ? "hidden" : ""}>
                <ReplyComponent user={props.currentUser} />
            </div>

            {getReplies()}
        </div>
    );
}
