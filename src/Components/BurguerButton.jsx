import React from 'react'
import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'


const BurguerButton = () => {
  return (
    <div>
        <Burger>
            <GiHamburgerMenu/>
        </Burger>
        
    </div>
  )
}

export default BurguerButton

const Burger = styled.div `
    color: #333;
    display: none;
`
