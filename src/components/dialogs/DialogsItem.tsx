// @flow
import * as React from 'react';
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string,
    id: number
};
export const DialogsItem = ({name, id}: DialogsItemPropsType) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={"/dialogs/" + id}>{name}</NavLink>
        </div>
    );
};