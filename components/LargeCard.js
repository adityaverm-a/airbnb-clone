import Image from 'next/image'

const LargeCard = ({ buttonText, description, img, title }) => {
    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative min-h-[500px] min-w-[300px]'>
                <Image src={img} layout='fill' className='rounded-xl' />
            </div>

            <div className='absolute top-56 left-12'>
                <h3 className='text-4xl mb-3 w-64 text-white'>{title}</h3>
                <p className='text-white sm:w-96'>{description}</p>
                <button className='text-lg font-medium bg-white text-gray-900 px-4 py-2 rounded-lg mt-5 active:scale-95 transition duration-150'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
