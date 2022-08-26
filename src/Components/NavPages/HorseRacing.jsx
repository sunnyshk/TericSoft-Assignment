import React from 'react'
const horseData = [
  {
    image:"https://www.topendsports.com/sport/equestrian/images/equestrian-jump-pexels.jpg"
  },
  {
    image:"http://www.wisdateline.org/wp-content/uploads/2017/04/17-08-2016-Equestrian-Jumping-Jumping-Team-08.jpg"
  },
  {
    image:"https://horseracingsense.com/wp-content/uploads/2021/07/horse.sports.showjumping.jpg"
  }
]
const HorseRacing = () => {
  return (
    <div  style={{display:"flex", flexDirection:"column",margin:"auto", width:"700px"}}>
      {
        horseData.map((e)=>{
          return(
            <img src={e.image} alt="" style={{width:"500px",margin:"auto"}} />
          )
        })
      }
    </div>
  )
}

export default HorseRacing