

const Newsletter = () => {
  return (
    <div className='w-full px-4 text-white'>
        <div className='max-w-[1240px] mx-auto my-2 grid lg:grid-cols-3'>
            <div className='lg:col-span-2 py-3'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips and tricks to optimize your flow?</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, quaerat.</p>
            </div>
            <div className='py-4'>
               <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
                    <input type="email" placeholder='Enter Mail' className='p-3 rounded-md text-black w-full mb-3' />
                    <button className='bg-green-400 ml-4 text-black font-medium w-[200px] rounded-md py-3 hover:bg-green-300'>Subscribe</button>
                </div> 
                <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className='text-green-400 ml-2'>Aspernatur sunt.</span></p>
            </div>

        </div>
    </div>
  )
}

export default Newsletter