import React from 'react'
const olyData = [
  {
    image:"https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202108/AP21220429122429_1200x768.jpeg?sNMAwgAzkpZKJJ0bfcQPQsdV5Cd3rxCn&size=770:433"
  },
  {
    image:"https://static.toiimg.com/photo/msid-85168763,resizemode-4,width-400/85168763.jpg?pl=107035"
  },
  {
    image:"https://assets.khelnow.com/news/uploads/2021/08/medalist.jpg"
  }
]
const Olympics = () => {
  return (
    <div  style={{display:"flex", flexDirection:"column",margin:"auto", width:"700px"}}>
      {
        olyData.map((e)=>{
          return(
            <img src={e.image} alt="" style={{width:"500px",margin:"auto"}} />
          )
        })
      }
    </div>
  )
}

export default Olympics