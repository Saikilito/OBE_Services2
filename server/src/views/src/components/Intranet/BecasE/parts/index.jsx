import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import History from '../../../Routes/History'

import { Container, Row, Col, Input, Button, Fa } from 'mdbreact';
import Id from "./Id";
import Academic from "./Academic";
import Economic from "./Economic";
import Horario from "./Horario";

class Apply extends Component {
    constructor() {
        super();
        this.state = {
            selector: "scholarship",
            specific:'',
        }
        this.onHandlerButton = this.onHandlerButton.bind(this);
        this.onHandlerSelector = this.onHandlerSelector.bind(this);
    }
    render() {
        return (
            <form className="border-primary bg-light mt-5 mb-5">
                <div className="form-group container mr-5">
                    <Fa icon="pencil" size="lg" className="mr-3 mb-3" />
                    <label className="label h4 text-center lead">   Seleccione un tipo de Beca</label><br />
                    <select onChange={this.onHandlerSelector} name="selector" className="form-control">
                        <option value="scholarship">Beca Estudio de pregrado</option>
                        <option value="assitantship">Beca Ayudantia de pregrado</option>
                        <option value="economicHelp">Ayuda Economica</option>
                        <option value="other">Otro</option>
                    </select>
                </div>
                {
                    this.onHandlerButton()
                }
                <div className="d-flex justify-content-center mt-5">
                    <Button onClick={this.handlerOnClick} color="elegant" className="p-3">
                        <span>E n v i a r </span><Fa icon="paper-plane-o" className="ml-3" lteroze="" />
                    </Button>        
                </div>
            </form>
        );
    }

    
    onHandlerSelector(e) {
        const option = e.target.value
        this.setState({
            selector: option
        })
    }

    handlerOnClick = () =>
    {
        let IdData = localStorage.getItem('IdData'),
            EconomicData = localStorage.getItem('EconomicData'),
            AcademicData = localStorage.getItem('AcademicData'),
            ScheduleData = localStorage.getItem('ScheduleData')

        if(IdData && EconomicData && AcademicData)
        {
            let id = JSON.parse(IdData),
                socioeconomic = JSON.parse(EconomicData),
                academicData = JSON.parse(AcademicData),
                schedule = JSON.parse(ScheduleData),
                beca
            
            if (this.state.selector === 'scholarship')
                beca = 'Estudiantil'
            else if (this.state.selector === 'assitantship')
                beca = 'Ayudantia'
            else if (this.state.selector === 'economicHelp')
                beca = 'Ayuda Economica'
            else if (this.state.selector === 'other')
                beca = this.state.specific

            let Data = {
                scholarship:beca,
                scholarshipStatus:'waiting',
                request:{
                    id,
                    socioeconomic,
                    academicData,
                    schedule
                }
            }

            console.log(Data)

            Axios({
                method:'put',
                url: `/api/users/${this.props.user._id}`,
                headers: { 'authorization': localStorage.Token },
                data:Data
              })
                .then(res => {
                    console.log("Los datos se han cambiado satisfactoriamente");
                    localStorage.removeItem('IdData');
                    localStorage.removeItem('AcademicData');
                    localStorage.removeItem('ScheduleData');
                    localStorage.removeItem('EconomicData');
                    History.push('/panele');
                    window.location.reload();
                })
                .catch(err =>{
                    console.log('Error en el requets')
                    console.error(err)
                });
        }
        else
        {
            alert('Por favor verifique que todos sus datos estes correctos antes de enviar')
            return null
        }
    }

    handlerOthers = (e) => 
    {
        this.setState({specific:e.target.value})
    }

    onHandlerButton(e) {

        const option = this.state.selector,
            Block = () =>
                <Container>
                    <Row>
                        {
                            this.state.selector === 'assitantship' ? (
                                <Fragment>
                                    <Col sm="1"></Col>
                                    <Col sm="12" md="5" className="mt-2" >
                                        <Id />
                                        <div className="mt-5">
                                            <Horario />
                                        </div>
                                    </Col>
                                    <Col sm="12" md="5" className="mt-2">
                                        <Economic/>
                                        <div className="mt-5">
                                            <Academic  />
                                        </div>
                                    </Col>
                                </Fragment>
                            ) : (
                                    <Fragment>
                                        <Col sm="1"></Col>
                                        <Col sm="12" md="5" className="mt-2" >
                                            <Id/>
                                            <div className="mt-5">
                                                <Academic />
                                            </div>
                                        </Col>
                                        <Col sm="12" md="5" className="mt-2">
                                            <Economic />
                                        </Col>
                                    </Fragment>
                                )
                        }
                    </Row >
                </Container >

        switch (option) {
            default:
                return (
                    <div>
                        <p className="h5 text-center mb-4">Beca Estudio</p>
                        <Block />
                    </div>)

            case 'assitantship':
                return (
                    <div>
                        <p className="h5 text-center mb-4">Beca Ayudantía</p>
                        <Block />
                    </div>)

            case 'economicHelp':
                return (
                    <div>
                        <p className="h5 text-center mb-4">Ayuda Economica</p>
                        <Block />
                    </div>)
            case 'other':
                return (
                    <div>
                        <p className="h5 text-center mb-4 pr-5 pl-5">Otro</p>
                        <div className="container">
                            <Input onChange={this.handlerOthers} name="serch" hint="Especifique" type="text" containerClass="active-cyan active-pink-2 m-1 mt-3 mb-5 pr-5 pl-5" />
                        </div>
                        <Block />
                    </div>)
        }
    }
}

export default Apply;





