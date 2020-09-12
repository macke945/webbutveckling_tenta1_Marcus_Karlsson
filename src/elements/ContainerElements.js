import styled from "styled-components"
//defines grid column sizes and amount and grid rows
export const ContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
    grid-template-rows: 7.8rem 20rem 5rem auto;
    gap: 0 2rem;
//grid columns and sizes for tablet
    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-colums: 2rem repeat(6, 1fr) 2rem;
        grid-gap: 0 1rem;
    }
//grid columns and sizes for mobile
    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    }
`