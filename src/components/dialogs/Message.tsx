// @flow
import * as React from 'react';
import styles from "./Dialogs.module.css";
import {message} from "antd";

type MessagePropsType = {
    message: string,

};
export const Message = ({message}: MessagePropsType) => {
    return (
        <div className={styles.message}>{message}</div>
    );
};