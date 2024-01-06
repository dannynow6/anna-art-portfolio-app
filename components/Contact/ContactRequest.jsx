'use client'
import React, { useState } from 'react'
import ContactSelect from './ContactSelect'
import Commission from './Commission'

const ContactRequest = () => {
  const [selectedOption, setSelectedOption] = useState('')

  return (
    <>
      <ContactSelect onOptionChange={setSelectedOption} />
      <Commission />
    </>
  )
}

export default ContactRequest
