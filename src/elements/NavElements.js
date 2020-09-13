import styled from "styled-components"

//sets at what grid the nav should be
export const NavWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1/ 2;
    display: flex;
    align-items: center;

    & img {
        height: 30px;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`
//css for nav elements