import React from 'react'
const golfData = [
  {
    image:"https://images.unsplash.com/photo-1611374243147-44a702c2d44c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdvbGZ8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
    image:"https://monmouthhealthandwellness.com/wp-content/uploads/2021/04/golfing.jpg"
  },
  {
    image:"https://www.entertales.com/wp-content/uploads/Golfer-Golf.jpg"
  }
]
const GolfNav = () => {
  return (
    <div  style={{display:"flex", flexDirection:"column",margin:"auto", width:"700px"}}>
      {
        golfData.map((e)=>{
          return(
            <img src={e.image} alt="" style={{width:"500px",margin:"auto"}} />
          )
        })
      }
    </div>
  )
}

export default GolfNav