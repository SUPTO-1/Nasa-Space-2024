import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import chaticon from '../../public/playbutton.png';

export default function Banner() {
    return (
        <>
            <div className="h-screen" style={{ backgroundImage: `url('../../public/space.png')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="pt-80">
                    <h1 className="text-4xl font-bold ml-10 w-80 font-blackOp">Galaxies Beyond Endless Space Adventure</h1>
                    <p className="ml-10 mt-7 w-4/12 font-kurale">Space is a vast, endless area beyond Earth, filled with planets, stars, and galaxies, where extreme temperatures and gravity shape everything.</p>
                    <Link to='/explorespace'><button className="btn ml-10 mt-5 text-lg items-center text-[#A90000]" style={{ background: "linear-gradient(90deg, #FFEE9B, #FFCC7C, #FDC273, #E4B370, #C7A871, #B29F6A)" }}>Explore Space <MdArrowOutward className="text-2xl" /></button></Link>
                </div>
                <div className="relative">
                    <Link>
                        <img src={chaticon} alt="" className="w-20 absolute right-28 top-10" />
                    </Link>
                </div>
            </div>
        </>
    )
}
