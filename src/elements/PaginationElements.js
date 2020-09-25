import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`
    grid-column: 2 / span 12;
    padding 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    a:nth-child(1) {
        color: ${props => props.isFirst ? props.theme.colors.dark3 : props.theme.colors.dark1};
        pointer-events: ${props => (props.isFirst ? "none" : "auto")};
        cursor: ${props => (props.isFirst ? "default" : "pointer")};
    }

    a:nth-child(2) {
        color: ${props => props.isLast ? props.theme.colors.dark3 : props.theme.colors.dark1};
        pointer-events: ${props => (props.isLast ? "none" : "auto")};
        cursor: ${props => (props.isLast ? "default" : "pointer")};
    }

@media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
}
`
//a tag checks to see if its supposed to be clickable or not, if its not supposed to be it changes values
//for this site its for the next and previous page and it changes depending on which page you're on
export const PaginationElement = styled(props => <Link {...props} />)`
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 400;
    text-decoration: none;
    margin: 0 2rem;

    &:hover, &focus {
        text-decoration: underline;
    }
`
//if you hover over, text gets an underline and also some css for fonts etc