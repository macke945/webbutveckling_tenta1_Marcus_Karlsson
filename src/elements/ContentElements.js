import styled from "styled-components"

export const ContentWrapper = styled.main`
    grid-column: 3 / span 10;
    grid-row: 3 / span 5;
    background-color: ${props => props.theme.colors.light2};
    padding: ${props => `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
    box-shadow: ${props => props.theme.shadows.shadow1};
    z-index: 10;

@media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 8;
}

@media ${props => props.theme.breakpoints.mobile} {
    padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
}
`
//sets where the content is supposed to be on the site and the padding etc