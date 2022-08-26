import React from 'react'
import "../Styles/Nav.css"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

const navData = [
  {
    image:"https://i.pinimg.com/550x/dc/7e/d8/dc7ed80a600c5f87c2f8973cae429ce2.jpg",
    name:"Featured",
    pRoute:"/"
  },
  {
    image:"https://t4.ftcdn.net/jpg/04/16/05/91/360_F_416059158_5JNzVQ13hlQl0rF5kTMNv05Cn0p4mSci.jpg",
    name:"Armoury",
    pRoute:"/armoury"
  },
  {
    image:"https://media.istockphoto.com/vectors/swimming-icon-vector-swimming-pool-on-white-background-water-swim-vector-id1081273150",
    name:"Aquatics",
    pRoute:"/aquatics"
  },
  {
    image:"https://i.pinimg.com/736x/e4/09/6f/e4096f0afce5bbb76ef00df733a2e951.jpg",
    name:"Cycling",
    pRoute:"/cycling"
  },
  {
    image:"https://media.istockphoto.com/vectors/mustang-horse-speeding-forward-black-and-white-vector-head-and-legs-vector-id1339475481?k=20&m=1339475481&s=612x612&w=0&h=RJAVb1Uv2LgiCJI_RVgxkhfZ8locdD8LJO5PuUobJZA=",
    name:"Equestrian",
    pRoute:"/equestrian"
  },
  {
    image:"https://img.freepik.com/premium-vector/xtreme-hiking-logo-design_540745-160.jpg",
    name:"Extream",
    pRoute:"/extream"
  },
  {
    image:"https://media.istockphoto.com/vectors/wings-and-a-golf-ball-vector-id1003199512?k=20&m=1003199512&s=612x612&w=0&h=61vQwA_4Wd413Hf5dHFHGjg9La9hiSAOWNZ8HYeokTQ=",
    name:"Golf",
    pRoute:"/golf"
  },
  {
    image:"https://st2.depositphotos.com/6541572/12132/v/380/depositphotos_121321822-stock-illustration-balance-bars-gymnastics-vector-illustration.jpg?forcejpeg=true",
    name:"Gymnastics",
    pRoute:"/gymnastics"
  },
  {
    image:"https://thumbs.dreamstime.com/b/man-canoe-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-133733908.jpg",
    name:"Lake & Sea",
    pRoute:"/lake_sea"
  }
]

const NavBar = () => {
  return (
    // <BrowserRouter>
    
    <div id='navDiv'>
        {
          navData.map((e)=>{
            return(
              
              <Link to={e.pRoute} style={{textDecoration:"none"}}> 
             <div className="singleCard">
              <img src={e.image} alt="" />
              <p>{e.name}</p>
             </div>
              </Link>
             
            )
          })
        }
    </div>
    // </BrowserRouter>
  )
}

export default NavBar