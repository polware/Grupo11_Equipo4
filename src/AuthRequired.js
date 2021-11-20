import React from "react"
import { Redirect } from "react-router-dom"

export default function AuthRequired(props){
    //const isAuthenticated = localStorage.getItem('isAuthenticated')
    const token = sessionStorage.getItem('token')
    if(token){
        return props.orComponent;
    } else {
        return <Redirect to="/"/>
    }
}
