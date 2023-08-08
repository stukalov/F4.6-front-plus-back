import React from "react";
import axios from "axios";
import {NavLink, useLoaderData} from "react-router-dom";

import css from "./Category.module.css"

export function categoryLoader({params}) {
    const {categoryId} = params
    if (categoryId === undefined) {
        return axios(`http://localhost:8000/dishes`)
    }
    return axios(`http://localhost:8000/dishes?category=${categoryId}`)
}

const Category = () => {
    const dishes = useLoaderData()

    return (
        <section className={css.list}>
            <ul>
                {
                    dishes.data.map(item =>
                        <li key={item.id} className={css.item}>
                            <NavLink to={`/dish/${item.id}`}>
                                {item.name}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

export default Category
