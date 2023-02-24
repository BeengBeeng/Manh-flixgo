import React from "react";
import "./Comments.scss";
import NavbarManh from "../../components/navbar/NavbarManh";


const Comments = () => {
  return (
    <div className="comment-page">      
      <div className="comment">
        <div className="comment-1">
          <h1>I Dream in Another Language</h1>
        </div>
        <div className="comment-2">
          <div className="comment-2-1">
            <div className="comment-2-1-1">
              <img
                src="http://flixgo.volkovdesign.com/main/img/covers/cover2.jpg"
                alt=""
              />
            </div>
            <div className="comment-2-1-2">
              <div className="explain">
                <span>
                  <i class="fa-solid fa-star"></i> 8.4
                </span>
                <span className="item-2-1-span">HD</span>
                <span className="item-2-1-span">16+</span>
              </div>
              <div className="explain-1">
                <p>Genre: Aticon, Triler</p>
                <p>Release year: 2017</p>
                <p>Running time: 120 min</p>
                <p>Country: USA</p>
              </div>
              <div className="explain-1">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of
                </p>
              </div>
            </div>
          </div>
          <div className="comment-2-2">
            <video controls>
              <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="discover">
        <div className="discover-1">
          <div className="discover-1-1">
            <h1>Discover</h1>
          </div>
          <div className="discover-1-2">
            <p>COMMENTS</p>
            <p>REVIEWS</p>
            <p>PHOTOS</p>
          </div>
        </div>
        <div className="discover-2">
          <div className="discover-2-1">
            <i class="fa-solid fa-user"></i>
            <span>John Doe</span>
          </div>
          <div className="discover-2-2">
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
        <div className="discover-3">
            <div className="discover-3-1">
                <input type="text" placeholder="Add Comment"/>
            </div>
            <div className="discover-3-2">
                <button>SEND</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
