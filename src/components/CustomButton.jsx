import React from 'react'
import { Button } from '@material-tailwind/react'

const CustomButton = ({title, btnColor, btnSize, btnType,btnVariant, containerStyles, textStyles, handleClick, leftIcon }) => {
  return (
    <Button
        type={ btnType || "button"}
        color={ `${ btnColor }` }
        size={ `${btnSize}` }
        variant={ `${btnVariant}` }
        className={ `${containerStyles}` }
        onClick={handleClick}
        id={`${textStyles}`}
    >
        <div className='flex' >
            <i className={`${leftIcon}`} ></i>
            <span>
            {title}
            </span>
        </div>
    </Button>
  )
}

export default CustomButton