import React from "react";
import "./Olditem.scss";
const Olditem = (props) => {
  let { data } = props;
  console.log(data);
  return (
    <div className="item">
      <div className="item-1">
        <img src={data.image} alt="" />
      </div>
      <div className="item-2">
        <h3>{data.name}</h3>
        <span className="item-2-span">{data.category}</span>
        <div className="item-2-1">
          <span>
            <i class="fa-solid fa-star"></i> {data.rating}
          </span>
          <span className="item-2-1-span">HD</span>
          <span className="item-2-1-span">16+</span>
        </div>
        <div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to
          </p>
        </div>
      </div>
    </div>
  );
};

export default Olditem;
