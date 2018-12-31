import React, { Component } from 'react';



import { Card, CardBody, Input } from 'mdbreact'

class ID extends Component {
    state = {
        ready: false,
        cDisabled: true,
        placeOfBirth: '',
        birthDate: '',
        stateOfBirth: '',
        age: '',
        civilStatus: '',
        phoneNumber: '',
        studyDirection: '',
        residencePhone: '',
        stateResidence: '',
        municipalityResidence: '',
        parishResidence: '',
        homeStudent: '',
        homeState: '',
        homeMunicipality: '',
        homeParish: '',
        homePhone: '',
        otherPhone: ''
    }
    handlerChange = (e) => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })

    }
    formRedy = (e) => {
        e.preventDefault();

        for (let i in this.state) {
            if (this.state[i] === "") {
                alert("Por favor verifique todos los campos")
                console.log(this.state,"estado")
                console.log(i)
                this.setState({ redy: false, cDisabled:false })
                return null
            }
        }

        let JSONData = JSON.stringify(this.state)
        !this.state.ready ? localStorage.setItem('IdData', JSONData) : localStorage.removeItem('IdData')
        this.setState({ ready: !this.state.ready })
    }

    handleCheckbox = () =>
    {
        this.setState({cDisabled:true})
    }
    render() {

        return (
            <Card className="shadow">
                <CardBody>
                    <p className="h4 text-center py-4">DATOS DE IDENTIFICACIÓN</p>
                    <div className="grey-text">
                        <Input name="placeOfBirth" label="Lugar de nacimiento" onChange={this.handlerChange} icon="user" type="text" group validate error="wrong" success="right" disabled={this.state.ready} />
                        <Input name="birthDate" group type="date" onChange={this.handlerChange} icon=" fa-clock-o" validate error="wrong" success="left" disabled={this.state.ready} />
                        <Input name="stateOfBirth" label="Estado donde nació" onChange={this.handlerChange} group type="text" validate error="wrong" success="right" disabled={this.state.ready} />
                        <Input name="age" label="Edad" onChange={this.handlerChange} group type="number" validate error="wrong" success="right" disabled={this.state.ready} />

                        <label className="text-dark">Estado Civil</label>
                        <div className="text-center">

                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" onChange={this.handlerChange} id="customRadioInline1" name="civilStatus" value="Soltero" className="custom-control-input" disabled={this.state.ready} />
                                <label className="custom-control-label" htmlFor="customRadioInline1">Soltero/a</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" onChange={this.handlerChange} id="customRadioInline2" name="civilStatus" value="Casado" className="custom-control-input" disabled={this.state.ready} />
                                <label className="custom-control-label" htmlFor="customRadioInline2">Casado/a</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" onChange={this.handlerChange} id="customRadioInline3" name="civilStatus" value="Viudo" className="custom-control-input" disabled={this.state.ready} />
                                <label className="custom-control-label" htmlFor="customRadioInline3">Viudo/a</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" onChange={this.handlerChange} id="customRadioInline4" name="civilStatus" value="Divorciado" className="custom-control-input" disabled={this.state.ready} />
                                <label className="custom-control-label" htmlFor="customRadioInline4">Divorciado/a</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" onChange={this.handlerChange} id="customRadioInline5" name="civilStatus" value="Concubino" className="custom-control-input" disabled={this.state.ready} />
                                <label className="custom-control-label" htmlFor="customRadioInline5">Concubino/a</label>
                            </div>

                        </div>
                        <div>
                            <Input name="phoneNumber" onChange={this.handlerChange} label="Telefono Celular" group type="number" rows="2" disabled={this.state.ready} />
                            <Input name="studyDirection" onChange={this.handlerChange} label="Dirección donde recide mientras estudia" icon=" fa-address-book" className="mt-5" type="textarea" rows="2" disabled={this.state.ready} />
                            <Input name="residencePhone" onChange={this.handlerChange} label="Telefono donde recide" group type="number" rows="2" disabled={this.state.ready} />
                            <Input name="stateResidence" onChange={this.handlerChange} label="Estado" type="text" group rows="2" disabled={this.state.ready} />
                            <Input name="municipalityResidence" onChange={this.handlerChange} label="Municipio" type="text" group rows="2" disabled={this.state.ready} />
                            <Input name="parishResidence" onChange={this.handlerChange} label="Parroquia" type="text" group rows="2" />
                            <Input name="homeStudent" onChange={this.handlerChange} label="Domicilio del estudiante" icon=" fa-address-book-o" group type="textarea" rows="2" disabled={this.state.ready} />
                            <Input name="homeState" onChange={this.handlerChange} label="Estado" type="text" group rows="2" disabled={this.state.ready} />
                            <Input name="homeMunicipality" onChange={this.handlerChange} label="Municipio" type="text" group rows="2" disabled={this.state.ready} />
                            <Input name="homeParish" onChange={this.handlerChange} label="Parroquia" type="text" group rows="2" disabled={this.state.ready} />
                            <Input name="homePhone" onChange={this.handlerChange} label="Telefono de domicilio" group type="number" rows="2" disabled={this.state.ready} />
                            <Input name="otherPhone" onChange={this.handlerChange} label="Otro telefono de ubicación" group type="number" rows="2" disabled={this.state.ready} />
                      

                            <button onClick={this.formRedy} className="btn btn-outline-cyan btn-block mb-4">{this.state.ready ? 'Editar datos':'Verificar datos'}</button>
                            <div className="text-center exp">
                                <div className="checkbox">
                                    <input type="checkbox" 
                                        checked={this.state.ready}
                                        onClick={this.handleCheckbox}
                                        name="check" 
                                        disabled={this.state.cDisabled} 
                                    />
                                    <label>
                                        <span></span>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </CardBody>
            </Card>
                );
            }
        }
        
        export default ID;
