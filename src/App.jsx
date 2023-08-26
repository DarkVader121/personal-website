import './App.css'
import {Loader, Navigation, LandingPage, About, Projects, ProgramStack, Experience, Certificate, Videos } from './components'
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
    <div>
       <Navigation/>
          <section >
          <LandingPage/>
          </section>
          <section id="About" className='pt-10'>
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
    </div>

    // <div>
    //   { loading ? (
    //     <div className={loading ? 'loader-fade-out' : ""}>
    //     <Loader/>
    //     </div>
    //   ) : (
    //     <>
    //     <div className={loading ? "" : 'loader-fade-in'}>
    //       <Navigation/>
    //       <LandingPage/>
    //     </div>
    //     </>
    //   )}
    // </div>
  )
}

export default App
