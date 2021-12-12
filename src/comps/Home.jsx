import React,{useEffect,useState} from "react"
import AddItem from "./Listitem"
import Header from './Header'


import { connect } from "react-redux"
import { get_users } from '../store/action'

function HomePage(props){
const [data,getData]=useState()
    useEffect(()=>{
        props.get_users()
        // console.log(props.get_users())
        
            },[get_users])
        

let products=props.users

return(
    <>
<Header/>

<div className="Home-page">
<div className="ad-list flex">

{
    // products.map((val,i)=>{
        // console.log(val,i)
       <AddItem placeholder={true} id='14'/>
    // })
}

</div>

<button className="anim font c333  load-more">Load more</button>
</div>



</>
);
}
const mapStateToProps=(state)=>({
    
    users:state.users
    
})

const mapDispatchToProp=(dispatch)=>({

get_users:()=>dispatch(get_users())

})


export default connect(mapStateToProps,mapDispatchToProp)(HomePage);