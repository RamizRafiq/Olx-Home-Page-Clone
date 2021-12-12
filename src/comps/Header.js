import React, { useEffect } from "react"
import {
   Link
} from 'react-router-dom'

import logo from '../ui/Logo-olx.png'

import { AiOutlinePlus,AiOutlineSearch } from "react-icons/ai";
import {BsChevronDown,BsSearch,BsBell} from 'react-icons/bs'
import { useSelector } from "react-redux";


function Header(){
    const userData=useSelector(state=> state.current_user)
    const {User_name}=userData;

    useEffect(()=>{

        console.log("Header",userData)
    })

    const nav=[
        {ID:1,label:"Mobile Phones"},
        {ID:2,label:"Cars"},
        {ID:3,label:"Motorcycles"},
        {ID:4,label:"Houses"},
        {ID:5,label:"Tv-Audio-Video"},
        {ID:6,label:"Tablets"},
        {ID:7,label:"Land & Plots"}
    ]
return(
    <React.Fragment>
<div className="Header fixed flex alc">
  
    <div className='logo'>
<img src={logo} />
</div>

<div className='location rel flex alc'>
< BsSearch className="ico"/>
<input className="label s15 font"  type="text" placeholder="Your Location"/>
<button className="arrow "><BsChevronDown/></button>
</div>

<div className="search flex alc">
    <input className="query font s15" type="text" placeholder="Find Cars, Mobile Phones and more"/>
    <button className="go "><AiOutlineSearch className="s24"/></button>

</div>

<div className="actions  flex alc">
    {!User_name ?(
<Link to="/login">Login</Link>
)
    
:(
  <>
<BsBell/>
{User_name}
  </>  
)
} 

    <Link to="/post" className="s15 fontb  sell noul"><AiOutlinePlus className="ico"/> SELL</Link>
</div>

</div>

<div className="hnav fixed flex alc">
<button className="view-cates flex alc "><h2 className=" s13 fontb color">All categories<BsChevronDown className="arrow s24 "/></h2>
</button>

{nav.map(item=>{
return(
    <>
    <Link to={item.label+item.ID} className="noul color font s13">{item.label}</Link>
 
 </>
)


}) }

</div>

<div className="hclr"/>

</React.Fragment>


);
}

export default Header;