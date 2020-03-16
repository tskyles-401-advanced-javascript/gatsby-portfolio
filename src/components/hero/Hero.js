import React from "react"
import { Jumbotron } from "react-bootstrap"
import SocialRow from "../SocialRow/SocialRow"
//import custom styles
import "./hero.css"


const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>Hey, I'm a Software developer from Bend, OR.</h1>
      <br />
      <h3>
        Right now I'm using Javascript, Node.js, and React.js to
        design and hack noice websites together on the internet.
      </h3>
      <p>Have a project you'd like to discuss?</p>
      <p>
        Let's chat{" "}
        <a href="mailto:travis.skyles@gmail.com">
          <span style={{ color: "blueviolet" }}>travis.skyles@gmail.com</span>
        </a>
      </p>
    </div>
    <div>
      <SocialRow />
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
