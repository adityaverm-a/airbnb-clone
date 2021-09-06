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

      <main className='max-w-screen-2xl mx-auto px-8 sm:px-16'> 
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
          img='https://res.cloudinary.com/airbnb-clone-dusky/image/upload/v1630846733/airbnb-clone/try-hosting_wbhdtw.jpg'
          buttonText='Learn More'
          title='Try hosting'
          description='Earn extra income and earn new opportunites by sharing your space'
        />
      </main>

      <Footer />
    </div>
  )
}


// Static Site Rendering
export async function getStaticProps() {
  const smallCardData = await fetch('https://jsonkeeper.com/b/VWPD')
    .then(
      (res) => res.json()
    )

  const mediumCardData = await fetch('https://jsonkeeper.com/b/VHHT')
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