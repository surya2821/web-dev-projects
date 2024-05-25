import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/neom.png";
import projImg2 from "../assets/img/neom2.png";
import projImg3 from "../assets/img/neom3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Online-Health-Consultency-Website",
      description: "Design,Development & Deployment",
      imgUrl: projImg1,
    },
    {
      title: "Event Management System",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Telegram-ChatBot",
      description: "AI/AUTOMATION",
      imgUrl: projImg3,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"Proficient in building full-stack applications using React for frontend, Spring Boot for backend, and MongoDB for database management. Skilled in data science techniques and AI automation, leveraging Python libraries for analysis and automation tasks."</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Summary</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideIn" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Experienced in Java full-stack development, adept at crafting robust backend systems with Spring Boot and Hibernate, while delivering dynamic user interfaces using Java-based frameworks like Thymeleaf or JSF. Proficient in database management and RESTful API integration, ensuring seamless end-to-end functionality in web applications.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Seasoned in AI and automation, currently leveraging these skills in the development of Learning Management Systems (LMS), optimizing workflows, and implementing intelligent features such as personalized content recommendations and automated grading systems. Proficient in deploying machine learning models and designing automated processes to enhance user experiences and streamline administrative tasks within educational platforms</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
