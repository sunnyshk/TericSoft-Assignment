import React from 'react'
const hikeData = [
  {
    image:"https://media.istockphoto.com/photos/group-of-hikers-walks-in-mountains-at-sunset-picture-id1189969126?k=20&m=1189969126&s=612x612&w=0&h=6JPjSS9UORT-DAnIoa0mopA9lwFxX8tX8HQrJdb_i70="
  },
  {
    image:"https://www.sportmatt.at/wp-content/uploads/2019/09/Richtige_Wanderausruestung_Sport_Matt_Pettneu_Arlberg.jpg"
  },
  {
    image:"https://www.polar.com/blog/wp-content/uploads/2020/02/Outdoor-sports-small.jpg"
  }
]
const Hiking = () => {
  return (
    <div  style={{display:"flex", flexDirection:"column",margin:"auto", width:"700px"}}>
      {
        hikeData.map((e)=>{
          return(
            <img src={e.image} alt="" style={{width:"500px",margin:"auto"}} />
          )
        })
      }
    </div>
  )
}

export default Hiking