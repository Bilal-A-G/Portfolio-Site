import React from "react";

const CodeText = ({code, text, colour, size, spacing}) => {
    return(
        <span className={`flex w-full ${spacing} items-center`}>
            <p className={`text-minor ${size} select-none`}> {code} </p>
            <p className={`text-${colour} ${size} select-none`}> {text} </p>
        </span>
    )
}

export default CodeText