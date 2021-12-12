import React from 'react';
import './App.css';
import './comps/Prop.css'
// import AppRouter from './config/router'
import { BrowserRouter, Route,} from 'react-router-dom'
import Header from './comps/Header'
import  ProductScreen  from "./comps/ProductScreen";
import HomePage from './comps/Home'
import Post from './comps/Post' 
import Login from './comps/Login' 
// import {connect}  from 'react-redux'

import Practice  from "./comps/Practice.jsx";

class App extends React.Component {
    render(){
  return (
    <>

    <BrowserRouter>
{/* <Route exact path='/' component={Practice}/> */}

{/* <Header/> */}
<Route exact path="/login" component={Login}/>
<Route exact path="/post" component={Post}/>
<Route exact path="/" component={HomePage}/>
<Route path="/items/:category/itemName:/:id" exact component={ProductScreen}/>
    </BrowserRouter>
    </>
  );

    }
}

export default App;
