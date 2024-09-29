import React, { useState } from 'react'
import Content from './Content';
import png1 from '../assets/image.webp'

const Header = () => {

    const [BMI, setBMI] = useState('')
    const [status, setStatus] = useState('')
    const [toggle, setToggle] = useState(false)

  return (
    <>
    <Content
    BMI = {BMI}
    status = {status}
    toggle = {toggle}
    img={png1}
    setBMI = {setBMI}
    setStatus = {setStatus}
    setToggle = {setToggle}
    />
</>
  )
}

export default Header