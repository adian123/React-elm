import {createStore,combineReducers} from "redux"
const defaultStore={
  Indexlist:[],
  salelist:[],
  shopcarlist:[],
  total:0,
  sum:0
}
const IndexReducer=(state=defaultStore,action)=>{
   const {type,payload}=action
   switch(type){
      case "UPDATE":
      return {...state,Indexlist:[...payload]}
      default : 
      return state
   }
}
const SaleReducer=(state=defaultStore,action)=>{
   const {type,payload}=action
   switch(type){
      case "UPDATE":
      return {...state,salelist:[...payload]}
      default : 
      return state
   }
}
const ShopcarReducer=(state=defaultStore,action)=>{
   const {type,payload}=action
   switch(type){
      case "UPDATES":
      return {...state,shopcarlist:[...payload]}
      case "PLUS" :
      return {...state,shopcarlist:[...payload]}
      case "MINUS" :
      return {...state,shopcarlist:[...payload]}
      case "TOTAL" :
      return {...state,total:payload}
      case "SUM" :
      return {...state,sum:payload}
      case "CHECKED" :
      return {...state,shopcarlist:[...payload]}
      default : 
      return state
   }
}
const Reducers=combineReducers({
  IndexReducer,
  SaleReducer,
  ShopcarReducer
})

export default createStore(Reducers)