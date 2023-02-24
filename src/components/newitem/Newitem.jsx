import React from "react";
import "./Newitem.scss";
import { Link } from "react-router-dom";

const Newitem = (props) => {
  let { data } = props;
  return (
    <div className="home-2-1">
      <Link to="/comment">
        <img src={data.image} alt="" />
      </Link>
      <div className="quote">
        <h3>{data.name}</h3>
        <span>{data.category}</span>
        <p>
          <i class="fa-solid fa-star"></i>
          {data.rating}
        </p>
      </div>
    </div>
  );
};

export default Newitem;
