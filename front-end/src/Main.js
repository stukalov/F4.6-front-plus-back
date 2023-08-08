import {Outlet} from "react-router-dom";
import Categories from "./Categories";

import Top from "./Top";
import css from "./Main.module.css"

const Main = () => {
    return (
        <>
            <Top/>
            <main className={css.main}>
                <aside className={css.side}>
                    <Categories/>
                </aside>
                <div className={css.content}>
                    <Outlet/>
                </div>
            </main>
        </>
    )
}

export default Main;