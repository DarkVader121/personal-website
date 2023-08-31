import React, { useRef, useState, useEffect } from 'react'
import { Typography, Input,Textarea } from '@material-tailwind/react'
import { CustomButton, AlertMessage } from '../components'
import LogoErron from '../public/logo.png'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'




const ContactMe = () => {
    const [disabled, setDisabled] = useState(true)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [title, setTitle] = useState("")
    const [messageDetails, setMessageDetails] = useState("")

    useEffect(() => {

            if(firstName.trim() !== '' 
               && lastName.trim() !== ''
               && title.trim() !== ''
               && messageDetails.trim() !== ''
               ){
                setDisabled(false); 
               }else{
                setDisabled(true);
               }
    }, [firstName, lastName, title, messageDetails ])

    const [alert, setAlert] = useState(false)
    const form = useRef(); 

    const sendEmail = (e) => {
        e.preventDefault(); 
    
        emailjs.sendForm('service_h1wet0i', 'template_xmcap7c', form.current, 'sC3_9NC8GkpiDZBcc')
          .then((result) => {
              console.log(result.text);
              setAlert(true)
          }, (error) => {
              console.log(error.text);
          });

          setFirstName('');
          setLastName('');
          setTitle('');
          setMessageDetails('');
    };

  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    >
    {alert && 
        <AlertMessage
            setAlert={setAlert}
        />
    }

    <div className='lg:px-[3rem] p-[1rem] '>        
        <Typography
            variant="lead"
            id="Inter"
            className="font-bold text-center lg:text-2xl text-sm"
        >
        Let’s Talk  
        </Typography>
        <Typography
            variant="h1"
            id="Inter"
            className="lg:text-9xl  text-center lg:mb-[10rem]"
        >
        Contact Me
        </Typography>

        <div className='grid lg:grid-cols-8 lg:mt-10 lg-[10rem] mt-[1rem] '>
            <div className='col-span-3 lg:mt-10'>
                <Typography
                    variant="h5"
                    id="Inter"
                    className="lg:text-6xl text-3xl "
                >
                Erron John
                </Typography>
                <Typography 
                    variant="lead"
                    id="Inter"
                    className="lg:text-2xl text-sm"
                >
                I'm open to project collaborations, developing customized projects, and actively seeking job opportunities. If you're interested, feel free to reach out to me.
                </Typography>
                <div className='lg:mt-20 mt-[1rem]'>
                    <Typography
                        variant="lead"
                        id="Inter"
                        className="lg:text-2xl text-sm"
                    >
                        Email Fails? <br /> 
                        <b> You can reach out to me here. </b> <br />
                    </Typography>
                    <div className='flex items-center'>
                        <li className='fa-solid fa-envelope fa-2xl text-3xl'></li>
                        <Typography 
                            variant="lead"
                            id="Inter"
                            className="ml-3 lg:text-2xl text-sm" 
                        >
                            lapacerronjohn@gmail.com
                        </Typography>
                    </div>
                    
                </div>  
            </div>
            <div className='col-span-5 mt-[1rem]'>
                    <Typography
                        variant="h1"
                        id="Inter"
                        className="lg:text-6xl text-3xl "
                    >
                    Send me a Message
                    </Typography>
                    <form ref={form} onSubmit={sendEmail} id="contact_form" >
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-3'>
                        <div className='col-span-2 lg:mt-10   lg:px-5'>
                             <Input size="lg" label="First Name" type='text' name="firstName" value={firstName} onChange={(e) => {setFirstName(e.target.value) }}/>
                         </div>
                         <div className='col-span-2 lg:px-5 lg:mt-10'>
                             <Input size="lg" label="Last Name" type='text' name="lastName" value={lastName} onChange={(e) => {setLastName(e.target.value) }}/>
                        </div>
                        <div className='col-span-2 lg:mt-10'>
                            <div className='w-full lg:px-5 '>
                                <Input size='lg' label="Email Address" type='text' name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/> 
                            </div> 
                        </div>
                        <div className='col-span-2 lg:mt-10'>
                            <div className='w-full lg:px-5'>
                                <Textarea label="Message" name="message" value={messageDetails} onChange={(e) => {setMessageDetails(e.target.value) }}/>
                            </div>
                        </div>
                        <div className='col-span-2 lg:px-5 lg:mt-10'>
                            <CustomButton title={`Send`} btnType={`submit`} btnValue={`Send`} isDisabled={disabled} />                                
                        </div>
                    </div>
                    </form>
            
            </div>
        </div>
    </div>
    <div className='bg-gray-500 w-full px-5 py-5'>
        <img src={LogoErron} width={200}alt="logo" />
    </div>
    </motion.div>
  )
}

export default ContactMe