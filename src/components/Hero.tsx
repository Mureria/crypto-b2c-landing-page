
import Typed from 'react-typed';
 


const Hero = () => {
  return (
    <div className='text-white text-center'>
        <div className='max-w-[800px] m-auto flex flex-col justify-center w-full h-screen mt-[-96px]'>
            <p className='uppercase font-bold p-2 text-green-200'>growing with data analytics.</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>Grow with data</h1>
            <div className='flex justify-center items-center'>
                <p className='py-4 md:text-5xl sm:text-4xl text-xl font-bold'>Fast, Flexible, Financing for</p>
                <div className=' md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4'>
                <Typed strings={['B2C','Agape','Others']} typeSpeed={120} backSpeed={130} loop className='md:text-5xl sm:text-4xl text-xl font-bold'/>
             </div>
            </div>
            <p className='md:text-2xl text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, illum!</p>
            <button className='bg-green-500 w-[200px] rounded-md font-medium py-3 px-4 text-black my-6 m-auto hover:bg-green-400'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero