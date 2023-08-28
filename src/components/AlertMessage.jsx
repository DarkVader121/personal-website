import React from 'react'
import {Alert} from '@material-tailwind/react'

const AlertMessage = ({setAlert}) => {
  return (
        <Alert
          className="fixed w-30 top-0 right-0 m-4" // Adjust positioning and margin as needed
          open={open}
          onClose={() => setAlert(false)}
        >
          <li className='fa-solid fa-check fa-2xl mr-3'></li>
          The message was successfully delivered.
        </Alert>
  )
}

export default AlertMessage