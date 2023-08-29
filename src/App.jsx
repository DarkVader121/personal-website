import { Button } from 'react-scroll';
import './App.css'
import {Loader, Navigation, LandingPage, About, Projects, ProgramStack, Experience, Certificate, Videos, ContactMe, SpeedDialNav  } from './components'
import { useState, useEffect } from "react"; 



function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() =>{
      setLoading(false)
    }, 6000); 
  
    return () => clearTimeout(timer); 
  }, [])

  return (
    <>
    <Navigation/>
    <div>
          <section id="LandPage">
          <LandingPage />
          </section>
          <section id="About">
            <About/>
          </section>
          <section id="Projects">
            <Projects/>
          </section>
          <section id="Certificate">
            <Certificate/>
          </section>
          <section id="Program">
            <ProgramStack />
          </section>
          <section id="Experience">
            <Experience/>
          </section>
          <section id="Videos">
            <Videos/>
          </section>
          <section id="Contact">
            <ContactMe/>
          </section>
    </div>
  
      {/* { loading ? (
        <div className={loading ? 'loader-fade-out' : ""}>
       <Loader/>
        </div>
       ) : (
         <>
         <div >
         <div>
            <Navigation/>
                <section  >
                <LandingPage/>
                </section>
                <section id="About" className='loader-fade-in pt-10'>
                  <About/>
                </section>
                <section id="Projects">
                  <Projects/>
                </section>
                <section id="Certificate">
                  <Certificate/>
                </section>
                <section id="Program">
                  <ProgramStack />
                </section>
                <section id="Experience">
                  <Experience/>
                </section>
                <section id="Videos">
                  <Videos/>
                </section>
                <section id="Contact">
                  <ContactMe/>
                </section>
          </div>
         </div>
         </>
       )} */}
  
    </>
  )
}

export default App
