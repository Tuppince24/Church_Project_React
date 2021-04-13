import styled from 'styled-components'


export const Container = styled.div` 
display: grid;
grid-template-columns:  auto 100px 100px;
grid-template-areas: 'Space Item Item2'; 
width: 100%;
grid-gap: 10px
`
export const Item = styled.div`
grid-area: Item;
`
export const Item2 = styled.div`
grid-area: Item2;
`
export const Space = styled.div`
grid-area: Space;
`
