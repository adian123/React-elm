import React from "react"
import axios from "axios"
import Carousel from "comp/carousel"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
class Index extends React.Component{
  constructor(props){
    super(props)
    this.state={
      shoplist:[]
    }
  }
  componentDidMount(){
    const {update}=this.props
    axios.get('/shoplist').then((res)=>{
        update(res.data.collection)
    })
  }
  render(){
    const {Indexlist}=this.props
    console.log(this.props)
    return <div className="index">
        <Carousel/>
        <div className="shop-list">
          <p className="shop-title">附近商家</p>
         {
           Indexlist.map((item,index)=>{
             return <Link to={{
               pathname:`/deatil/${item.id}`
             }} key={index}>
              <dl>
                <dt>
                  <img src={"https://elm.cangdu.org/img/"+item.image_path} alt=""/>
                </dt>
                <dd>
                  <p>{item.name}</p>
                  <p>
                    <span>{item.rating}</span>
                    <span>{item.recent_order_num}</span>
                  </p>
                  <p>
                    <span>{item.float_minimum_order_amount}</span>
                    <span>{item.distance}</span>
                    <span>{item.order_lead_time}</span>           
                  </p>
                </dd>
              </dl>    
             </Link>
           })
         }
        </div>     
    </div>
  }
}
const mapStateToProps=(state)=>{
   return state.IndexReducer
}
const mapDispatchToProps=(dispatch)=>{
  return {
     update(payload){
       dispatch({
         type:"UPDATE",
         payload
       })
     }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);