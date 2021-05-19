import Form from 'react-bootstrap/Form';
import React from 'react';
import {Col} from 'react-bootstrap';


export default function FormGestionGroupe(){
console.log('hello');
    return (
    
    <Form className='supportformGestionGroupe'> 
        
        <Form className='supportformAjout'>

            <Form.Group controlId="NomGroupe">
                <Form.Label>Nom du Groupe</Form.Label>
                <Form.Control name='nomgroupe'/>
            </Form.Group>

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

        <Form className='supportformCreation'>

            <Form.Group controlId="NomGroupe">
                <Form.Label>Nom du Groupe</Form.Label>
                <Form.Control name='nomgroupe'/>
            </Form.Group>

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
</Form> 
    );
}  