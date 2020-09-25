import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonWrapper = styled(props => <Link {...props} />) `
    padding: 1rem 1.25rem;
    background-color: ${props => props.theme.colors.main1};
    border-radius: 1rem;
    color: ${props => props.theme.colors.light1};
    font-weight: 700;
    font-size: 1rem;
    width: fit-content;
    transition: filter 0.2s ease;
    cursor: pointer;
    text-decoration: none;
    &:hover,
    &:focus {
        filter: brightness(120%);  
    }
`
//changing the link tag to look like a button with some transitions like when you hover the button it gets 10% brighter
//and when you hover your mouse turns into a pointer, also width: fit-content to fit into the flex box