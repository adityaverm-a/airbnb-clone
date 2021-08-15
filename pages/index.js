import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'


// export default function Home() {
export default function Home({ mediumCardData, smallCardData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'> 
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {/* Pull some data from a server - API endpoints */}
            {smallCardData.map((item, i) => (
              <SmallCard
              key={i}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='flex space-x-4 overflow-scroll p-3 -ml-3 scrollbar-hide'>
            {/* Pull some data from a server - API endpoints */}
            {mediumCardData.map((item, i) => (
              <MediumCard
                key={i}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          buttonText='Get Inspired'
          title='The Greatest Outdoors'
          description='Whislists curated by Airbnb'
        />
      </main>

      <Footer />
    </div>
  )
}


// Static Site Rendering
export async function getStaticProps() {
  const smallCardData = await fetch('https://links.papareact.com/pyp')
    .then(
      (res) => res.json()
    )

  const mediumCardData = await fetch('https://links.papareact.com/zp1')
      .then(
        (res) => res.json()
      )

    return {
      props: {
        smallCardData,
        mediumCardData
      }
    }
}