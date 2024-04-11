
import * as React from 'react';
import './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";

type Props = {

};
export const Profile = (props: Props) => {
    return (
        <div className='content'>
            <div>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>

            <MyPosts/>
        </div>
    );
};