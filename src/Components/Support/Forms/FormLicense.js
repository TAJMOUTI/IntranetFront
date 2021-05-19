import Form from 'react-bootstrap/Form';
import React from 'react';
import {Col} from 'react-bootstrap';


export default class FormLicense extends React.Component{

    constructor(props){  
        super(props);  
        this.state = { //Etat intermediaire d'enregistrement avant de le faire en BDD
            prenomUtilisateur:'',  
            nomUtilisateur:'',  
            nomPoste:'',
            logiciel: '',
            version:'',
          }  
        this.onChange = this.onChange.bind(this); 
    } 

    async onChange(e) {  // Chaque changement dans le formulaire est enregistré dans le state
        await this.setState({
          [e.target.name]: e.target.value
        })
        console.log(this.state);
        this.props.handleCallback(this.state);
      }

render (){
    const { prenomUtilisateur, nomUtilisateur, nomPoste, logiciel, version } = this.state;
    return (
        <Form className='supportformLicense'>
            <Form.Label>Utilisateur</Form.Label>
                <Form.Row>                  
                        <Col>
                        <Form.Control placeholder="Prenom Utilisateur"  value={prenomUtilisateur} name='prenomUtilisateur' onChange={this.onChange}/>
                        </Col>
                        <Col>
                        <Form.Control placeholder="Nom Utilisateur"  value={nomUtilisateur} name='nomUtilisateur' onChange={this.onChange}/>
                        </Col>
                </Form.Row>

                <Form.Group controlId="NomPoste">
                    <Form.Label>Nom du Poste</Form.Label>
                    <Form.Control value={nomPoste} name='nomPoste' onChange={this.onChange}/>
                </Form.Group>

                <Form.Group controlId="Logiciel">
                    <Form.Label>Logiciel</Form.Label>
                    <Form.Control  value={logiciel} name='logiciel' onChange={this.onChange}/>
                </Form.Group>

                <Form.Group controlId="Version">
                    <Form.Label>Version</Form.Label>
                    <Form.Control value={version} name='version' onChange={this.onChange}/>
                </Form.Group>
                

        </Form>
    );
}
}  