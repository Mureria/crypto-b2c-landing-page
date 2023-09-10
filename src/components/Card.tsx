
import User from '../assets/user.png'
import MultiUser from '../assets/people.png'
import Skills from '../assets/skills.png'

const Card = () => {
  return (
    <div className='w-full bg-white px-4 py-[10rem]'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
            <div className='w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-700'>
                <img src={User} alt="" className='w-20 mx-auto mt-[-3rem] bg-white' />
                <h1 className='text-2xl font-bold text-center py-8'>Single User</h1>
                <p className='text-center text-4xl font-bold '>$140</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mt-8 mx-8'> 500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>
                <button className='bg-green-500 w-[200px] rounded-md font-medium py-3 px-4 text-black my-6 m-auto'>Start Trial</button>
            </div>
            <div className='w-full bg-gray-100  shadow-xl flex flex-col p-4 my-10 md:my-0 rounded-lg hover:scale-105 duration-700'>
                <img src={MultiUser} alt="" className='w-20 mx-auto mt-[-3.8rem] bg-transparent' />
                <h1 className='text-2xl font-bold text-center py-8'>Mult-User</h1>
                <p className='text-center text-4xl font-bold '>$1000</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mt-8 mx-8'> Unlimited Storage</p>
                    <p className='py-2 border-b mx-8'>Unlimited Users</p>
                    <p className='py-2 border-b mx-8'>Unlimited Uploads </p>
                </div>
                <button className='bg-green-500 w-[200px] rounded-md font-medium py-3 px-4 text-black my-6 m-auto'>Upgrade</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-700'>
                <img src={Skills} alt="" className='w-20 mx-auto mt-[-3rem] bg-white' />
                <h1 className='text-2xl font-bold text-center py-8'>Team</h1>
                <p className='text-center text-4xl font-bold '>$500</p>
                <div className='text-center font-medium'>
                <p className='py-2 border-b mt-8 mx-8'> 1TB Storage</p>
                    <p className='py-2 border-b mx-8'>20 Granted Users</p>
                    <p className='py-2 border-b mx-8'>Send up to 50GB</p>
                </div>
                <button className='bg-green-500 w-[200px] rounded-md font-medium py-3 px-4 text-black my-6 m-auto'>Upgrade</button>
            </div>
        </div>

    </div>
  )
}

export default Card