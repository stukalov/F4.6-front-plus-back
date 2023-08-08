import React from "react"
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './App.css';
import Main from "./Main"
import Swagger, {swaggerLoader} from "./Swagger";
import Category, { categoryLoader } from "./Category";
import Dish, { dishLoader } from "./Dish";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main/>,
            children: [
                {
                    index: true,
                    element: <Category />,
                    loader: categoryLoader,
                },
                {
                    path: "category/:categoryId",
                    element: <Category />,
                    loader: categoryLoader,
                },
                {
                    path: "dish/:dishId",
                    element: <Dish />,
                    loader: dishLoader,
                }

            ],
        },
        {
            path: "/swagger",
            element: <Swagger/>,
            loader: swaggerLoader,
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
