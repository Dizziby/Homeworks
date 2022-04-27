import React from 'react'
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css"
import {PATH} from "./Pages";

function Header() {

    return (
        <div className={styles.header}>
            {/*add NavLinks*/}
            <div className={styles.navLinks}>
                <NavLink className={({isActive}) =>
                    isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`}
                         to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
                <NavLink className={({isActive}) =>
                    isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`}
                         to={PATH.JUNIOR}>junior</NavLink>
                <NavLink className={({isActive}) =>
                    isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`}
                         to={PATH.JUNIOR_PLUS}>junior-plus</NavLink>
                <div className={styles.square}></div>
            </div>

        </div>
    )
}

export default Header
