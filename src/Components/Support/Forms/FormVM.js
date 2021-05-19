import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import React, { useState } from 'react';


export default class FormVM extends React.Component {
    constructor(props){  
        super(props);  
        this.state = { //Etat intermediaire d'enregistrement avant de le faire en BDD
            prenomUtilisateur:'',  
            nomUtilisateur:'',
            prenomGarant:'',  
            nomGarant:'',  
            machineVm:'',
            osVersion: '',
            dateFin:'',
            observation:'',
            cpu:'',
            ram:'',
            disque:'',
            backupVm:'',
            montage:'',
            type:'',
            taille:'',
            backupData:'',
            sitesAccessibles:'',

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
        console.log(this.state);
    const {prenomUtilisateur, nomUtilisateur, prenomGarant, nomGarant, machineVm, osVersion, dateFin, observation, cpu, ram, disque, backupVm, montage, type, taille, backupData, sitesAccessibles} = this.state;
    return (
        <Form className='supportformVM'>

            <Form.Label>Utilisateur</Form.Label>
            <Form.Row>                  
                    <Col>
                    <Form.Control placeholder="Prenom Utilisateur" value={prenomUtilisateur} name='prenomUtilisateur' onChange={this.onChange} />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Nom Utilisateur" value={prenomUtilisateur} name='prenomUtilisateur' onChange={this.onChange} />
                    </Col>
            </Form.Row>

            <Form.Label>Garant</Form.Label>
            <Form.Row>                  
                    <Col>
                    <Form.Control placeholder="Prenom Garant" value={prenomUtilisateur} name='prenomUtilisateur' onChange={this.onChange}/>
                    </Col>
                    <Col>
                    <Form.Control placeholder="Nom Garant" value={prenomUtilisateur} name='prenomUtilisateur' onChange={this.onChange}/>
                    </Col>
            </Form.Row>

            <Form.Group controlId="MachineVM">
                <Form.Label>Machine VM</Form.Label>
                <Form.Control placeholder="Nom attendu" value={machineVm} name='machineVm' onChange={this.onChange}/>
            </Form.Group>

            <Form.Group controlId="OS+Version">
                <Form.Label>OS + Version</Form.Label>
                <Form.Control placeholder="Windows Server 2016..."  value={osVersion} name='osVersion' onChange={this.onChange}/>
            </Form.Group>

            <Form.Group controlId="dateFin">
                <Form.Label>Date de Fin éstimée</Form.Label>
                <Form.Control value={dateFin} name='dateFin' onChange={this.onChange}/>
            </Form.Group>

            <Form.Group controlId="Observation">
                <Form.Label>Observation</Form.Label>
                <Form.Control as="textarea" rows={2}  placeholder="Demande particulières" value={observation} name='observation' onChange={this.onChange}/>
            </Form.Group>

            <Form.Group controlId="CPU">
                <Form.Label>CPU*</Form.Label>
                <Form.Control type="number" placeholder="40 max" value={cpu} name='cpu' onChange={this.onChange} />
            </Form.Group>

            <Form.Group controlId="RAM">
                <Form.Label>RAM en Go*</Form.Label>
                <Form.Control type="number" placeholder="~256 max" value={ram} name='ram' onChange={this.onChange}/>
            </Form.Group>

            <Form.Group controlId="Disque">
                <Form.Label>Disque en Go* (pour Os de la VM)</Form.Label>
                <Form.Control type="number" placeholder="~100Go" value={disque} name='disque' onChange={this.onChange}/>
            </Form.Group>

            <Form.Group controlId="BackupVM">
                <Form.Label>Backup VM</Form.Label>
                <Form.Control placeholder="Périodicité (hebdo / mensuel, etc.)" value={backupVm} name='backupVm' onChange={this.onChange}/>
            </Form.Group>

            <Form.Group controlId="NomMontageVersReseau">
                <Form.Label>Nom Montage Vers Reseau</Form.Label>
                <Form.Control   value={montage} name='montage' onChange={this.onChange}/>
            </Form.Group>

            <Form>
            <Form.Label>Type</Form.Label>
                <div key={`inline-${type}`} className="mb-2">
                <Form.Check inline label="NFS: Unix" onChange={() =>this.setState({type:'NFS: Unix'})} type="radio"  />
                <Form.Check inline label="SMB: Windows" onChange={() => this.setState({type:'SMB: Windows'})} type="radio" />
                </div>
            </Form>

            <Form.Group controlId="Taille">
                <Form.Label>Taille en Go </Form.Label>
                <Form.Control type="number" placeholder="~100Go" value={taille} name='taille' onChange={this.onChange}/>
            </Form.Group>

            <Form.Group controlId="BackupData">
                <Form.Label>Backup Data</Form.Label>
                <Form.Control placeholder="Périodicité (hebdo / mensuel, etc.)"  value={backupData} name='backupData' onChange={this.onChange}/>
            </Form.Group>

            <Form.Group controlId="SitesAccessibles">
                <Form.Label>Sites Accessibles par Internet</Form.Label>
                <Form.Control placeholder="La liste des sites auxquelsle serveurdoit avoir accès (mise à jour Microsoft, pip, etc.)"  value={sitesAccessibles} name='sitesAccessibles' onChange={this.onChange}/>
            </Form.Group>

        </Form>
    );
}
}  
