import jayed from '../../public/Sheikh Jayed Uddin.jpg'
import supto from '../../public/Supto.jpg'
import samea from '../../public/Samea.jpg'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import jerin from '../../public/Jerin.jpg'
import hridoy from '../../public/shahriyar.jpg'
import SectionHead from '../Share/SectionHead';

const OurTeam = () => {
    return (
        <>
            <div className="bg-[#343a40]">
                <SectionHead></SectionHead>
                <section className="dark:bg-gray-100 dark:text-gray-800 pb-16 text-[#FFFFFF]">
                    {/* Team Leader */}
                    <div className="mb-8">
                        <div className="border-2 border-[#7b8996] rounded-xl w-[350px] mx-auto py-6 px-3">
                            <div className=''>
                                <img alt="" className="object-cover h-60 w-60 mx-auto bg-center dark:bg-gray-500 rounded-full" src={supto} />
                            </div>
                            <div className="flex flex-col items-center mt-3">
                                <h4 className="text-2xl font-bold">Md Jahidul Islam Supta</h4>
                                <p className="text-base dark:text-gray-600 mt-2">Team Leader</p>
                                <div className="flex mt-2 space-x-2 text-lg">
                                    <Link><h1><FaFacebookF /></h1></Link>
                                    <Link><h1><FaLinkedinIn /></h1></Link>
                                    <Link><h1><FaGithub /></h1></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Member */}
                    <div className="mx-3 grid grid-cols-4">
                        {/* Jayed */}
                        <div className="border-2 border-[#7b8996] rounded-xl w-[350px] mx-auto py-6 px-3">
                            <div className=''>
                                <img alt="" className="object-cover h-60 w-60 mx-auto bg-center dark:bg-gray-500 rounded-full" src={jayed} />
                            </div>
                            <div className="flex flex-col items-center mt-3">
                                <h4 className="text-2xl font-bold">Sheikh Jayed Uddin</h4>
                                <p className="text-base dark:text-gray-600 mt-2">Developer</p>
                                <div className="flex mt-2 space-x-2 text-lg">
                                    <Link><h1><FaFacebookF /></h1></Link>
                                    <Link><h1><FaLinkedinIn /></h1></Link>
                                    <Link><h1><FaGithub /></h1></Link>
                                </div>
                            </div>
                        </div>
                        {/* Hridoy */}
                        <div className="border-2 border-[#7b8996] rounded-xl w-[360px] mx-auto py-6 px-3">
                            <div className=''>
                                <img alt="" className="object-cover h-60 w-60 mx-auto bg-center dark:bg-gray-500 rounded-full" src={hridoy} />
                            </div>
                            <div className="flex flex-col items-center mt-3">
                                <h4 className="text-xl font-bold">Md. Shahriyar Hossain Chowdhury</h4>
                                <p className="text-base dark:text-gray-600 mt-2">Developer</p>
                                <div className="flex mt-2 space-x-2 text-lg">
                                    <Link><h1><FaFacebookF /></h1></Link>
                                    <Link><h1><FaLinkedinIn /></h1></Link>
                                    <Link><h1><FaGithub /></h1></Link>
                                </div>
                            </div>
                        </div>
                        {/* Jerin */}
                        <div className="border-2 border-[#7b8996] rounded-xl w-[350px] mx-auto py-6 px-3">
                            <div className=''>
                                <img alt="" className="object-cover h-60 w-60 mx-auto bg-center dark:bg-gray-500 rounded-full" src={jerin} />
                            </div>
                            <div className="flex flex-col items-center mt-3">
                                <h4 className="text-2xl font-bold">Meherun Nesa Jerin</h4>
                                <p className="text-base dark:text-gray-600 mt-2">UI/UX Designer</p>
                                <div className="flex mt-2 space-x-2 text-lg">
                                    <Link><h1><FaFacebookF /></h1></Link>
                                    <Link><h1><FaLinkedinIn /></h1></Link>
                                    <Link><h1><FaGithub /></h1></Link>
                                </div>
                            </div>
                        </div>
                        {/* Samea */}
                        <div className="border-2 border-[#7b8996] rounded-xl w-[350px] mx-auto py-6 px-3">
                            <div className=''>
                                <img alt="" className="object-cover h-60 w-60 mx-auto bg-center dark:bg-gray-500 rounded-full" src={samea} />
                            </div>
                            <div className="flex flex-col items-center mt-3">
                                <h4 className="text-2xl font-bold">Samea Binte Saif</h4>
                                <p className="text-base dark:text-gray-600 mt-2">Data Analyst</p>
                                <div className="flex mt-2 space-x-2 text-lg">
                                    <Link><h1><FaFacebookF /></h1></Link>
                                    <Link><h1><FaLinkedinIn /></h1></Link>
                                    <Link><h1><FaGithub /></h1></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default OurTeam;