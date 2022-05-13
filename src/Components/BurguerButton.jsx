import React from 'react'
import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'


const BurguerButton = () => {
  return (
    <>
        <Burger>
            <GiHamburgerMenu/>
        </Burger> 
    </>
  )
}

export default BurguerButton

const Burger = styled.div `
    color: #333;
    display: none;
`
