import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"
import project1Picture from "../images/portfolio/cabin.png"
import project2Picture from "../images/portfolio/cake.png"
import project3Picture from "../images/portfolio/game.png"
import "./index.css"



/*######### PROJECT OBJECTS TEMPLATE################
import projectPicture from ""
const projectProject = {
  title: "",
  date: "",
  decription: "",
  sourceURL: "",
  hostedURL: "",
}
#####################################################
*/

//TODO: Make this into an array with objects and map through them instead down below.

//Project 1

const project1 = {
  title: "RESTy",
  date: "02/2020",
  decription:
    "React based app to test CRUD functionality against an API",
  sourceURL: "https://github.com/tskyles-401-advanced-javascript/RESTy",
  hostedURL: "https://working.d2yx5do08djvpf.amplifyapp.com/",
}

//Project 2

const project2 = {
  title: "Pocket Gallery",
  date: "11/2019",
  decription:
    "Pocket gallery is a web application that utilizes the Havard Art Museum API. Users can search for works by title or artist. Users can also create their own galleries to which they can save specific pieces to that are returned from the API. Users can update a work and it's details as well as which gallery it belongs to.",
  sourceURL: "https://github.com/Renaissance-devs/pocket_gallery",
  hostedURL: "http://www.pocketgallery.art/",
}

//Project 3

const project3 = {
  title: "DnD Character Tracker",
  date: "10/2019",
  decription:
    "A web-based service to generate DnD 5e characters and track their progress across sessions.",
  sourceURL: "https://github.com/Team-Uno/DnD-Character-Tracker",
  hostedURL: "https://dnd-character-tracker.netlify.com/",
}

const project4 = {
  title: "REST API",
  date: "10/2019",
  decription:
    "Node.js and Express API with authentication",
  sourceURL: "https://github.com/tskyles-401-advanced-javascript/401-Final-API-Server/tree/master/src/models",
}

export default () => (
  <div className="App">
    <Layout>
      {/*########### MyJumbo PROPS ##########
    title: The title of the jumbotron
    body: The body of the Jumbotron
    */}
      <MyJumbo
        title={"Projects Portfolio"}
        body={"I think the best way of learning is by building Stuff."}
      />
      <hr />

      {/* TODO: Move the project objects into an array and map through them below. DRY is better. */}

      <Container style={{ marginTop: "2.5rem" }}>
        {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project1Picture}
              title={project1.title}
              date={project1.date}
              description={project1.decription}
              sourceURL={project1.sourceURL}
              hostedURL={project1.hostedURL}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project2Picture}
              title={project2.title}
              date={project2.date}
              description={project2.decription}
              sourceURL={project2.sourceURL}
              hostedURL={project2.hostedURL}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project3Picture}
              title={project3.title}
              date={project3.date}
              description={project3.decription}
              sourceURL={project3.sourceURL}
              hostedURL={project3.hostedURL}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project3Picture}
              title={project4.title}
              date={project4.date}
              description={project4.decription}
              sourceURL={project4.sourceURL}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
