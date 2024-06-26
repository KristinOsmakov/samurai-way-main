import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsItem} from "./DialogsItem";
import {Message} from "./Message";

type Props = {};

export const Dialogs = (props: Props) => {
    return (
        // className={styles.dialogWrapper}
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogsItem name='DMITRY' id={1}/>
                <DialogsItem name='SERG' id={2}/>
                <DialogsItem name='IVAN' id={3}/>
                <DialogsItem name='IRINA' id={4}/>
                <DialogsItem name='VICTOR' id={5}/>
                <DialogsItem name='VICTOR' id={6}/>
            </div>
            <div className={styles.messages}>
                <Message message={"Hi"}/>
                <Message message={"How are you?"}/>
                <Message message={"Great!"}/>
                {/*<div className={styles.message}>Hi</div>*/}
                {/*<div className={styles.message}>How are you?</div>*/}
                {/*<div className={styles.message}>Great!</div>*/}
            </div>
        </div>


    );
};


// <div>
//     <p>DialogsName</p>
//     <ul>
//         map.
//         <li>DMITRY</li>
//         <li>SERG</li>
//         <li>ANNA</li>
//         <li>IVAN</li>
//         <li>IRINA</li>
//     </ul>
// </div>
// <div>
//     <p>Message</p>
//     <ul>
//         <li>Hello!</li>
//         <li>What you name?</li>
//         <li>I'm great!</li>
//         <li>How are you?</li>
//         <li>Yes, It's okey!</li>
//     </ul>
// </div>