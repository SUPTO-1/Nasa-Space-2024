import Appophis from '../../public/Screenshot 2024-08-21 211028.png'
import Alert from '../../public/—Pngtree—security alert icon red_5772817.png'
import pic1 from '../../public/Cosmic_Collison 1.webp'
import pic2 from '../../public/Cosmic 1.webp'
import pic3 from '../../public/cosmic4.webp'
import { Link } from 'react-router-dom'

export default function EventAlert() {
  return (
    <div className="min-h-screen" style={{ backgroundImage: `url('https://i.ibb.co.com/fYpwVGd/nasa-hubble-space-telescope-4-UIU77rjr-Cc-unsplash.jpg')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <main className="p-8">
        {/* Apophis Alert */}
        <section className="glass p-3 rounded-md mb-6 shadow-lg grid grid-cols-10 items-center">
          <div className='col-span-2'>
            <img src={Appophis} alt="" className='rounded-lg' />
          </div>
          <div className="col-span-2">
            <h2 className="text-5xl font-bold text-[#FFFFFF] text-center">Apophis!</h2>
          </div>
          <div className="col-span-5">
            <p className="mt-2 text-[#FFFFFF] text-xl font-kurale">
              Apophis quickly gained notoriety as an asteroid that could pose a
              serious threat to Earth when astronomers predicted that it would
              come uncomfortably <span className="text-[#FF0000]">close in 2029 .</span>
            </p>
          </div>
          <div className="col-span-1">
            <img
              src={Alert}
              alt="Apophis Asteroid"
            />
          </div>
        </section>

        {/* Articles Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5 font-kurale">
          {/* Card 1 */}
          <div className="glass p-4 rounded-md shadow-lg shadow-[#A09583] text-[#FFFFFF]">
            <img
              src={pic1}
              alt="Glowing Cloud"
              className="w-full h-72 object-cover rounded-md"
            />
            <h3 className="text-2xl font-bold mt-4">
              Discovery Alert: Glowing Cloud Points to Cosmic Collision
            </h3>
            <p className="mt-2 text-sm">
              A glowing cosmic cloud has revealed a cataclysmic collision. Even
              within our own solar system, scientists have seen <Link>
                <h1 className="text-yellow-400 mt-2 inline-block">
                  Read more...
                </h1>
              </Link>
            </p>

          </div>
          {/* Card 2 */}
          <div className="glass p-4 rounded-md shadow-lg shadow-[#A09583] text-[#FFFFFF]">
            <img
              src={pic2}
              alt="Glowing Cloud"
              className="w-full h-72 object-cover rounded-md"
            />
            <h3 className="text-2xl font-bold mt-4">
              NASA’s Hubble Shows Milky Way is Destined for Head-On Collision
            </h3>
            <p className="mt-2 text-sm">
              NASA astronomers announced Thursday they can now predict with
              certainty the next major cosmic event <Link>
                <h1 className="text-yellow-400 mt-2 inline-block">
                  Read more...
                </h1>
              </Link>
            </p>

          </div>
          {/* Card 3 */}
          <div className="glass p-4 rounded-md shadow-lg shadow-[#A09583] text-[#FFFFFF]">
            <img
              src={pic3}
              alt="Glowing Cloud"
              className="w-full h-72 object-cover rounded-md"
            />
            <h3 className="text-2xl font-bold mt-4">
              Hubble Glimpses a Bright Galaxy Group
            </h3>
            <p className="mt-2 text-sm">
              This new NASA Hubble Space Telescope image shows a group of
              interacting galaxies known as LEDA 60847 <Link>
                <h1 className="text-yellow-400 mt-2 inline-block">
                  Read more...
                </h1>
              </Link>
            </p>

          </div>
        </section>
      </main>
    </div>
  )
}
