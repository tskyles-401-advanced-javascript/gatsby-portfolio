import { Link } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import image from "../../images/portfolio/cabin.png"
import ProjectCard from "../portProjectCard/ProjectCard"
import "./projects.css"



const Projects = () => (
  <React.Fragment>
    <Container fluid>
      <h3 style={{ marginBottom: "1rem" }}> Latest Projects</h3>
      {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
      <ProjectCard
        imageSrcPath={image}
        title={"RESTy"}
        date={"02/2020"}
        description={
          "React based app to test CRUD functionality against an API"
        }
        sourceURL={"https://github.com/tskyles-401-advanced-javascript/RESTy"}
        hostedURL={"https://working.d2yx5do08djvpf.amplifyapp.com/"}
      />
      <Link to="/projects" className="blueViolet">
        Go to Projects page ---->
      </Link>
    </Container>
  </React.Fragment>
)

export default Projects
