import styles from './Dialogs.module.css'

type Props = {};
export const Dialogs = (props: Props) => {
    return (
        // className={styles.dialogWrapper}
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    DMITRY
                </div>
                <div className={styles.dialog}>
                    SERG
                </div>
                <div className={styles.dialog}>
                    IVAN
                </div>
                <div className={styles.dialog}>
                    IRINA
                </div>
                <div className={styles.dialog}>
                    VICTOR
                </div>
                <div className={styles.dialog}>
                    ANNA
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}>Great!</div>
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