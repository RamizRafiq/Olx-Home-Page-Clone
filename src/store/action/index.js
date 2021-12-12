
import firebase from '../../config/firebase'
import {useHistory} from 'react-router-dom'

const get_users=()=>{

    
return(dispatch)=>{
    let users=[];
firebase.database().ref('/').child("users").on("child_added",(data)=>{
    // console.log(data.val())
    users.push(data.val())
    
    dispatch({type:"SETFIREBASEUSERS",payload: users})
})


}

}

    
    const Facebook_login = () => {
    let history=useHistory()
return (dispatch)=>{
    
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
       .then(function(result) {
           var user = result.user;
        //    console.log(user)

           let data={
               name:user.displayName,
               email:user.email,
               profile:user.photoURL,
               uid:user.uid
           }

           firebase.database().ref('/').child(`users/${user.uid}`).set(data)

            dispatch({type:"SET USER", payload:data})
            history.push("/")
           
         })

         .catch(function(error) {
           var errorMessage = error.message;
           console.log(errorMessage)
             })
}
    }

export {
    get_users,
    Facebook_login
}

