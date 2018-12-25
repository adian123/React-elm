import React from "react"

import axios from "axios"
import {NavLink} from "react-router-dom"
import RouterView from "router"
class Deatil extends React.Component{
  constructor(){
    super()
    this.state={
       deatilList:[]
    }
  }
  componentDidMount(){
    axios.get('/shoplist').then((res)=>{
      const paramId=this.props.match.params.id
      res.data.collection.filter((item,index)=>{
         if(item.id===paramId){
          this.setState({
            deatilList:item
         })
         }      
      })
    })
  }
  render(){
    const {match,routes}=this.props
    const {deatilList}=this.state
    return <div className='deatil-list'>
       <div className='deatil-header'>
         <dl>
           <dt>
             <img src={"https://elm.cangdu.org/img/"+deatilList.image_path} alt=''/>
            </dt>
            <dd>
              <h3>{deatilList.name}</h3>
              <p>商家配送/分钟送达/配送费￥5元</p>
              <p>{deatilList.promotion_info}</p>
            </dd>
          </dl>
       </div>
       <div className='deatil-nav'>
         <ul>
          <NavLink to={{
            pathname:`/deatil/${match.params.id}/dity`,
            state:{
              id:match.params.id
            }
          }}>商品</NavLink>
          <NavLink to={{
            pathname:`/deatil/${match.params.id}/eva`
          }}>评价</NavLink>
         </ul>
       </div>
       <RouterView routes={routes}/>
    </div>
  }
}

export default Deatil ;