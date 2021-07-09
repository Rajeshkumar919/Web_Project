import { Row, Col, ListGroup } from "react-bootstrap";
import Container from '@material-ui/core/Container';
import sibalogo from '../resources/images/logo-white.png';
import MyIcons from "./MyIcons"

export default function Footer() {
    return (
        <Container style={{backgroundColor: '#505050', position: 'fixed', bottom: 0}} maxWidth="xl">
            <Row>

                <Col><img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/SIBA_Logo.jpg" height="120px" width="120px" class="img-thumbnail" alt="..." /></Col>
                <Col>
                    <ul className="pt-3">
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                        <li>Link 4</li>
                        <li>Link 5</li>
                    </ul>
                </Col>
                <Col><MyIcons /></Col>
            </Row>
        </Container >
    );
}