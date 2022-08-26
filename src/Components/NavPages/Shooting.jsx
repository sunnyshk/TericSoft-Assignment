import React from 'react'
const shootData = [
  {
    image:"https://www.kreedon.com/wp-content/uploads/2021/08/shooting_w08.jpg"
  },
  {
    image:"https://upload.wikimedia.org/wikipedia/commons/9/90/Vincent_Hancock_at_2008_Summer_Olympics_men%27s_skeet_finals_2008-08-16.JPG"
  },
  {
    image:"https://ca-times.brightspotcdn.com/dims4/default/c8f52af/2147483647/strip/true/crop/2048x1152+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc6%2F3f%2F84fb1bc5487ba8c50a51f7be3439%2Ftucker1.png"
  }
]
const Shooting = () => {
  return (
    <div  style={{display:"flex", flexDirection:"column",margin:"auto", width:"700px"}}>
      {
        shootData.map((e)=>{
          return(
            <img src={e.image} alt="" style={{width:"500px",margin:"auto"}} />
          )
        })
      }
    </div>
  )
}

export default Shooting