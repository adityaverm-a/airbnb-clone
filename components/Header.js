import { Fragment, useState } from 'react'
import Image from 'next/image'
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/dist/client/router'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

const Header = ({ placeholder }) => {
    const [searchInput, setSearchInput] = useState('')
    const [endDate, setEndDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const [noOfGuest, SetNoOfGuest] = useState(1)

    const router = useRouter()

    const selectRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput= () => {
        setSearchInput('')
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuest
            }
        })

        setSearchInput('')
    }

    return (
        <header className='sticky top-0 z-50 sm:grid sm:grid-cols-3 bg-white shadow-md sm:p-5 md:px-10 py-4 px-3 flex justify-between'>
            <div
                onClick={() => router.push('/')}
                className='hidden sm:inline-flex relative flex items-center h-10 cursor-pointer my-auto' 
            >
                <Image 
                    src='https://res.cloudinary.com/airbnb-clone-dusky/image/upload/v1630902137/airbnb-clone/airbnb-logo_gppkru.png'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            <div
                onClick={() => router.push('/')}
                className='sm:hidden relative flex items-center h-10 w-10 cursor-pointer my-auto'
            >
                <Image 
                    src='https://res.cloudinary.com/airbnb-clone-dusky/image/upload/v1630922529/airbnb-clone/airbnb-mlogo-01_avjj6c.png'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-md sm:-ml-4'>
                <input 
                    type="text"
                    value={searchInput}
                    placeholder={placeholder || 'Start your search'}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='flex-grow pl-5 outline-none bg-transparent text-base text-gray-600 placeholder-gray-500 font-medium'
                />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>

            <div className='flex items-center space-x-4 justify-end text-gray-700'>
                <p className='hidden font-medium md:inline-flex cursor-pointer hover:bg-gray-100 p-4 rounded-full'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer hidden md:inline-flex' />
                <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className='flex items-center space-x-2 border-2 px-4 py-2 rounded-full hover:shadow-lg active:scale-95 transition transform duration-100 ease-out'>
                            <MenuIcon className='h-6 cursor-pointer' />
                            <UserCircleIcon className='h-6 cursor-pointer' />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute p-2 right-0 w-60 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    className={`${
                                    active ? 'bg-gray-100' : ''
                                    } text-gray-700 font-medium group flex rounded-md items-center w-full px-2 py-2 text-lg`}
                                >
                                    Sign Up
                                </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    className={`${
                                    active ? 'bg-gray-100' : ''
                                    } text-gray-700 group flex rounded-md items-center w-full px-2 py-2 text-lg`}
                                >
                                    Login
                                </button>
                                )}
                            </Menu.Item>
                            </div>
                            <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    className={`${
                                    active ? 'bg-gray-100' : ''
                                    } text-gray-700 group flex rounded-md items-center w-full px-2 py-2 text-lg`}
                                >
                                    Host your home
                                </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    className={`${
                                    active ? 'bg-gray-100' : ''
                                    } text-gray-700 group flex rounded-md items-center w-full px-2 py-2 text-lg`}
                                >
                                    Host an experience
                                </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    className={`${
                                    active ? 'bg-gray-100' : ''
                                    } text-gray-700 group flex rounded-md items-center w-full px-2 py-2 text-lg`}
                                >
                                    Help
                                </button>
                                )}
                            </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>

            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto mt-5'>
                    <DateRangePicker
                        minDate={new Date()}
                        ranges={[selectRange]}
                        onChange={handleSelect}
                        rangeColors={["#FD5B61"]}
                    />

                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        <input
                            min={1}
                            type='number'
                            value={noOfGuest}
                            onChange={(e) => SetNoOfGuest(e.target.value)}
                            className='outline-none w-12 pl-2 text-lg text-red-400'
                        />
                    </div>

                    <div className='flex'>
                        <button className='flex-grow font-bold text-gray-500' onClick={resetInput}>Cancel</button>
                        <button className='flex-grow font-bold text-red-400' onClick={search}>Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
