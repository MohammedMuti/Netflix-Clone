import { ArrowBackOutlined } from "@mui/icons-material";
import "./Watch.css";

const Watch = () => {
  return (
    <>
      <div className="watch">
        <div className="back-btn">
          <ArrowBackOutlined />
          Home
        </div>
        <video
          src={require("../../video/videoplayback.mp4")}
          autoPlay
          loop
          progress
          controls
        ></video>
      </div>
    </>
  );
};

export default Watch;
