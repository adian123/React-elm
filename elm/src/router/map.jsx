import React from "react"
import {Route,Redirect} from "react-router-dom"

class RouterMap extends React.Component{
  render(){
    const {routes}=this.props
    const defaultRoute=<Route key={0} path='/' render={()=>{
        return <Redirect to="/index"></Redirect>
    }} exact></Route>
    return <div>
       {
         routes.map((item,index)=>{
           const {children:routes,component:Component}=item;
           return  <Route key={item.name} path={item.path} render={(api)=>{
             return <Component routes={routes} {...api}/>
           }}></Route>
         }).concat([defaultRoute])
       }
    </div>
  }
}
export default RouterMap;