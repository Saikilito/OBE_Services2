import React, { Component, createRef } from 'react';
import Axios from 'axios';

class Document extends Component {

    placeOfBirthRef = createRef();
    birthDateRef = createRef();
    stateOfBirthRef = createRef();
    ageRef = createRef();
    civilStatusRef = createRef();
    phoneNumberRef = createRef();
    studyDirectionRef = createRef();
    residencePhoneRef = createRef();
    stateResidenceRef = createRef();
    municipalityResidenceRef = createRef();
    parishResidenceRef = createRef();
    homeStudentRef = createRef();
    homeStateRef = createRef();
    homeMunicipalityRef = createRef();
    homeParishRef = createRef();
    homePhoneRef = createRef();
    otherPhoneRef = createRef();
    
    facultyRef = createRef();
    schoolRef = createRef();
    semRef = createRef();
    averageRef = createRef();
    efficiencyRef = createRef();
    academicIndexRef = createRef();

    render() {
        let { id, academicData } = this.props.user.request
        return (
            <div className="">
                <p className="h4-responsive text-center py-4">DATOS DE IDENTIFICACIÓN</p>
                <div className="md-form">
                    <input ref={this.placeOfBirthRef} type="text" id="placeOfBirth" className="form-control text-capitalize" defaultValue={id.placeOfBirth} disabled={this.props.edit} />
                    <label htmlFor="placeOfBirth" className="active">Lugar de nacimiento</label>
                </div>
                <div className="md-form">
                    <input ref={this.birthDateRef} type="date" id="birthDate" className="form-control text-capitalize" defaultValue={id.birthDate.split('T')[0]} disabled={this.props.edit} />
                    <label htmlFor="birthDate" className="active">Fecha de nacimiento</label>
                </div>
                <div className="md-form">
                    <input ref={this.stateOfBirthRef} type="text" id="stateOfBirth" className="form-control text-capitalize" defaultValue={id.stateOfBirth} disabled={this.props.edit} />
                    <label htmlFor="stateOfBirth" className="active">Estado donde nacio</label>
                </div>
                <div className="md-form">
                    <input ref={this.ageRef} type="number" id="age" className="form-control text-capitalize" defaultValue={id.age} disabled={this.props.edit} />
                    <label htmlFor="age" className="active">Edad</label>
                </div>
                <div className="md-form">
                    <input ref={this.civilStatusRef} type="text" id="civilStatus" className="form-control text-capitalize" defaultValue={id.civilStatus} disabled={this.props.edit} />
                    <label htmlFor="civilStatus" className="active">Estado Civil</label>
                </div>
                <div className="md-form">
                    <input ref={this.phoneNumberRef} type="number" id="phoneNumber" className="form-control text-capitalize" defaultValue={`0${id.phoneNumber}`} disabled={this.props.edit} />
                    <label htmlFor="phoneNumber" className="active">Teléfono Celular</label>
                </div>
                <div className="md-form">
                    <input ref={this.studyDirectionRef} type="text" id="studyDirection" className="form-control text-capitalize" defaultValue={id.studyDirection} disabled={this.props.edit} />
                    <label htmlFor="studyDirection" className="active">Mientras estudia recide en</label>
                </div>
                <div className="md-form">
                    <input ref={this.residencePhoneRef} type="number" id="residencePhone" className="form-control text-capitalize" defaultValue={`0${id.residencePhone}`} disabled={this.props.edit} />
                    <label htmlFor="residencePhone" className="active">Teléfono de recidencia</label>
                </div>
                <div className="md-form">
                    <input ref={this.stateResidenceRef} type="text" id="stateResidence" className="form-control text-capitalize" defaultValue={`${id.stateResidence}`} disabled={this.props.edit} />
                    <label htmlFor="stateResidence" className="active">Estado</label>
                </div>
                <div className="md-form">
                    <input ref={this.municipalityResidenceRef} type="text" id="municipalityResidence" className="form-control text-capitalize" defaultValue={`${id.municipalityResidence}`} disabled={this.props.edit} />
                    <label htmlFor="municipalityResidence" className="active">Municipio</label>
                </div>
                <div className="md-form">
                    <input ref={this.parishResidenceRef} type="text" id="parishResidence" className="form-control text-capitalize" defaultValue={`${id.parishResidence}`} disabled={this.props.edit} />
                    <label htmlFor="parishResidence" className="active">Parroquia</label>
                </div>
                <div className="md-form">
                    <input ref={this.homeStudentRef} type="text" id="homeStudent" className="form-control text-capitalize" defaultValue={`${id.homeStudent}`} disabled={this.props.edit} />
                    <label htmlFor="homeStudent" className="active">Dirección de domicilio</label>
                </div>
                <div className="md-form">
                    <input ref={this.homeStateRef} type="text" id="homeState" className="form-control text-capitalize" defaultValue={`${id.homeState}`} disabled={this.props.edit} />
                    <label htmlFor="homeState" className="active">Estado</label>
                </div>
                <div className="md-form">
                    <input ref={this.homeMunicipalityRef} type="text" id="homeMunicipality" className="form-control text-capitalize" defaultValue={`${id.homeMunicipality}`} disabled={this.props.edit} />
                    <label htmlFor="homeMunicipality" className="active">Municipio</label>
                </div>
                <div className="md-form">
                    <input ref={this.homeParishRef} type="text" id="homeParish" className="form-control text-capitalize" defaultValue={`${id.homeParish}`} disabled={this.props.edit} />
                    <label htmlFor="homeParish" className="active">Parroquia</label>
                </div>
                <div className="md-form">
                    <input ref={this.homePhoneRef} type="number" id="homePhone" className="form-control text-capitalize" defaultValue={`0${id.homePhone}`} disabled={this.props.edit} />
                    <label htmlFor="homePhone" className="active">Teléfono de domicilio</label>
                </div>
                <div className="md-form">
                    <input ref={this.otherPhoneRef} type="number" id="otherPhone" className="form-control text-capitalize" defaultValue={`0${id.otherPhone}`} disabled={this.props.edit} />
                    <label htmlFor="otherPhone" className="active">Otro teléfono</label>
                </div>

                <hr />
                <hr />
                <hr />

                <p className="h4-responsive text-center py-3">DATOS ACADEMICOS</p>

                <div className="md-form">
                    <input ref={this.facultyRef} type="text" id="facultyD" className="form-control text-capitalize" defaultValue={`${academicData.faculty}`} disabled={this.props.edit} />
                    <label htmlFor="facultyD" className="active">Facultad</label>
                </div>
                <div className="md-form">
                    <input ref={this.schoolRef} type="text" id="schoolD" className="form-control text-capitalize" defaultValue={`${academicData.school}`} disabled={this.props.edit} />
                    <label htmlFor="schoolD" className="active">Escuela</label>
                </div>
                <div className="md-form">
                    <input ref={this.semRef} type="text" id="sem" className="form-control text-capitalize" defaultValue={`${academicData.sem}`} disabled={this.props.edit} />
                    <label htmlFor="sem" className="active">Año/Sem</label>
                </div>
                <div className="md-form">
                    <input ref={this.averageRef} type="text" id="average" className="form-control text-capitalize" defaultValue={`${academicData.average}`} disabled={this.props.edit} />
                    <label htmlFor="average" className="active">Promedio</label>
                </div>
                <div className="md-form">
                    <input ref={this.efficiencyRef} type="text" id="efficiency" className="form-control text-capitalize" defaultValue={`${academicData.efficiency}`} disabled={this.props.edit} />
                    <label htmlFor="efficiency" className="active">Eficiencia</label>
                </div>
                <div className="md-form">
                    <input ref={this.academicIndexRef} type="text" id="academicIndex" className="form-control text-capitalize" defaultValue={`${academicData.academicIndex}`} disabled={this.props.edit} />
                    <label htmlFor="academicIndex" className="active">Indice Academico</label>
                </div>
                {
                    !this.props.edit ? (
                            <button onClick={this.handlerClickEdit} type="button" className="btn btn-danger btn-block" >Editar</button>
                    ) : (null)
                }
            </div>
        );
    }
    handlerClickEdit = (e) => {
        let Data;
        let subData = JSON.parse(localStorage.getItem('Perfil'))
        
        if (this.props.user.type === 'student') {
            Data = {
                request:{
                    id:{
                        placeOfBirth:this.placeOfBirthRef.current.value,
                        birthDate:this.birthDateRef.current.value,
                        stateOfBirth:this.stateOfBirthRef.current.value,
                        age:this.ageRef.current.value,
                        civilStatus:this.civilStatusRef.current.value,
                        phoneNumber:this.phoneNumberRef.current.value,
                        studyDirection:this.studyDirectionRef.current.value,
                        residencePhone:this.residencePhoneRef.current.value,
                        stateResidence:this.stateResidenceRef.current.value,
                        municipalityResidence:this.municipalityResidenceRef.current.value,
                        parishResidence:this.parishResidenceRef.current.value,
                        homeStudent:this.homeStudentRef.current.value,
                        homeState:this.homeStateRef.current.value,
                        homeMunicipality:this.homeMunicipalityRef.current.value,
                        homeParish:this.homeParishRef.current.value,
                        homePhone:this.homePhoneRef.current.value,
                        otherPhone:this.otherPhoneRef.current.value
                    },
                    socioeconomic: subData.request.socioeconomic,
                    academicData:{
                        faculty: this.facultyRef.current.value,
                        school: this.schoolRef.current.value,
                        sem: this.semRef.current.value,
                        average: this.averageRef.current.value,
                        efficiency: this.efficiencyRef.current.value,
                        academicIndex: this.academicIndexRef.current.value
                      },
                      schedule: subData.request.schedule
                }
            }
            console.log(Data)
        }

        Axios({
            method: 'put',
            url: `/api/users/${this.props.user._id}`,
            headers: { 'authorization': localStorage.Token },
            data: Data
        })
            .then(res => {
                console.log("Los datos se han cambiado satisfactoriamente");
                this.props.fEdit()

            })
            .catch(err => {
                console.log('Error en el request')
                console.error(err)
            });
    }
}

export default Document;
