import Data from '../assets/fabio-oyXis2kALVg-unsplash.jpg'

const Analytics = () => {
  return (
    <div className='w-full py-16 px-4 bg-white'>
        <div className='max-[1240] mx-auto grid md:grid-cols-2 '>
            <img className='w-[400px] mx-auto py-4' src={Data} alt="data img" />
            <div className='flex flex-col justify-center items-center md:items-start'>
                <p className='text-green-500 uppercase font-bold'>Data Analytics Dashboard </p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Data Analytics Centrally </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui eum et maiores est, laborum ea ipsam culpa quibusdam minus! Nobis nisi corporis tempora illum voluptatem delectus consequuntur eaque veniam?</p>
                <button className='bg-black w-[200px] rounded-md font-medium py-3 px-4 text-green-400 my-6 m-auto md:mx-0 hover:bg-black/90 ease-in-out'>Get Started</button>
            </div>
        </div>
       
    </div>
  )
}

export default Analytics