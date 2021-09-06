import Image from "next/image"

const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image 
                src='https://res.cloudinary.com/airbnb-clone-dusky/image/upload/v1630846086/airbnb-clone/banner_gjj3m0.jpg'
                layout='fill'
                objectFit='cover'
            />

            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>

                <button className='text-purple-500 bg-white px-10 py-4 rounded-full shadow-md my-3 font-bold hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
