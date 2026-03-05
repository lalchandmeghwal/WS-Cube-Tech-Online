import React from 'react'

const Button = ({titile, style}) => {
  return (
      <div>
          <button className={`cursor-pointer bg-[linear-gradient(to_right,#4a9c46,#3db138,#40d954,#5cc044,#4b9f45)] ${style} `}>
          {titile}
          </button>
          
    </div>
  )
}

export default Button
