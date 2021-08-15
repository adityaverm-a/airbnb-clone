const Footer = () => {
    return (
        <footer className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='text-xs space-y-4 text-gray-800'>
                <h3 className='font-bold'>ABOUT</h3>
                <p className='cursor-pointer hover:underline'>How Airbnb works</p>
                <p className='cursor-pointer hover:underline'>Newsroom</p>
                <p className='cursor-pointer hover:underline'>Investors</p>
                <p className='cursor-pointer hover:underline'>Airbnb Plus</p>
                <p className='cursor-pointer hover:underline'>Airbnb Lux</p>
            </div>
            <div className='text-xs space-y-4 text-gray-800'>
                <h3 className='font-bold'>COMMUNITY</h3>
                <p className='cursor-pointer hover:underline'>Accessibilty</p>
                <p className='cursor-pointer hover:underline'>This is not a real site</p>
                <p className='cursor-pointer hover:underline'>It is a pretty awesome clone</p>
                <p className='cursor-pointer hover:underline'>Made for learning purpose</p>
                <p className='cursor-pointer hover:underline'>Guest Referrals</p>
            </div>
            <div className='text-xs space-y-4 text-gray-800'>
                <h3 className='font-bold'>HOST</h3>
                <p className='cursor-pointer hover:underline'>Host your home</p>
                <p className='cursor-pointer hover:underline'>Host an Online Experience</p>
                <p className='cursor-pointer hover:underline'>Host an Experience</p>
                <p className='cursor-pointer hover:underline'>Responsible hosting</p>
                <p className='cursor-pointer hover:underline'>Resource Centre</p>
            </div>
            <div className='text-xs space-y-4 text-gray-800'>
                <h3 className='font-bold'>SUPPORT</h3>
                <p className='cursor-pointer hover:underline'>Our COVID-19 Response</p>
                <p className='cursor-pointer hover:underline'>Help Centre</p>
                <p className='cursor-pointer hover:underline'>Cancellation options</p>
                <p className='cursor-pointer hover:underline'>Trust & Safety</p>
                <p className='cursor-pointer hover:underline'>Neighbourhood Support</p>
            </div>
        </footer>
    )
}

export default Footer
