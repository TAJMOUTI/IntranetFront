import {Container} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import {Card, Button} from 'react-bootstrap';
import './Homepage.css';

export default function Homepage(){

    return (
         <div className="homepage">
            <Container className="m-auto">            
                <Row>
                    <Col className="col-4">1 of 2</Col>
                    <Col className="col-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
             </Container>
        </div>
    );
}