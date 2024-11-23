import React from 'react'
import FormElement from './FormElement'

const Form = () => {
  return (
    <section className="Form">
        <h2>Enter your Details</h2>
        <form action="">
            {['Name' , 'Designation' , 'Phone' , "Email"].map((field , key)=>(
               <FormElement id={field} label={field} keyup={key}/> 
            ))}
        </form>
    </section>
  )
}

export default Form