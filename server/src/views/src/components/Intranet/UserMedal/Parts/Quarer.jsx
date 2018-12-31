import React, { Component, createRef, Fragment } from 'react';
import Axios from 'axios';

import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

const image = [
    { src: "/assets/photo/photo1.jpg" },
    { src: "/assets/photo/photo2.jpg" },
];


class Quearer extends Component {
    state = {
        name: ''
    }

    nameRef = createRef()
    lastnameRef = createRef()
    ciRef = createRef()
    facultyRef = createRef()
    schoolRef = createRef()
    positionRef = createRef()


    render() {
        let e = this.props.user

        return (
            <div className="shadow-lg rounded">
            {console.log(e)}
                <Card >
                     { e.sexo === 'female' ? (
                    <CardImage className="img-fluid" src={image[1].src} />
                ):(
                    <CardImage className="img-fluid" src={image[0].src} />
                )}
                    <CardBody>
                        <CardTitle >
                            <div className="md-form">
                                <input ref={this.nameRef} type="text" id="name" className="form-control text-capitalize" defaultValue={e.name} disabled={this.props.edit} />
                                <label htmlFor="name" className="active">Nombres</label>
                            </div>
                            <div className="md-form">
                                <input ref={this.lastnameRef} type="text" id="lastname" className="form-control text-capitalize" defaultValue={e.lastname} disabled={this.props.edit} />
                                <label htmlFor="lastname" className="active">Apellidos</label>
                            </div>
                            <div className="md-form">
                                <input ref={this.emailRef} type="text" id="email" className="form-control text-capitalize" defaultValue={e.email} disabled={this.props.edit} />
                                <label htmlFor="email" className="active">Correo electronico</label>
                            </div>
                            <div className="md-form">
                                <input ref={this.ciRef} type="text" id="ci" className="form-control" defaultValue={e.ci} disabled={this.props.edit} />
                                <label htmlFor="ci" className="active">C.I.</label>
                            </div>
                            {
                                e.type === 'student' ? (
                                    <Fragment>
                                        <div className="md-form">
                                            <input ref={this.facultyRef} type="text" id="faculty" className="form-control" defaultValue={e.faculty} disabled={this.props.edit} />
                                            <label htmlFor="faculty" className="active">Facultad</label>
                                        </div>
                                        <div className="md-form">
                                            <input ref={this.schoolRef} type="text" id="school" className="form-control" defaultValue={e.school} disabled={this.props.edit} />
                                            <label htmlFor="school" className="active">Carrera</label>
                                        </div>
                                    </Fragment>
                                ) : (
                                        <div className="md-form">
                                            <input ref={this.positionRef} type="text" id="position" className="form-control" defaultValue={e.position} disabled={this.props.edit} />
                                            <label htmlFor="position" className="active">Cargo</label>
                                        </div>
                                    )
                            }
                        </CardTitle>
                        <CardText className="text-center">
                            {
                                e.type === 'student' ? (
                                    <span>
                                        Estudiante de la Universidad Central De Venezuela
                                    </span>
                                ) : (
                                        <span>
                                            Trabajador de la Universidad Central De Venezuela
                                    </span>
                                    )
                            }
                        </CardText>
                        {
                            !this.props.edit ? (
                                <a href="/becasa">
                                    <button onClick={this.handlerClickEdit} type="button" className="btn btn-danger btn-block">Editar</button>
                                </a>
                            ) : (null)
                        }
                    </CardBody>
                </Card>
            </div>
        );

    }
    handlerClickEdit = (e) => {
        let Data;

        if (this.props.user.type === 'student') {
            Data = {
                name: this.nameRef.current.value,
                lastname: this.lastnameRef.current.value,
                ci: this.ciRef.current.value,
                faculty: this.facultyRef.current.value,
                school: this.schoolRef.current.value
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

            })
            .catch(err => {
                console.log('Error en el requets')
                console.error(err)
            });
    }
}

export default Quearer;
