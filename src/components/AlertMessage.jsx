import React from 'react'
import {Alert} from '@material-tailwind/react'

const AlertMessage = ({ open, setAlert }) => { // Accept `open` as a prop
  return (
        <Alert
          className="fixed w-30 top-0 right-0 m-4" // Adjust positioning and margin as needed
          open={open} // Use the `open` prop here
          onClose={() => setAlert(false)}
        >
          <li className='fa-solid fa-check fa-2xl mr-3'></li>
          The message was successfully delivered.
        </Alert>
  )
}

export default AlertMessage