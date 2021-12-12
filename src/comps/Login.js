import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import firebase from "../config/firebase";

function Login(){
    let history=useHistory()
    const dispatch=useDispatch();
    const userData=useSelector(state=>state.current_user)
    
    // console.log()

    const signIn=()=>{
                
            var provider = new firebase.auth.FacebookAuthProvider();
                firebase.auth().signInWithPopup(provider)
                   .then(function(result) {
                       var user = result.user;
                    //    console.log(user)
            
                       let data={
                           User_name:user.displayName,
                           email:user.email,
                           profile:user.photoURL,
                           uid:user.uid
                       }
            
                    //    firebase.database().ref('/').child(`users/${user.uid}`).set(data)
            
                        dispatch({type:"SET USER", payload:data})
                        history.push('/')
                       
                     })
            
                     .catch(function(error) {
                       var errorMessage = error.message;
                       console.log(errorMessage)
                         })
            }
                
        
return(
    <>

<button onClick={()=>signIn()}>Login</button>
    </>
)


}
export default Login;