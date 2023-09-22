import React from 'react'

const Input = ({label , type ='text' , state , setState}) => {
  return (
    <div>
       <div className="form-floating">
            <input type={type} className="form-control" id="floatingInput" placeholder={label} />
            <label htmlFor="floatingInput">{label}</label>
          </div>
    </div>
  )
}

export default Input