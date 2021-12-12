import React from 'react'
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./post.css";

export default function Post(){
    let userData=useSelector(state=>state.current_user)
    let {User_name}=userData
let history=useHistory()
    return(
        <>
        {!User_name? (
            history.push('/login')
        )
:console.log(userData)
        }
        <div className="postNav">
              {/* <div className="m"> */}
     <div className="befposticon" onClick={()=>history.goBack()}>
       <AiOutlineArrowLeft className="postIcon"/>
         </div>   
    <div>
       <h5 className="postHead">Post your Ad</h5>
        </div>
              {/* </div> */}


        </div>
        </>
    )
}