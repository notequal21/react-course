import s from "./ChatNewMsg.module.scss";
import Ico_arrowDown from "./Ico_arrow-down";
import React from "react";


const ChatNewMsg = () => {
    return (
        <div className={`${s.chat__msg}`}>
            <textarea className={`${s.chat__msgInput}`}/>
            <button className={`${s.chat__msgBtn}`}><Ico_arrowDown/></button>
        </div>
    )
}

export default ChatNewMsg;