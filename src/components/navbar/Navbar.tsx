
import * as React from 'react';
import classes from './Navbar.module.css';

type Props = {

};
export const Navbar = (props: Props) => {
    return (
            <nav className='nav'>
                <div className='item'>
                    <a>Profile</a>
                </div>
                <div className='item'>
                    <a>Message</a>
                </div>
                <div className='item'>
                    <a>News</a>
                </div>
                <div className='item'>
                    <a>Music</a>
                </div>
                <div className='item'>
                    <a>Settings</a>
                </div>
            </nav>
    );
};