import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./Featured.css";

const Featured = ({ type }) => {
  return (
    <>
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horor">Horor</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
        <img
          width="100%"
          src={require("../../Images/User/slide-5.jpg")}
          alt=""
        />
        <div className="info">
          <img src={require("../../Images/Logo/netFlix.png")} alt="" />
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            nulla, quam doloribus ex doloremque quos culpa illo unde atque
            mollitia. Aliquid, incidunt fugit quidem praesentium nobis omnis
            ducimus? Ut ex repellat tenetur fugiat, officiis magnam quasi, neque
            voluptatibus pro
          </span>
          <div className="buttons">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
