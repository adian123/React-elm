import React from "react"
import axios from "axios"
class Carousel extends React.Component{
  constructor(props){
    super(props)
    this.state={
      carouselList:[]
    }
  }
  componentDidMount(){
    axios.get('/carouselList').then((res)=>{
        console.log(res.data)
        this.setState({
          carouselList:res.data.collection
        })
    })
  }
  render(){
    const {carouselList}=this.state
    return <div className="index">
        <div className='carousel-list'>    
             {
               carouselList.map((item,index)=>{
                return <dl key={index}>
                  <dt>
                      <img src={"https://fuss10.elemecdn.com"+item.image_url} alt=''/>
                  </dt>
                  <dd>
                    {item.title}
                  </dd>
                </dl>
              })
             }       
        </div> 
    </div>
  }
}
export default Carousel;

 