import React from "react";
import axios from "axios";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css"

import {useLoaderData} from "react-router-dom";

export function swaggerLoader() {
    return axios(`http://localhost:8000/openapi?format=openapi-json`)
}


const Swagger = () => {
    const swagger = useLoaderData()

    console.log(swagger)

    return (
        <SwaggerUI spec={swagger.data}/>
    )
}

export default Swagger;