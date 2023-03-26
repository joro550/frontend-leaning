
type ReplyButton = {
    onClick : () => void
    className: string | undefined
}

export function ReplyButton(props : ReplyButton) {
    console.log(props.className);

    var classToAdd = props.className === undefined
        ? ""
        : props.className;

    return (
        <div className={classToAdd + " text-blue-500 flex"}>
            <div className="pt-2">
                <img
                    className="h-3 w-3"
                    alt="reply button"
                    src="/img/icons/icon-reply.svg" />
            </div>
            <div
                onClick={() => props.onClick }
                className="pl-1">
                Reply
            </div>
        </div>
    );
}