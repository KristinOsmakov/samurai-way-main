import styles from './Dialogs.module.css'
type Props = {

};
export const Dialogs = (props: Props) => {
    return (
        <div className={styles.dialogWrapper}>
            <div>
                <p>DialogsName</p>
                <ul>
                    map.
                    <li>DMITRY</li>
                    <li>SERG</li>
                    <li>ANNA</li>
                    <li>IVAN</li>
                    <li>IRINA</li>
                </ul>
            </div>
            <div>
                <p>Message</p>
                <ul>
                    <li>Hello!</li>
                    <li>What you name?</li>
                    <li>I'm great!</li>
                    <li>How are you?</li>
                    <li>Yes, It's okey!</li>
                </ul>
            </div>

        </div>
    );
};