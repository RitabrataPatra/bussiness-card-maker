import React from 'react'
import FormElement from './FormElement'

const Form = () => {
  return (
    <section className="Form">
        <h2>Enter your Details</h2>
        <form action="">
            <FormElement id="name" label="Name"/>
            <FormElement id="Designation" label="Designation"/>
            <FormElement id="Phone" label="Phone"/>
        </form>
    </section>
  )
}

export default Form