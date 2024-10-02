import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div className="mt-7">
            <div className="bg-[#151515]">
                <div className="w-11/12 mx-auto p-6">
                    <div className="mt-10 lg:grid lg:grid-cols-10 gap-9">
                        <div className="mb-8 lg:col-span-3">
                            <h1 className="text-[#FFFFFF] text-4xl font-bold mb-5">Astro</h1>
                            <p className="text-[#888] text-lg lg:text-xl lg:w-3/4">Space is a vast, endless area beyond Earth, filled with planets, stars, and galaxies, where extreme temperatures and gravity shape everything.</p>
                        </div>
                        <div className="mb-8 lg:col-span-2">
                            <h1 className="text-[#b19777] text-lg text-center lg:text-left uppercase">Legal</h1>
                            <hr className="border-[#888] mt-3 mb-5" />
                            <Link><p className="text-[#888] text-lg">Terms of use</p></Link>
                            <Link><p className="text-[#888] text-lg my-5">Privacy policy</p></Link>
                            <Link><p className="text-[#888] text-lg uppercase">faq</p></Link>
                            <Link><p className="text-[#888] text-lg mt-5">Contact</p></Link>
                        </div>
                        <div className="mb-8 lg:col-span-3">
                            <h1 className="text-[#b19777] text-lg text-center lg:text-left">VISIT</h1>
                            <hr className="border-[#888] mt-3 mb-5" />
                            <p className="text-[#888] text-lg">International Islamic University Chitteagong</p>
                            <p className="text-[#888] text-lg my-5">Kumira,</p><p className="text-[#888] text-lg">Chittagong,</p>
                            <p className="text-[#888] text-lg mt-5">Bangladesh .</p>
                        </div>
                        <div className="lg:col-span-2">
                            <h1 className="text-[#b19777] text-lg text-center lg:text-left">FOLLOW US</h1>
                            <hr className="border-[#888] mt-3 mb-5" />
                            <div className="flex gap-5 justify-center">
                                <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                    <FaFacebookF className="text-[#FFFFFF]"></FaFacebookF>
                                </div>
                                <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                    <FaInstagram className="text-[#FFFFFF]"></FaInstagram>
                                </div>
                                <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                    <FaLinkedinIn className="text-[#FFFFFF]"></FaLinkedinIn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <hr className="border-[#888]" />
                        <div className="lg:flex justify-center gap-1 p-6">
                            <p className="flex items-center gap-1 text-[#bece8861] justify-center">Copyright <MdOutlineCopyright></MdOutlineCopyright> 2024 Astro.</p>
                            <p className="text-[#bece8861] text-center">All Rights Reserved. Made by Astro Avaengers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
