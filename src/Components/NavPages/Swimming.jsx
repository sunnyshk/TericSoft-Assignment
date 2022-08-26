import React from 'react'
const swimData = [
  {
    image:"https://assets.gqindia.com/photos/6272badce8250f1b776a6a9b/master/pass/Banefits%20of%20swimming.jpg"
  },
  {
    image:"https://www.sportsevents.us/wp-content/uploads/2018/09/Improve-Swimming-Ways-to-Increase-Swimming-Speed-scaled.jpg"
  },
  {
    image:"https://previews.123rf.com/images/lightpoet/lightpoet1206/lightpoet120600397/14197094-young-man-swimming-the-front-crawl-in-a-pool.jpg"
  }
]
const Swimming = () => {
  return (
    <div  style={{display:"flex", flexDirection:"column",margin:"auto", width:"700px"}}>
      {
        swimData.map((e)=>{
          return(
            <img src={e.image} alt="" style={{width:"500px",margin:"auto"}} />
          )
        })
      }
    </div>
  )
}

export default Swimming