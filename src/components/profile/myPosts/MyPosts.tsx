
import * as React from 'react';
import './MyPosts.module.css';
import {MyPost} from "./post/MyPost";
import style from "./MyPosts.module.css"

type Props = {

};
export const MyPosts = (props: Props) => {
    return (
            <div className={style.postsBlock}>
                <h3>
                    My posts
                </h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    <MyPost message={"Hi, how are you?"} liked={8}/>
                    <MyPost message={"It's my first post"} liked={11}/>
                    <MyPost message={"It's my second post"} liked={16}/>
                </div>
            </div>

    );
};