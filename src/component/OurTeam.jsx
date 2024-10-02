// import jayed from '../../public/Sheikh Jayed Uddin.jpg'
import supto from '../../public/Supto.jpg'
// import samea from '../../public/Samea.jpg'
import { Link } from 'react-router-dom';
import { ImFacebook2 } from 'react-icons/im';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import jerin from '../../public/Sheikh Jayed Uddin.jpg'
// import hridoy from '../../public/Sheikh Jayed Uddin.jpg'

const OurTeam = () => {
    return (
        <>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
                    <p className="max-w-2xl text-center dark:text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                </div>
                <div className="">
                    <div className="">
                        <div className='rounded-full h-56 w-56 p-1 border-4'>
                            <img alt="" className="object-cover h-52 w-52 mx-auto bg-center dark:bg-gray-500 rounded-full" src={supto} />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-xl font-semibold">Md Jahidul Islam Supta</h4>
                            <p className="text-sm dark:text-gray-600">Team Leader</p>
                            <div className="flex mt-2 space-x-2">
                                <Link><h1><ImFacebook2 /></h1></Link>
                                <Link><h1><FaLinkedinIn /></h1></Link>
                                <Link><h1><FaGithub /></h1></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurTeam;