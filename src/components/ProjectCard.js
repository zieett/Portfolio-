import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    const handleGoToLink = () => {
        window.open(link);
    };
    return (
        <Col size={12} sm={6} md={6}>
            <div className="proj-imgbx" onClick={handleGoToLink} style={{ cursor: "pointer" }}>
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};
