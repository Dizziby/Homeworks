import React from "react";
import styles from "./Message.module.css"

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.item}>
            <div>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={styles.injection}></div>
            <div className={styles.message_info}>
                <div className={styles.info}>
                    <div className={styles.name}>
                        <p>{props.name}</p>
                    </div>
                    <div className={styles.message}>
                        <p>{props.message}</p>
                    </div>
                </div>
                <div className={styles.time}>
                    <p>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message;
