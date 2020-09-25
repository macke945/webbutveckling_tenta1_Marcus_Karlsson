import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { NavWrapper, H3 } from "../elements"

export const Nav = () => {

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "logo.svg"}) {
                publicURL
            }
        }
    `)

    return (
        <NavWrapper>
            <Link to="/">
                <img src={data.logo.publicURL} alt="My Logo" />
            </Link>
            <H3>
                other nav item
            </H3>
        </NavWrapper>
    )
}

//nav settings and logo
//added custom H3 tag to show that its possible to add other nav items if needed next to logo.