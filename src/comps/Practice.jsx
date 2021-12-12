import React, { useState,useEffect } from 'react'
import firebase from '../config/firebase'
import {connect}  from 'react-redux'
import { get_users } from '../store/action'
import {Link} from 'react-router-dom'
// import { propTypes } from 'react-bootstrap/esm/Image'

function Practice(props){
    const [data,setData]=useState()


    // const getData=()=>{

    useEffect(()=>{
props.get_users()

    })

let products=props.users
    return(
        <>
            <ul>
           {
               products.map((val,i)=>{

                //    return <Link  to={`product/${props.id}`}><li key={i}>{val.name}</li>
// </Link>
               })
           }  
            </ul>
        </>
    )
}

export default  (Practice);