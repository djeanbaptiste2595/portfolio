import { useState, useEffect } from "react"
import {Navbar, Nav, Container} from "react-bootstrap";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // This is a React Hook that adds a scroll event listener to the window object. It sets a state value "scrolled"
    // to either "true" or "false" depending on the current vertical scroll position of the window. If the window's vertical
    //  scroll position is greater than 50, the state value "scrolled" will be set to "true", otherwise it will be set to "false".
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        // In the context of a web application, this code uses the useEffect hook to listen for the scroll event on the window object.
        // Based on the current scroll position of the window (represented by window.scrollY), the state value "scrolled" will be set to
        //  either "true" or "false".   This state value can then be used elsewhere in the application to conditionally apply styles,
        //  hide or show elements, or perform other actions that are dependent on the scroll position of the window.
        // For example, if you have a header that you want to change from transparent to opaque when the user scrolls down,
        // you can use the "scrolled" state value to add or remove a CSS class that changes the background color of the header.
        // When "scrolled" is "true", you can add the class to make the header opaque, and when "scrolled" is "false", you can
        // remove the class to make the header transparent again.

    },[])

    return (
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> */}
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                    {/* <a href="#"><img src={navIcon1} alt="" /></a>
                    <a href="#"><img src={navIcon2} alt="" /></a>
                    <a href="#"><img src={navIcon3} alt="" /></a> */}
                    </div>
                    {/* <HashLink to='#connect'> */}
                    <button className="vvd"><span>Let’s Connect</span></button>
                    {/* </HashLink> */}
                </span>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}
