import Form from 'react-bootstrap/Form';
import React from 'react';
import {Col} from 'react-bootstrap';


export default function FormVPN(){
console.log('hello');
    return (
          
        <Form className='supportformVPN'>

            <Form.Label>Utilisateur</Form.Label>
                <Form.Row>                  
                        <Col>
                        <Form.Control placeholder="Prenom Utilisateur" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Nom Utilisateur" />
                        </Col>
                </Form.Row>

            <Form.Label>Garant</Form.Label>
                <Form.Row>                  
                        <Col>
                        <Form.Control placeholder="Prenom Garant" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Nom Garant" />
                        </Col>
                </Form.Row>

        </Form>
    );
}  