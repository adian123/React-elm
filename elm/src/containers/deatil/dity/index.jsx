import React from "react"
import {connect} from "react-redux"
import axios from "axios"
import Rightlist from "./right"
class Dity extends React.Component{
  constructor(){
    super()
    this.state={
    salelist:[],
    Id:0
    }
    this.changeTab=this.changeTab.bind(this)
  }
  componentDidMount(){
    const paramId=this.props.match.params.id
    const {update}=this.props
    axios.get(`https://elm.cangdu.org/shopping/v2/menu?restaurant_id=${paramId}`).then((result)=>{
      // this.setState({
      //   salelist:result.data
      // })
      update(result.data)
    })
  }
  changeTab(index){
    this.setState({
      Id:index
    })
  }
  render(){
    const {salelist}=this.props
    const {Id}=this.state
    return <div className="dity">
      <div className="dity-left">
        <ul>
          {
            salelist.length&&salelist.map((item,index)=>{
              const {id}=item
              return <li key={index} onClick={()=>{
                this.changeTab(id)
              }}>
                {item.name}
              </li>
            })
          }
        </ul>
      </div>
      <Rightlist salelists={salelist} dityId={Id}/>  
    </div>
  }
}
const mapStateToProps=(state)=>{
  return state.SaleReducer
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
export default connect(mapStateToProps,mapDispatchToProps)(Dity) ;