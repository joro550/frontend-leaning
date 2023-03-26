type ScoreComponentProps = {
    onMinusClick: () => void
    onPlusClick: () => void
    className: string
    score : number
}

export function ScoreComponent(props : ScoreComponentProps) {
    var classToAdd = props.className === undefined 
        ? ""
        : props.className;

    return (
        <div>
            <div className={classToAdd + " w-20 bg-gray-100 md:p-0 p-1 justify-between rounded-lg"}>
                <div
                    className="pl-2 md:pt-2 md:pl-0 text-gray-300 hover:text-blue-200"
                    onClick={() => props.onMinusClick}
                >
                    -
                </div>
                <div className="text-blue-500">{props.score}</div>
                <div
                    className="pr-2 md:pb-2 md:pr-0 text-gray-300 hover:text-blue-200"
                    onClick={() => props.onPlusClick}
                >
                    +
                </div>
            </div>
        </div>
    );
}