import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.sciencealert.com/images/2022-03/processed/solar-orbiter-image-of-sun-with-earth-to-scale_1024.jpg' />

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>

}

export default Header;