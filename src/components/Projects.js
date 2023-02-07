import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/carcar.png";
import projImg2 from "../assets/img/Dimension.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
        title: "CarCar",
        description: "User-friendly car dealership application",
        imgUrl: projImg1,
        link: "#",
        },
        {
        title: "Dimension & Coding",
        description: "Fully Deployed Interactive coding Game",
        imgUrl: projImg2,
        link: "https://ground7rule.gitlab.io/ground-7-rule/",
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
        link: "#",
        },

    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p> Write something else here</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            onClick={() => window.location.href = project.link}
                                            />
                                            )
                                        })
                                    }
                                    </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">Say something</Tab.Pane>
                                    <Tab.Pane eventKey="third">Say something else </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        <img className="background-image-right" src={colorSharp2}></img>
    </section>
    )
}
