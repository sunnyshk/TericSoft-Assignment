import React from 'react'
const seaData = [
  {
    image:"https://tourscanner.com/blog/wp-content/uploads/2017/10/Featured-image.jpg"
  },
  {
    image:"https://assets.traveltriangle.com/blog/wp-content/uploads/2015/06/Kite-Surfing-in-Thailand.jpg"
  },
  {
    image:"https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/12/og-for-Water-Sports-In-Germany.jpg"
  }
]
const Sea = () => {
  return (
    <div style={{display:"flex", flexDirection:"column",margin:"auto", width:"700px"}}>
      {
        seaData.map((e)=>{
          return(
            <img src={e.image} alt="" style={{width:"500px",margin:"auto"}} />
          )
        })
      }
    </div>
  )
}

export default Sea