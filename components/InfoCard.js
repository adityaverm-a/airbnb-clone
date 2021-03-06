import { useState } from "react"
import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"
import { HeartIcon as HeartFullIcon } from "@heroicons/react/solid"
import { HeartIcon } from "@heroicons/react/outline"

const InfoCard = ({ description, img, lat, location, long, price, star, title, total }) => {
    const [like, setLike] = useState('false')

    return (
        <div className='flex items-center py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
            <div className='relative h-44 w-40 md:h-52 md:w-80 flex-shrink-0'>
                <Image
                    src={img}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-2xl'
                />
            </div>
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <p>{location}</p>
                    {like ? (
                        <HeartIcon className='h-7 cursor-pointer' onClick={() => setLike(!like)}/>
                    ) : (
                        <HeartFullIcon className='text-red-400 h-7 cursor-pointer' onClick={() => setLike(!like)}/>
                    )}
                </div>

                <h4 className='text-xl'>{title}</h4>

                <div className='border-b-2 w-10 pt-2'></div>

                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>

                <div className='flex justify-between items-end pt-5'>
                    <p className='flex items-center'>
                        <StarIcon className='h-5 text-red-400' />
                        {star}
                    </p>

                    <div>
                        <p className='text-lg lg:text-2xl font-semibold pb-2' >{price}</p>
                        <p className='text-right font-extralight'>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
