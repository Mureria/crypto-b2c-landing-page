import {useState}from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='flex justify-between items-center h-24  max-w-[1240px] m-auto px-4 text-green-300'>
        <h1 className='text-3xl w-full font-bold ' >BootCoin.ke</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer hover:text-green-400 '>Home</li>
            <li className='p-4 cursor-pointer hover:text-green-400'>Company</li>
            <li className='p-4 cursor-pointer hover:text-green-400'>Resources</li>
            <li className='p-4 cursor-pointer hover:text-green-400'>About</li>
            <li className='p-4 cursor-pointer hover:text-green-400'>Contacts</li>
        </ul>

        {/* Mobile */}
        <div onClick={handleNav} className='block md:hidden text-green-200 z-20'>
            {nav ? <AiOutlineClose size={20}/> :    <AiOutlineMenu size={20}/> } 
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-full h-full bg-black ease-out duration-500 z-10' : 'fixed left-[-100%] flex ease-in-out duration-500'}>
        <h1 className='text-3xl text-start pl-4 font-bold pt-7 ' >BootCoin.ke</h1>
            <ul className='uppercase'>
            <li className='text-center p-4 border-b border-gray-900'>Home</li>
            <li className='text-center p-4 border-b border-gray-900'>Company</li>
            <li className='text-center p-4 border-b border-gray-900'>Resources</li>
            <li className='text-center p-4 border-b border-gray-900'>About</li>
            <li className='text-center p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar