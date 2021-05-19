import Form from 'react-bootstrap/Form';
import React from 'react';
import {Col} from 'react-bootstrap';


export default function FormCompteEnclave(){
console.log('hello');
    return (
          
        <Form className='supportformCompteEnclave'>

            <Form.Label>Utilisateur</Form.Label>
                <Form.Row>                  
                        <Col>
                        <Form.Control placeholder="Prenom Utilisateur" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Nom Utilisateur" />
                        </Col>
                </Form.Row>

                <Form.Group controlId="NomProjet">
                    <Form.Label>Nom du Projet</Form.Label>
                    <Form.Control name='nomposte'/>
                </Form.Group>

                <Form.Group controlId="NumCommande">
                    <Form.Label>Numéro Commande</Form.Label>
                    <Form.Control type='number' name='numcommande'/>
                </Form.Group>

                <Form.Group>
                    <Form.File id="Documents" label="Documents" />
                </Form.Group>
                

        </Form>
    );
}