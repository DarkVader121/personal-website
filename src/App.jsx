import './App.css'
import {Loader, Navigation, LandingPage, About, Projects, ProgramStack, Experience, Certificate, Videos, ContactMe, SpeedDialNav  } from './components'
import { useState, useEffect } from "react"; 
import { motion } from 'framer-motion';

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

      { loading ? (
        <motion.div
          initial={{ opacity:1 }}
          animate={{ opacity:0 }}
          transition={{ duration:1, delay:5}}
        >
          <Loader/>
        </motion.div>
       ) : (
        <>
         <Navigation/>
            <div>
              <section id="/LandPage/">
              <LandingPage />
              </section>
              <section id="/About/">
                <About/>
              </section>
              <section id="/Projects/">
                <Projects/>
              </section>
              <section id="/Certificate/">
                <Certificate/>
              </section>
              <section id="/Program/">
                <ProgramStack />
              </section>
              <section id="/Experience/">
                <Experience/>
              </section>
              <section id="/Videos/">
                <Videos/>
              </section>
              <section id="/Contact/">
                <ContactMe/>
              </section>
            </div>
          <SpeedDialNav/>
        </>
       )}
  
    </>
  )
}

export default App
