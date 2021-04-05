import React from "react"
// import { NavLink } from "react-router-dom"
import { Wrapper, Logo, Space, Navlinkcontainer, Bar, FaithLink} from './Elements'
import { NavLink } from 'react-router-dom'


function Navber2() {
    return(
        <Wrapper>
            <nav>
                <FaithLink style={{fontSize: '10px', padding: '0', margin: '0'}}
                >@Faith Tabernacle Family Life 
                </FaithLink>
                <Logo>hello</Logo>
                <Space/>
                <Navlinkcontainer>
                    <NavLink to='/Home' style={{color: 'white'}} activeClassName="selected">Home</NavLink>
                </Navlinkcontainer>
                <Bar/>
            </nav>
        </Wrapper>
    )
}

export default Navber2;