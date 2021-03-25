import React from "react"
// import { NavLink } from "react-router-dom"
import { Wrapper, Logo, Space, Navlink, Bar, FaithLink} from './Elements'

function Navber2() {
    return(
        <Wrapper>
            <FaithLink style={{fontSize: '10px', padding: '0', margin: '0'}}
            >@Faith Tabernacle Family Life 
            </FaithLink>
            <Logo>hello</Logo>
            <Space/>
            <Navlink to="/" activeStyle>Home</Navlink>
            <Navlink to="/" activeStyle>Prayer</Navlink>
            <Navlink to="/" activeStyle> Video</Navlink>
            <Bar/>
        </Wrapper>
    )
}

export default Navber2;