import React from "react"
import axios from "axios";
import {NavLink, useLoaderData} from "react-router-dom";

import css from "./Dish.module.css"

export function dishLoader({params}) {
    const {dishId} = params
    return axios(`http://localhost:8000/dish/${dishId}`)
}

const Dish = () => {
    const data = useLoaderData()
    const dish = data.data

    return (
        <article className={css.dish}>
            <h1 className={css.title}>
                {dish.name}
            </h1>
            <div className={css.body}>
                {dish.body}
            </div>
            <div className={css.category}>
                <span>Категория: </span>
                <NavLink to={`/category/${dish.category.id}`}>
                    {dish.category.name}
                </NavLink>
            </div>
        </article>
    )
}

export default Dish