import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Earth = () => {
  return (
    <div className="bg-black text-white">
      <div
        className="h-screen"
        style={{
          backgroundImage: `url('../../public/earth.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-16 font-blackOp mb-10">
          About Earth
        </h1>

        {/* Wrapper for responsive player with w-2/4 and 16:9 aspect ratio */}
        <div
          className="player-wrapper w-2/4 mx-auto mb-6"
          style={{
            position: "relative",
            paddingTop: "28.25%" /* 16:9 Aspect Ratio */,
          }}
        >
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=Oc824YaPMMI&ab_channel=RsaCosmos"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>

        {/* Add the headline below the video */}
        <div className="text-center mt-4">
          <p className="text-2xl font-semibold">Watch mission of Masud</p>
        </div>
      </div>

      <div className="mt-16 relative">
        <h2 className="text-3xl font-bold text-left pl-[480px] font-blackOp text-white">
          Gravity
        </h2>

        {/* Boy Jumping Animation */}
        <div className="flex justify-center items-center h-screen bg-black text-white relative">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -300, 0] }} // Boy jumps up to -300px and comes back
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} // Repeats the animation infinitely
            className="w-36" // Adjust size of the boy
          >
            <img src="../../public/boy-jump.png" alt="Boy Jumping" />
          </motion.div>

          {/* Gravity Value Positioned Right Below the Jumping Boy */}
          <div className="absolute top-[75%] text-center">
            <h2 className="text-2xl font-blackOp">
              9.81{" "}
              <span className="text-lg">
                m/s<sup>2</sup>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-left pl-[480px] font-blackOp text-white">
          Ratio
        </h2>
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
          <div>
            <img src="../../public/earth ratio.png" alt="" />
          </div>
          <div className="mt-10">
            <img src="../../public/three.png" alt="" />
          </div>

          {/* Title */}
          <h1 className="mt-10 text-4xl font-medium">
            Earth's Surface Composition
          </h1>
        </div>
      </div>
      <div className="">
        <h2 className="text-3xl font-bold text-left pl-[480px] mt-32 font-blackOp text-white">Weight</h2>
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <img  src="../../public/weight.png" alt="" />
        <h2 className="mt-10 text-4xl font-medium"> 5.97 x 10<sup>24</sup> kg</h2>
        </div>
      </div>
      <div className="flex justify-between p-10 mt-10">
       <img src="../../public/Vector.png" alt="" />
       <Link to="/earthdescription"><img src="../../public/Vector (1).png" alt="" /></Link>
      </div>
    </div>
  );
};

export default Earth;
