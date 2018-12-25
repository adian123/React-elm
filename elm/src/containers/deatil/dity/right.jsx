import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
class Rightlist extends React.Component{
  constructor(){
    super()
    this.state={
    rightlist:{
      foods:[]
    },
    rightId:0
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      rightId:nextProps.dityId
    },()=>{
      this.getRigthlist()
    })
  }
  componentDidMount(){
    this.getRigthlist()
  }
  getRigthlist(){
    const paramId=this.state.rightId
    const {salelists}=this.props
    salelists.filter((item,index)=>{
        if(item.id===paramId){
          this.setState({
            rightlist:item
          })
        }
    })
  }
render(){
    const {rightlist} = this.state;
    const {shopcarlist,addlist,total}=this.props;
    return <div className="dity-right">
       <div className="right-header">
          <strong>{rightlist.name}</strong>
          <span>{rightlist.description}</span>
       </div>
       <div className="right-list">
         {
             rightlist.foods.length&&rightlist.foods.map((item,index)=>{
               return <dl key={index}>
                  <dt>
                    <img src={`https://elm.cangdu.org/img/${item.image_path}`} alt=""/>
                  </dt>
                  <dd>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.tips} 好评率 {item.satisfy_rate} %</p>
                    <p>￥{item.rating}元</p>
                    <div className="join" onClick={()=>{
                       addlist(item,shopcarlist)
                    }}>
                      加入购物车                   
                    </div>
                  </dd>
              </dl>
             })         
         }
         <div className="look">
           <Link to={{
             pathname:"/order"
           }}>
           <i className='iconfont icon-gouwuche'></i> 
           {total}      
           </Link>
         </div>
       </div>
    </div>
  }
}
const mapStateToProps=(state)=>{
  return state.ShopcarReducer
}
const mapDispatchToProps=(dispatch)=>{
  return{
    addlist(product,shopcarlist){
      let temp=shopcarlist.filter((item,index)=>{
          return product.item_id===item.item_id
      })
      if(temp.length){
        shopcarlist.forEach((itm,ind)=>{
            if(product.name===itm.name){
              itm.is_featured++;
            }
        })
      }
      else{
        shopcarlist.push({...product,is_featured:1})
      }
     
      dispatch({
        type:"UPDATES",
        payload:shopcarlist
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Rightlist) ;

