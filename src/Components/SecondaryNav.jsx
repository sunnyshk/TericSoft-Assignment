import React from "react";
import { Link } from "react-router-dom";
const SecondaryNav = ({ data }) => {
  return (
    <div>
      <Link to={`/${data.category}`} style={{textDecoration:"none"}}>
     <p style={{color:"white", cursor:"pointer",borderBottom:"1px solid white"}}>{data.sec_nav}</p>
      </Link>
    </div>
  );
};

export default SecondaryNav;
