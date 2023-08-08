import React, {useEffect, useState} from "react";
import axios from "axios";

import css from "./Categories.module.css"
import {NavLink} from "react-router-dom";

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/categories').then(response => {
            setCategories(response.data)
        }).catch(() => {
            setCategories([])
        })
    }, [])


    return (
        <div className={css.categories}>
            {
                categories.map(item =>
                    <div key={item.id} className={css.item}>
                        <NavLink to={`/category/${item.id}`} className={({isActive}) => isActive ? css.active : css.link}>
                            {item.name}
                        </NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default Categories
