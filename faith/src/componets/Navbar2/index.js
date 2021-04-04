import React from "react"
import { Link } from "react-router-dom"
import { Wrapper, Logo, Space, Navlink, Bar, FaithLink} from './Elements'

function Navber2() {
    return(
        <Wrapper>
            <FaithLink style={{fontSize: '10px', padding: '0', margin: '0'}}
            >@Faith Tabernacle Family Life 
            </FaithLink>
            <Logo>hello</Logo>
            <Space/>
            <Navlink>
                <Link
                    to="/Home" activeStyle> Home 
                </Link>
            </Navlink>
            <Navlink>
                 prayer
            </Navlink>
            <Navlink activeStyle> videos</Navlink> 
            <Bar/>
        </Wrapper>
    )
}

export default Navber2;