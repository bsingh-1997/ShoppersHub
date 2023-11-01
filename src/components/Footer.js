import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
`
const Footr = styled.div`
background-color:black;
color:white;
`

export default function Footer() {
  return (
    <Footr>
        <hr></hr>
        <Logo><h1>ShoppersHub</h1></Logo>
        <h3>ShoppersHub - Your One-Stop Shopping Destination.</h3>
        <p style={{padding:"10px"}}>Welcome to ShoppersHub, your ultimate destination for all things shopping! Explore an endless world of choices, from the latest gadgets to fashionable apparel, home essentials, and much more. With a commitment to quality, convenience, and unbeatable deals, we're here to make your shopping experience delightful and hassle-free. Discover, shop, and elevate your lifestyle with ShoppersHub today!</p>
    </Footr>
  )
}
