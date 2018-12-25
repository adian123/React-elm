import React from "react"
import {connect} from "react-redux"
class Order extends React.Component{
  componentDidMount(){
    this.getShopcarlist()
  }
  getShopcarlist(){
    const {shopcarlist,computed}=this.props
    computed(shopcarlist)
  }
  render(){
    const {shopcarlist,plus,minus,total,sum,checked}=this.props
    return <div className="order">
      {
        shopcarlist.map((item,index)=>{
          return <dl key={index}>
          <input type="checkbox" checked={item.is_essential} onChange={()=>{
            checked(index,shopcarlist)
          }}/>
          <dt>
          <img src={"https://elm.cangdu.org/img/"+item.image_path} alt=""/>
          </dt>
          <dd>
            <p>{item.name}</p>
            <p>{item.server_utc}</p>
            <div className='diss'>
              <button className="minus" onClick={()=>{
                minus(index,shopcarlist)
              }}>
                 -
              </button>
              <span>
              {item.is_featured}
              </span>
              <button className="minus" onClick={()=>{
                  plus(index,shopcarlist)
              }}>
                 +
              </button>
            </div>
          </dd>
          </dl>
        })
      }
      <div className="price">
        <p>总数：{total}</p>
        <p>总价: {sum}</p>
      </div>
    </div>
  }
}
const mapStateToProps=(state)=>{
  return state.ShopcarReducer
}
const mapDispatchToProps=(dispatch)=>{
   return {
    computed(shopcarlist){
      let tal=0;
      let sums=0;
      shopcarlist.forEach((itm,ind)=>{
          tal+=itm.is_featured;
          sums+=itm.is_featured*itm.rating
      })
      dispatch({
      type:"TOTAL",
      payload:tal
      })
      dispatch({
        type:"SUM",
        payload:sums
      })
    },
     plus(key,shopcarlist){
        shopcarlist[key].is_featured++
        let tal=0;
        let sums=0;
        shopcarlist.forEach((itm,ind)=>{
            if(itm.is_essential){
              tal+=itm.is_featured;
              sums+=itm.is_featured*itm.rating
            }
        })
        dispatch({
        type:"TOTAL",
        payload:tal
        })
        dispatch({
          type:"SUM",
          payload:sums
        })
        dispatch({
          type:"PLUS",
          payload:shopcarlist
        })
     },
     minus(key,shopcarlist){
      if(shopcarlist[key].is_featured<1) return;
      shopcarlist[key].is_featured--;
      let tal=0;
      let sums=0;
      shopcarlist.forEach((item,index)=>{
         tal+=item.is_featured;
         sums+=item.is_featured*item.rating
      })
      dispatch({
        type:"TOTAL",
        payload:tal
      })
      dispatch({
        type:"SUM",
        payload:sums
      })
      dispatch({
        type:"MINUS",
        payload:shopcarlist
      })
     },
     checked(index,shopcarlist){
       console.log(shopcarlist)
       shopcarlist[index].is_essential=!shopcarlist[index].is_essential
       dispatch({
         type:"CHECKED",
         payload:shopcarlist
       })
     }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Order) ;