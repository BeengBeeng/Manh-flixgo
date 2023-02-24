import React, { useEffect, useState } from "react";
import Newitem from "../../components/newitem/Newitem";
import Olditem from "../../components/olditem/Olditem";
import "./HomePage.scss";
import axios from "axios";
const HomePage = () => {
  const [allFilmData, setAllFilmData] = useState([]);
  const [newFillData, setnewFilmData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/listmovie").then((data) => {
      setAllFilmData(data.data);
    });
  }, []);

  return (
    <div className="home-page">
      <div className="home">
        <div className="home-1">
          <h1>NEW ITEMS OF THIS SEASON</h1>
        </div>
        <div className="home-2">
          {allFilmData.length === 0 ? (
            <>loading...</>
          ) : (
            allFilmData.map((e) => {
              return <Newitem data={e} />;
            })
          )}
        </div>
      </div>
      <div className="old-item">
        <div className="old-item-1">
          <div className="old-item-1-1">
            <h1>New items</h1>
          </div>
          <div className="old-item-1-2">
            <p>NEW RELEASES</p>
            <p>MOVIES</p>
            <p>TV SERIES</p>
            <p>CARTOONS</p>
          </div>
        </div>
        <div className="old-item-2">
          <div className="old-item-2-1">
            {allFilmData.length === 0 ? (
              <>loading...</>
            ) : (
              allFilmData.map((e) => {
                return <Olditem data={e} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
