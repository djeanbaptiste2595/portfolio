import { Col } from "react-bootstrap";

// To add an onclick function that redirects you to the deployed site,
// you need to add an onClick property to the div containing the image.
// This can be done as follows:
export const ProjectCard = ({ title, description, imgUrl, link }) => {
    const redirectToSite = () => {
        // In this example, the function redirectToSite will only redirect to the site if siteUrl
        // is truthy (i.e. not null, undefined, false, 0, NaN, or an empty string). For projects
        // where siteUrl is falsy, nothing will happen when the div is clicked.
        if (link) {
        window.location.href=link;
        }
    }
    return (
        <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx" onClick={redirectToSite}>
            <img src={imgUrl} alt="img" />
            <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            </div>
        </div>
        </Col>
    )
    }
