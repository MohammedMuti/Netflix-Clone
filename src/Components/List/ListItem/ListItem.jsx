import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import React from "react";
import "./ListItem.css";

const ListItem = () => {
  return (
    <>
      <div className="list-item">
        <img src={require("../../../Images/User/slide-5.jpg")} alt="" />
        <video
          src={require("../../../video/videoplayback.mp4")}
          autoPlay
          muted
          loop
        />
        <div className="item-info">
          <div className="icons">
            <PlayArrow />
            <Add />
            <ThumbUpOutlined />
            <ThumbDownOutlined />
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            laboriosam consequuntur quaerat itaque corrupti!
          </div>
          <div className="genre">Action</div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
