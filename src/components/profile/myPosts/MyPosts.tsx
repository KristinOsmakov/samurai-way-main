
import * as React from 'react';
import './MyPosts.module.css';
import {MyPost} from "./post/MyPost";

type Props = {

};
export const MyPosts = (props: Props) => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div>
                    <MyPost message={"Hi, how are you?"} liked={8}/>
                    <MyPost message={"It's my first post"} liked={11}/>
                    <MyPost message={"It's my second post"} liked={16}/>
                </div>
            </div>

    );
};