import React from 'react'
const gymData = [
  {
    image:"https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/suni-lee-072921-getty-ftr_onxc8mpsh9a91atlfqxo2u9dp.jpg?itok=2IVAZngP"
  },
  {
    image:"https://media.istockphoto.com/photos/female-gymnast-in-sports-hall-picture-id519265984?k=20&m=519265984&s=612x612&w=0&h=UfrYIUiuiIBW5qSE2ptFUmANSFgLf1ZS9942JUtZLZ0="
  },
  {
    image:"https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LDYXCRXQLQI6XANSTNYGDJMC3A.jpg"
  }
]
const Gymn = () => {
  return (
    <div style={{display:"flex", flexDirection:"column",margin:"auto", width:"700px"}}>
      {
        gymData.map((e)=>{
          return(
            <img src={e.image} alt="" style={{width:"500px",margin:"auto"}} />
          )
        })
      }
    </div>
  )
}

export default Gymn