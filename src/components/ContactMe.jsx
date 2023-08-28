import React, { useRef, useState } from 'react'
import { Typography, Input, Textarea, Alert, Button } from '@material-tailwind/react'
import { CustomButton, AlertMessage } from '../components'
import Logo from '../public/Logo.png'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'



const ContactMe = () => {
    const [disabled, setDisabled] = useState(true)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [title, setTitle] = useState("")
    const [messageDetails, setMessageDetails] = useState("")

    const checkInputs = () => {
        if(firstName.trim() !== '' 
           && lastName.trim() !== ''
           && title.trim() !== ''
           && messageDetails.trim() !== ''
           ){
            setDisabled(false); 
           }else{
            setDisabled(true);
           }
    }

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

    <div className='px-5 '>        
        <Typography
            variant="lead"
            id="Inter"
            className="font-bold text-center"
        >
        Let’s Talk  
        </Typography>
        <Typography
            variant="h1"
            id="Inter"
            className="text-9xl  text-center mb-[10rem]"
        >
        Contact Me
        </Typography>

        <div className='grid lg:grid-cols-8 mt-10 mb-[10rem]'>
            <div className='col-span-3 mt-10'>
                <Typography
                    variant="h1"
                    id="Inter"
                    className="text-6xl "
                >
                Erron John
                </Typography>
                <Typography 
                    variant="lead"
                    id="Inter"
                    className="text-2xl"
                >
                I'm open to project collaborations, developing customized projects, and actively seeking job opportunities. If you're interested, feel free to reach out to me
                </Typography>
                <div className='mt-20'>
                    <Typography
                        variant="lead"
                        id="Inter"

                    >
                        Email Fails? <br /> 
                        <b> You can reach out to me here. </b> <br />
                    </Typography>
                    <div className='flex items-center'>
                        <li className='fa-solid fa-envelope fa-2xl text-3xl'></li>
                        <Typography 
                            variant="lead"
                            id="Inter"
                            className="ml-3"
                        >
                            lapacerronjohn@gmail.com
                        </Typography>
                    </div>
                    
                </div>  
            </div>
            <div className='col-span-5'>

                    <Typography
                        variant="h1"
                        id="Inter"
                        className="text-6xl"
                    >
                    Send me a Message
                    </Typography>
                    <form ref={form} onSubmit={sendEmail} id="contact_form" >
                    <div className='grid lg:grid-cols-2'>
                        <div className='w-full mt-10 px-5'>
                             <Input size="lg" label="First Name" type='text' name="firstName" value={firstName} onChange={(e) => {setFirstName(e.target.value),  checkInputs(); }}/>
                         </div>
                         <div className='w-full px-5 mt-10'>
                             <Input size="lg" label="Last Name" type='text' name="lastName" value={lastName} onChange={(e) => {setLastName(e.target.value); checkInputs(); }}/>
                        </div>
                        <div className='col-span-2 mt-10'>
                            <div className='w-full px-5'>
                                <Input size='lg' label="Email Address" type='text' name="title" value={title} onChange={(e) => {setTitle(e.target.value); checkInputs(); }}/> 
                            </div> 
                        </div>
                        <div className='col-span-2 mt-10'>
                            <div className='w-full px-5'>
                                <Input label="Message" name="message" value={messageDetails} onChange={(e) => {setMessageDetails(e.target.value); checkInputs(); }}/>
                            </div>
                        </div>
                        <div className='col-span-2 px-5 mt-10'>
                            <CustomButton title={`Send`} btnType={`submit`} btnValue={`Send`} isDisabled={disabled} />                                
                        </div>
                    </div>
                    </form>
            
            </div>
        </div>
    </div>
    <div className='bg-gray-500 w-full px-5 py-5'>
        <img src={Logo} width={200}alt="logo" />
    </div>
    </motion.div>
  )
}

export default ContactMe