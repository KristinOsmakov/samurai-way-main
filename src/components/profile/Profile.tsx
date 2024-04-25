
import * as React from 'react';
import './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./myPosts/profileInfo/ProfileInfo";

type Props = {

};
export const Profile = (props: Props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts/>
        </div>
    );
};