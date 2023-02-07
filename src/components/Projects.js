import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {
    const project = [
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
        },

    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}
