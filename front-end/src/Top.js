import React from "react"
import {NavLink} from "react-router-dom";

import css from "./Top.module.css"

const Top = () => {
    return (
        <header className={css.top}>
            <div className={css.logo}>
                <NavLink to={"/"}>
                    ЕДА
                </NavLink>
            </div>
            <div className={css.header}>
                Портал о вкусной и здоровой пищи
            </div>
        </header>
    )
}

export default Top;