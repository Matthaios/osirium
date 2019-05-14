import React from "react"
import "../theme/style.scss"
import styled from "styled-components"
import bgPattern from "../images/bgPattern.png"
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: var(--dark);
  background-image: linear-gradient(
      rgba(0, 49, 83, 0.05),
      rgba(0, 49, 83, 0.1)
    ),
    url(${bgPattern});
  background-attachment: fixed;
`

const Layout = ({ children }) => (
  <Wrapper>
    <div className="container py-md-5 py-3">
      <div className="card bg-black text-white py-md-5 py-3 shadow">
        {children}
      </div>
    </div>
  </Wrapper>
)

export default Layout
