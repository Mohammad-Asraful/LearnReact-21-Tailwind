import React from 'react'
import './App.css'
import LandingPage from './Component/LandingPage'
import OurTeam from './Component/OurTeam'
import OurTeamData from './Component/OurTeamData'
import RegistrationForm from './Component/RegistrationForm'
import HeaderAndHero from './HeaderAndHero'


const App = () => {

  /*   const bodyStyle = {
      background: '#2b5876',
      background: '-webkit-linear-gradient(to top, #4e4376, #2b5876)',
      background: 'linear-gradient(to top, #4e4376, #2b5876)',
    } */


  return (
    <>

      {/* Header and Hero section start */}
      <section>
        <HeaderAndHero />
      </section>
      {/* Header and Hero section end */}


      {/* Team section start */}
      <section className='teamSection'>
        <div>
          <small className='block uppercase text-white text-center'>Building Team</small>
          <h1 className='w-2/4 text-center m-auto text-white text-2xl mb-8'>The talented people behind the scenes of the organization</h1>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-center gap-2 w-fit mx-auto'>
          {
            OurTeamData.map((data) => {
              return (
                <OurTeam
                  key={data.id}
                  img={data.img}
                  name={data.name}
                  title={data.title}
                  about={data.about}
                />
              )
            }

            )
          }
        </div>
      </section>
      {/* Team section end */}


      {/* Form secttion start */}

      <section className="formSection py-10">
        <RegistrationForm />
      </section>

      {/* Form secttion end */}


      {/* Landing page start */}
      <section>
        <LandingPage />
      </section>
      {/* Landing page end */}
    </>
  )
}


export default App