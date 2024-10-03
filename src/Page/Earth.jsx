import ReactPlayer from 'react-player';

const Earth = () => {
    return (
        <div className="bg-black text-white">
            <div className="h-screen" style={{ backgroundImage: `url('../../public/earth.png')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-bold mt-16 font-blackOp mb-10">About Earth</h1>

                {/* Wrapper for responsive player with w-2/4 and 16:9 aspect ratio */}
                <div className="player-wrapper w-2/4 mx-auto mb-6" style={{ position: 'relative', paddingTop: '28.25%' /* 16:9 Aspect Ratio */ }}>
                    <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/watch?v=Oc824YaPMMI&ab_channel=RsaCosmos"
                        width="100%"
                        height="100%" 
                        style={{ position: 'absolute', top: 0, left: 0 }}
                    />
                </div>

                {/* Add the headline below the video */}
                <div className="text-center mt-4">
                    <p className="text-2xl font-semibold">Watch mission of Masud</p>
                </div>
            </div>
        </div>
    );
};

export default Earth;
