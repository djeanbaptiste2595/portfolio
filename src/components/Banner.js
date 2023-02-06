import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>{`Hi I'm David! `}<span className="wrap">web developer</span></h1>
                        <p> About me</p>
                        <button onClick={() => console.log('connect')}> Let's connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={} alt="Headder Img"  />>

                    </Col>
                </Row>
            </Container>
        </section>
     )
}
