
import {FaInstagram, FaFacebookSquare, FaTwitterSquare, FaDribbbleSquare, FaGithubSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-4 px-4 grid lg:grid-cols-3 gap-6 text-gray-300 '>
        <div>
            <h1 className='w-full text-3xl font-bold py-4 text-green-400'>BootCoin.ke</h1>
            <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, culpa odit debitis saepe, expedita excepturi cumque quisquam molestias in itaque exercitationem corporis similique vero quia. Molestias quidem placeat et eius?</p>
            <div className='flex md:w-[75%] my-6 justify-between'>
                <FaDribbbleSquare size={25}/>
                <FaFacebookSquare size={25}/>
                <FaTwitterSquare size={25}/>
                <FaInstagram size={25}/>
                <FaGithubSquare size={25}/>
            </div>
        </div>
        <div className='lg:col-span-2 py-2 md:py-16 flex justify-between'>
            <div>
            <h1 className='font-medium text-gray-400'>Solutions</h1>
            <ul>
                <li className='py-2 text-sm'>Lorem, ipsum dolor.</li>
                <li className='py-2 text-sm'>Lorem, ipsum dolor.</li>
                <li className='py-2 text-sm'>Lorem, ipsum.</li>
                <li className='py-2 text-sm'>Lorem, ipsum dolor.</li>
                <li className='py-2 text-sm'>Lorem ipsum dolor sit amet.</li>
            </ul>
            </div>
            <div>
            <h1 className='font-medium text-gray-400'>Support</h1>
            <ul>
                <li className='py-2 text-sm'>Lorem, ipsum dolor.</li>
                <li className='py-2 text-sm'>Lorem, ipsum dolor.</li>
                <li className='py-2 text-sm'>Lorem, ipsum.</li>
                <li className='py-2 text-sm'>Lorem, ipsum dolor.</li>
                <li className='py-2 text-sm'>Lorem ipsum dolor sit amet.</li>
            </ul>
            </div>
            <div>
            <h1 className='font-medium text-gray-400'>Company</h1>
            <ul>
                <li className='py-2 text-sm'>Lorem, ipsum dolor.</li>
                <li className='py-2 text-sm'>Lorem, ipsum dolor.</li>
                <li className='py-2 text-sm'>Lorem, ipsum.</li>
                <li className='py-2 text-sm'>Lorem, ipsum dolor.</li>
                <li className='py-2 text-sm'>Lorem ipsum dolor sit amet.</li>
            </ul>
            </div>
            <div>
            <h1 className='font-medium text-gray-400'>Legal</h1>
            <ul>
                <li className='py-2 text-sm'>Lorem, ipsum dolor.</li>
                <li className='py-2 text-sm'>Lorem, ipsum dolor.</li>
                <li className='py-2 text-sm'>Lorem, ipsum.</li>
                <li className='py-2 text-sm'>Lorem, ipsum dolor.</li>
                <li className='py-2 text-sm'>Lorem ipsum dolor sit amet.</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer