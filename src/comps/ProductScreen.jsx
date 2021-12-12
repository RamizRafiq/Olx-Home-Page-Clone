import React, { useEffect, useState } from 'react'
import firebase from '../config/firebase'

function ProductScreen(props){

// let obj;
    console.log("product screen",props)
    alert("Hi")
    // let checkId=props.match.params.id;
    // firebase.database().ref("users").on("child_added",(data)=>{
// if(data.val().uid==checkId){
//     obj=data.val()
// }

//        console.log(obj)
//     })
    
    return(
        <>
        <h1>Product</h1>
        {/* <h2>{obj.name}</h2> */}
        {/* <img src={obj.profile} alt=""/> */}
        </>
    )
}

export default ProductScreen;