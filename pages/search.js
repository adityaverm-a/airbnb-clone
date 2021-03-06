import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { format } from "date-fns"
import InfoCard from "../components/InfoCard"
import Map from "../components/Map"

const Search = ({ searchResults }) => {
    const router = useRouter()

    const { location, startDate, endDate, noOfGuest } = router.query

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuest} Guests`}/>

            {/* <main className='flex max-w-7xl mx-auto xl:max-w-max'> */}
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {noOfGuest} number of guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='filter-button'>Cancellation Flexibility</p>
                        <p className='filter-button'>Type of Place</p>
                        <p className='filter-button'>Price</p>
                        <p className='filter-button'>Rooms and Beds</p>
                        <p className='filter-button'>More filters</p>
                    </div>

                    <div className='flex flex-col'>
                        {searchResults.map((item, i) => (
                            <InfoCard
                                key={i}
                                img={item.img}
                                lat={item.lat}
                                star={item.star}
                                long={item.long}
                                price={item.price}
                                title={item.title}
                                total={item.total}
                                location={item.location}
                                description={item.description}
                            />
                        ))}
                    </div>
                </section>

                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map searchResults={searchResults} />
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch('https://jsonkeeper.com/b/RRKA')
        .then(
            (res) => res.json()
        )

    return {
        props: {
            searchResults
        }
    }
}
