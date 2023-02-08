import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import logo2 from '../assets/img/logo2.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
    return (
        <footer className="footer">
        <Container>
            <Row className="align-items-center">
            {/* <MailchimpForm /> */}
            <Col size={12} sm={6}>
                <img src={logo2} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/davidjeanbaptiste/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.instagram.com/david.jean.baptiste/"><img src={navIcon3} alt="" /></a>
                <a href="https://gitlab.com/djeanbaptiste2595"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
            </Col>
            </Row>
        </Container>
        </footer>
    )
    }
