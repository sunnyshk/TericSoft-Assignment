import React, { useEffect } from "react";
import "../Styles/SingleCard.css"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setData } from "../redux/actions/dataActions";
import SingleCard from "./SingleCard";
import SecondaryNav from "./SecondaryNav";
const Extream = () => {
  const data = useSelector((state) => state.getData.data);
  var myData;
  const dispatch = useDispatch();
  const featData = async () => {
    try {
      const res = await fetch("https://teriapi.herokuapp.com/extream");
      const data = await res.json();

    
      dispatch(setData(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    featData();
  }, []);
  console.log(data);
  return (
    <div className="container">
      <div className="sec-nav">
        {data.map((e) => {
          return <SecondaryNav data={e} />;
        })}
      </div>
    <h2>Highlights(Extream)</h2>
    <div className="main-div">
      {data.map((e) => {
        return <SingleCard data={e} />;
      })}
    </div>
  </div>
  );
};

export default Extream;
