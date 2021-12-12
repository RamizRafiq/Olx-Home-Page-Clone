import React from 'react'
import Switch from 'react-bootstrap/esm/Switch';
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";
import HomePage from "../comps/Home"
import ProductScreen from '../comps/ProductScreen';
// import Blank from '../comps/Blank'
// import Chat from '../containers/Chat'



class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={HomePage}/>
         <Route exact path="/car/:id" component={ProductScreen} />
         

{/* <Route exact path="/car/:id" render={ props =>  <ProductScreen {...props}/>} /> */}
</Switch>
      </Router>
    )
  }



}

export default AppRouter;