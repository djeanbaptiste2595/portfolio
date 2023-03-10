import python from "../assets/img/py.png";
import html1 from "../assets/img/html1.png";
import css from "../assets/img/css.png";
import post from "../assets/img/post.png";
import django from "../assets/img/django.png";
import docker from "../assets/img/docker.png";
import agile from "../assets/img/agile.png";
import javascript from "../assets/img/js.png";
import react from "../assets/img/react.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={[html1]} alt="img" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={[css]} alt="img" />
                                    <h5>CSS3</h5>
                                </div>
                                <div className="item">
                                    <img src={[javascript]} alt="img" />
                                    <h5>JAVASCRIPT</h5>
                                </div>
                                                                <div className="item">
                                    <img src={[react]} alt="img" />
                                    <h5>REACT</h5>
                                </div>
                                <div className="item">
                                    <img src={[python]} alt="img" />
                                    <h5>PYTHON</h5>
                                </div>
                                <div className="item">
                                    <img src={[django]} alt="img" />
                                    <h5>DJANGO</h5>
                                </div>
                                <div className="item">
                                    <img src={[agile]} alt="img" />
                                    <h5>AGILE</h5>
                                </div>
                                <div className="item">
                                    <img src={[post]} alt="img" />
                                    <h5>POSTGRESSQL</h5>
                                </div>
                                <div className="item">
                                    <img src={[docker]} alt="img" />
                                    <h5>DOCKER</h5>
                                </div>

                                {/* <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Web Development </h5>
                                </div> */}
                                {/* <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Web Development </h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development </h5>
                                </div> */}

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="img" />


        </section>
    )
}
