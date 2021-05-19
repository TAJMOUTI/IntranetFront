import Form from 'react-bootstrap/Form';
import React from 'react';




export default function FormMateriel(){
console.log('hello');
    return (
          
            <Form className='supportformMateriel'>

                <Form.Group controlId="TypeMateriel">
                    <Form.Label>Type de Materiel</Form.Label>
                    <Form.Control placeholder="Souris, Casque, ..." name='typemateriel'/>
                </Form.Group>

                <Form.Group controlId="Quantité">
                    <Form.Label>Quantité</Form.Label>
                    <Form.Control type="number" name='quantité'/>
                </Form.Group>

            </Form>
    );
}  