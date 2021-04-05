import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    background: purple;
    width: 100%;
    grid-template-columns:100px auto 100px 100px 100px;
    grid-template-areas:
     "FaithLink FaithLink FaithLink FaithLink FaithLink"
     "Logo space NavLink NavLink NavLink"; 
    `;
export const FaithLink = styled.p`
    color: purple;
    grid-area: FaithLink;
    color: white;
    `
export const Logo = styled.p`
    color: blue;
    padding-left: 0;
    grid-area: Logo;
    color:white;
    `;
export const Navlinkcontainer = styled.p`
    color: #fff;
    `;
export const Bar = styled.p`
    display: none;
    `;
export const Space =styled.div``