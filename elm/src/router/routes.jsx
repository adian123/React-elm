import Index from "view/index"
import Found from "view/found"
import Order from "view/order"
import Mine from "view/mine"
import Deatil from "view/deatil"
import Eva from "view/deatil/eva"
import Dity from "view/deatil/dity"
const routes=[{
  path:"/index",
  name:"主页",
  component:Index
},{
  path:"/found",
  name:"发现",
  component:Found
},{
  path:"/order",
  name:"订单",
  component:Order
},{
  path:"/mine",
  name:"我的",
  component:Mine
},{
  path:"/deatil/:id",
  name:"详情",
  component:Deatil,
  children:[{
    path:'/deatil/:id/dity',
    name:"商品",
    component:Dity
  },{
    path:'/deatil/:id/eva',
    name:"评价",
    component:Eva
  }]
}]
export default routes;