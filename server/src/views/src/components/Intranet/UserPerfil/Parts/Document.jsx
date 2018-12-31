import React, { Component, createRef } from 'react';

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
                    <input ref={this.placeOfBirthRef} type="text" id="placeOfBirth" className="form-control text-capitalize" defaultValue={id.placeOfBirth} disabled/>
                    <label htmlFor="placeOfBirth" className="active">Lugar de nacimiento</label>
                </div>
                <div className="md-form">
                    <input ref={this.birthDateRef} type="date" id="birthDate" className="form-control text-capitalize" defaultValue={id.birthDate.split('T')[0]} disabled/>
                    <label htmlFor="birthDate" className="active">Fecha de nacimiento</label>
                </div>
                <div className="md-form">
                    <input ref={this.stateOfBirthRef} type="text" id="stateOfBirth" className="form-control text-capitalize" defaultValue={id.stateOfBirth} disabled/>
                    <label htmlFor="stateOfBirth" className="active">Estado donde nacio</label>
                </div>
                <div className="md-form">
                    <input ref={this.ageRef} type="number" id="age" className="form-control text-capitalize" defaultValue={id.age} disabled/>
                    <label htmlFor="age" className="active">Edad</label>
                </div>
                <div className="md-form">
                    <input ref={this.civilStatusRef} type="text" id="civilStatus" className="form-control text-capitalize" defaultValue={id.civilStatus} disabled/>
                    <label htmlFor="civilStatus" className="active">Estado Civil</label>
                </div>
                <div className="md-form">
                    <input ref={this.phoneNumberRef} type="number" id="phoneNumber" className="form-control text-capitalize" defaultValue={`0${id.phoneNumber}`} disabled/>
                    <label htmlFor="phoneNumber" className="active">Teléfono Celular</label>
                </div>
                <div className="md-form">
                    <input ref={this.studyDirectionRef} type="text" id="studyDirection" className="form-control text-capitalize" defaultValue={id.studyDirection} disabled/>
                    <label htmlFor="studyDirection" className="active">Mientras estudia recide en</label>
                </div>
                <div className="md-form">
                    <input ref={this.residencePhoneRef} type="number" id="residencePhone" className="form-control text-capitalize" defaultValue={`0${id.residencePhone}`} disabled/>
                    <label htmlFor="residencePhone" className="active">Teléfono de recidencia</label>
                </div>
                <div className="md-form">
                    <input ref={this.stateResidenceRef} type="text" id="stateResidence" className="form-control text-capitalize" defaultValue={`${id.stateResidence}`} disabled/>
                    <label htmlFor="stateResidence" className="active">Estado</label>
                </div>
                <div className="md-form">
                    <input ref={this.municipalityResidenceRef} type="text" id="municipalityResidence" className="form-control text-capitalize" defaultValue={`${id.municipalityResidence}`} disabled/>
                    <label htmlFor="municipalityResidence" className="active">Municipio</label>
                </div>
                <div className="md-form">
                    <input ref={this.parishResidenceRef} type="text" id="parishResidence" className="form-control text-capitalize" defaultValue={`${id.parishResidence}`} disabled/>
                    <label htmlFor="parishResidence" className="active">Parroquia</label>
                </div>
                <div className="md-form">
                    <input ref={this.homeStudentRef} type="text" id="homeStudent" className="form-control text-capitalize" defaultValue={`${id.homeStudent}`} disabled/>
                    <label htmlFor="homeStudent" className="active">Dirección de domicilio</label>
                </div>
                <div className="md-form">
                    <input ref={this.homeStateRef} type="text" id="homeState" className="form-control text-capitalize" defaultValue={`${id.homeState}`} disabled/>
                    <label htmlFor="homeState" className="active">Estado</label>
                </div>
                <div className="md-form">
                    <input ref={this.homeMunicipalityRef} type="text" id="homeMunicipality" className="form-control text-capitalize" defaultValue={`${id.homeMunicipality}`} disabled/>
                    <label htmlFor="homeMunicipality" className="active">Municipio</label>
                </div>
                <div className="md-form">
                    <input ref={this.homeParishRef} type="text" id="homeParish" className="form-control text-capitalize" defaultValue={`${id.homeParish}`} disabled/>
                    <label htmlFor="homeParish" className="active">Parroquia</label>
                </div>
                <div className="md-form">
                    <input ref={this.homePhoneRef} type="number" id="homePhone" className="form-control text-capitalize" defaultValue={`0${id.homePhone}`} disabled/>
                    <label htmlFor="homePhone" className="active">Teléfono de domicilio</label>
                </div>
                <div className="md-form">
                    <input ref={this.otherPhoneRef} type="number" id="otherPhone" className="form-control text-capitalize" defaultValue={`0${id.otherPhone}`} disabled/>
                    <label htmlFor="otherPhone" className="active">Otro teléfono</label>
                </div>

                <hr />
                <hr />
                <hr />

                <p className="h4-responsive text-center py-3">DATOS ACADEMICOS</p>

                <div className="md-form">
                    <input ref={this.facultyRef} type="text" id="faculty" className="form-control text-capitalize" defaultValue={`${academicData.faculty}`} disabled/>
                    <label htmlFor="faculty" className="active">Facultad</label>
                </div>
                <div className="md-form">
                    <input ref={this.schoolRef} type="text" id="school" className="form-control text-capitalize" defaultValue={`${academicData.school}`} disabled/>
                    <label htmlFor="school" className="active">Escuela</label>
                </div>
                <div className="md-form">
                    <input ref={this.semRef} type="text" id="sem" className="form-control text-capitalize" defaultValue={`${academicData.sem}`} disabled/>
                    <label htmlFor="sem" className="active">Año/Sem</label>
                </div>
                <div className="md-form">
                    <input ref={this.averageRef} type="text" id="average" className="form-control text-capitalize" defaultValue={`${academicData.average}`} disabled/>
                    <label htmlFor="average" className="active">Promedio</label>
                </div>
                <div className="md-form">
                    <input ref={this.efficiencyRef} type="text" id="efficiency" className="form-control text-capitalize" defaultValue={`${academicData.efficiency}`} disabled/>
                    <label htmlFor="efficiency" className="active">Eficiencia</label>
                </div>
                <div className="md-form">
                    <input ref={this.academicIndexRef} type="text" id="academicIndex" className="form-control text-capitalize" defaultValue={`${academicData.academicIndex}`} disabled/>
                    <label htmlFor="academicIndex" className="active">Indice Academico</label>
                </div>
            </div>
        );
    }
}

export default Document;
