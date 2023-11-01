import React from 'react'
import styled from 'styled-components'

const Ulist = styled.div`
list-style:none;
align-self:center;
display:flex;
`

const Heading = styled.div`
width:30%;
@media(max-width: 650px){
margin-left: auto;
width: 50vw;
margin-right: auto;
}
`

const Buttons = styled.div`
display:flex;
padding-right:5%;
margin-left:auto;
`

const Body = styled.div`

display:flex;
position:absolute;
width:100%;
@media(max-width: 750px){
 display:grid;  
 position:relative; 
}
`
const Li = styled.div`
margin-right:20px;
`
const Imag = styled.div`
height:60vh;
overflow:hidden;
@media(max-width: 750px){
    display:none;   
   }
`

export default function Header() {
    return (
        <>
            <Body>
                <Heading ><h1>ShoppersHub</h1></Heading>
                <Buttons>
                    <Ulist>
                        <Li><li>Home</li></Li>
                        <Li><li>About</li></Li>
                        <Li><li>Contact Us</li></Li>
                        <Li><li><button style={{ backgroundColor: "black", color: "white", borderRadius: "7px" }}>SignUp</button></li></Li>
                    </Ulist>
                </Buttons>
            </Body>
            <Imag> <img style={{ width: "100vw", marginLeft: "auto", marginRight: "auto" }} src='https://secureservercdn.net/198.71.233.1/dd8.07d.myftpupload.com/wp-content/uploads/2021/02/ecommerce-marketing.jpg?time=1618438893'></img> </Imag>
        </>
    )
}
