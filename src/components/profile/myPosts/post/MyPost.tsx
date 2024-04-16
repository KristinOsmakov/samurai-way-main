
import * as React from 'react';
import styles from './MyPost.module.css'

type Props = {
    message: string
    liked: number
};
export const MyPost = ({message, liked}: Props) => {
    return (
        <div className={styles.item}>
            <img src='https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg'/>
            {message}
            <span>like</span> {liked}

        </div>
    );
};