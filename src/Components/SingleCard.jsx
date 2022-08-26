import React from "react";
import "../Styles/SingleCard.css";

const SingleCard = ({ data }) => {
  //   const testData = [
  //     {
  //       id: 1,
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaRM7Ve5-567HAo7jDdkDug6e-e__cdIGBg&usqp=CAU",
  //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ab asperiores distinctio accusamus molestias ducimus iste quae eos necessitatibus numquam!",
  //     },
  //   ];
  return (
    <>
      <div className="single-div">
        <img src={data.image} alt="" />
        <h3
          style={{ color: "white" }}
        >{`Day ${data.id} for ${data.category}`}</h3>
        <p style={{ color: "white" }}>{data.desc}</p>
      </div>
    </>
  );
};

export default SingleCard;
