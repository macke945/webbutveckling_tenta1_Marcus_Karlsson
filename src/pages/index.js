import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"
const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard 
        date= "September 13, 2020"
        title="Lorem ipsum dolor sit amet" 
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
        slug="/test" />
      </Content>
    </Container>
  )
}

export default IndexPage
