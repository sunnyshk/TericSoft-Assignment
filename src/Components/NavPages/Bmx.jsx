import React from 'react'
const bmxData = [
  {
    image:"https://images.unsplash.com/photo-1576282577948-50480284e7b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym14fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  },
  {
    image:"https://img.freepik.com/premium-vector/silhouette-bmx-rider_248555-734.jpg?w=2000"
  },
  {
    image:"https://img.olympicchannel.com/images/image/private/t_16-9_640/f_auto/v1538355600/primary/fkuq4n6grbkts8c3xw6d"
  }
]
const Bmx = () => {
  return (
    <div  style={{display:"flex", flexDirection:"column",margin:"auto", width:"700px"}}>
      {
        bmxData.map((e)=>{
          return(
            <img src={e.image} alt="" style={{width:"500px",margin:"auto"}} />
          )
        })
      }
    </div>
  )
}

export default Bmx