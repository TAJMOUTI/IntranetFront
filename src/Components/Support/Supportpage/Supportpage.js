import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Supportpage.css';
import React from 'react';
import FormVM from '../Forms/FormVM';
import FormMateriel from '../Forms/FormMateriel';
import FormVPN from '../Forms/FormVPN';
import FormLicence from '../Forms/FormLicense';
import FormCompteEnclave from '../Forms/FormCompteEnclave';
import FormGestionGroupe from '../Forms/FormGestionGroupe';
// import FormGestionGroupe from '../Forms/FormGestionGroupe';
import { map, find } from 'lodash';

export default class Supportpage extends React.Component{
    
    constructor(props){  
        super(props);  
        this.state = { //Etat intermediaire d'enregistrement avant de le faire en BDD
            date:'',  
            nom:'',
            prenom: '',
            email:'',
            typeDemande:'',
            demande: {},
          }  
        this.onChange = this.onChange.bind(this); 
        this.handleForm = this.handleForm.bind(this);  

    } 

     

      handleForm(type) { //Fonction qui affiche le formulaire selon le type de demande
        console.log(type);

        // const forms = {
        //     'VM': '<FormVM/>',
        //     'Material': <FormMateriel/>,
        //     'Gestion de Groupe': <FormGestionGroupe/>,
        //     'VPN': <FormVPN/>,
        //     'License': <FormLicence/>,
        //     'Compte Enclave': <FormCompteEnclave/>,
        // }

        // const formChoice = find(form => form.id === type);
        // console.log(formChoice);

        // if (type==='VM'){
        //     return (<FormVM/>);          
        // } else if (type==='Materiel'){
        //     return (<FormMateriel/>);          
        // }

        switch (type) {
            case 'VM':
                return (<FormVM/>);
            case 'Gestion de Groupe':
                return (<FormGestionGroupe/>);                      
            case 'Materiel':
                return (<FormMateriel/>);
            case 'VPN':
                return (<FormVPN/>);
            case 'License':
                return (<FormLicence handleCallback={this.handleCallback} />);
            case 'Compte Enclave':
                return (<FormCompteEnclave/>);
            default:
                return null;
         }
      }

      handleCallback = (data) => {
          console.log("handleCallback");
          this.setState({
              demande: data,
          })
      };
      async onChange(e) {  // Chaque changement dans le formulaire est enregistré dans le state
        await this.setState({
          [e.target.name]: e.target.value
        })
      }

    render(){
        const { date, nom, prenom, email, typeDemande } = this.state;
        
        return (
            <div>
                <Form className='supportform'>
                    <Form.Group controlId="dateDemande">
                        <Form.Label>Date de Demande</Form.Label>
                        <Form.Control value={date} name='date' onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control placeholder="Nom" value={nom} name='nom' onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="firstName">
                        <Form.Label>Prenom</Form.Label>
                        <Form.Control placeholder="Prenom" value={prenom} name='prenom'onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Adresse Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" value={email} name='email' onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="typeDemande">
                        <Form.Label>Type de Demande</Form.Label>
                        <Form.Control as="select" defaultValue="Choix de la Demande" value={typeDemande} name='typeDemande' onChange={this.onChange}>
                        <option>Choix de la Demande</option>
                        <option>VM</option>
                        <option>Gestion de Groupe</option>
                        <option>Materiel</option>
                        <option>VPN</option>
                        <option>License</option>
                        <option>Compte Enclave</option>
                        </Form.Control>
                    </Form.Group>
                    
                </Form>

                {this.handleForm(typeDemande)}

                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Justificatif</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Veuillez écrire les raisons de cette demande"/>
                    </Form.Group>
                </Form>
            </div>
        );
}

}