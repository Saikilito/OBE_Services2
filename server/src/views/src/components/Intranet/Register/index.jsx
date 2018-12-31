import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import './registro.module.css'

import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalFooter } from 'mdbreact';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            send: false,
            selector: '',
            name: '',
            lastname: '',
            nationality: 'Venezolano',
            ci: '',
            sex: 'male',
            email: '',
            faculty: '',
            school: '',
            department: '',
            position: '',
        }
    }
    render() {
        return (
            <Fragment>
                {
                    this.state.send ? (window.location.reload()) : null
                }
                <div className="bg-dark p-5 text-white text-center">
                    <h2 className="display-3">Registrar Usuarios</h2>
                </div>
                <Container className="mt-5 align-middle">
                    <Row>
                        <Col>
                            <p className="text-center lead">
                                Esta sección es solo para registrar personal y/o estudiantes de la Universidad Central de Venezuela<br />
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem est eligendi nam, voluptas exercitationem nulla quam explicabo. Explicabo molestias eligendi excepturi, sapiente libero enim labore tempore accusantium est modi! Facere eveniet temporibus consectetur numquam aliquam? Vero labore ullam consectetur excepturi accusantium libero harum, nam commodi repellendus delectus a adipisci perferendis aliquam hic mollitia, culpa, iusto maxime eius magni tempora! Voluptates excepturi possimus exercitationem magnam, animi atque cum facilis perferendis labore accusamus illo sequi molestiae quo asperiores eaque et temporibus porro ab quod repellat nihil accusantium debitis. Nesciunt praesentium voluptate repudiandae quidem assumenda provident dolores ipsa officia nemo veniam, saepe corrupti veritatis obcaecati at, natus quo. Sint, incidunt officiis commodi provident, deleniti aliquam optio ipsum eligendi necessitatibus aut velit eveniet modi esse neque, sequi vero similique culpa laborum dolorum. Doloribus aliquid sit pariatur eligendi, at reprehenderit libero voluptas eius illum labore quam ad numquam odit dicta minima explicabo accusamus tempore dolores obcaecati rerum delectus architecto! Hic veniam optio, quasi error aspernatur perspiciatis illum officiis nemo laboriosam nulla quod voluptatibus reiciendis dolore delectus tempore amet doloribus enim atque commodi magnam aut distinctio ipsa sit? Non ipsum odio recusandae error, quidem et ad eligendi veniam, perspiciatis eos facilis mollitia quasi dolore, ratione nam fugiat debitis. Maiores amet porro fugiat placeat corrupti debitis labore nesciunt, doloremque, veniam eum mollitia veritatis animi qui eligendi. Sunt reiciendis minus repudiandae excepturi, maiores officia et, incidunt autem explicabo illum vero corrupti obcaecati omnis ab? At eaque earum asperiores tempora, vel necessitatibus reprehenderit, accusantium illum, beatae officia commodi nisi.</p>

                            <Button className={`d-block mx-auto mt-5 p-3`}
                                color="danger"
                                onClick={this.toggle}
                            >
                                Click aquí para crear un nuevo registro
                            </Button>
                            <span className={`d-block text-center  text-danger  m-3 py-3 alert-success`} >
                                Por favor, tenga mucho ciudado al introducir los datos en el formulario
                            </span>

                            <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
                                <div className="modal-header primary-color white-text">
                                    <h4 className="title">
                                        <Fa className="fa fa-pencil" /> Contact form</h4>
                                    <button type="button" className="close" onClick={this.toggle}>
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <form onSubmit={this.handleRegisterForm}>
                                <ModalBody className="grey-text">
                                    <div className="box">
                                        <select onChange={this.onHandleChangeSelector} name="type" id="type">
                                            <option value="">Elija una opción</option>
                                            <option value="student">Estudiante</option>
                                            <option value="worker">Trabajador</option>
                                            <option value="adm">Administrador</option>
                                        </select>
                                    </div>

                                    {this.createInputsForm()}

                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                                    <Button
                                        type="submit"
                                        color="primary"
                                        disabled={this.state.selector === '' ? true : false}
                                    >
                                        Registrar
                                    </Button>
                                </ModalFooter>
                                </form>
                            </Modal>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
    createInputsForm() {
        let { selector } = this.state

        let block = <Fragment>
            <Input
                name="name"
                onChange={this.onHandleChangeInput}
                label="Nombres" group type="text" validate error="wrong" success="right" size="sm" />
            <Input
                name="lastname"
                onChange={this.onHandleChangeInput}
                label="Apellidos" group type="text" validate error="wrong" success="right" size="sm" />

            <label htmlFor="nationality">Nacionalidad</label>
            <select
                name="nationality"
                onChange={this.onHandleChangeInput}
                id="nationality">
                <option value="Venezolano">Venezolano</option>
                <option value="Extrangero">Extrangero</option>
            </select>

            <Input
                name="ci"
                onChange={this.onHandleChangeInput}
                label="Cedula de identidad" icon="tag" group type="number" validate error="wrong" success="right" size="sm" />

            <label htmlFor="sex">Sexo</label>
            <select
                name="sex"
                onChange={this.onHandleChangeInput}
                id="sex">
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
            </select>

            <Input
                name="email"
                type="email"
                onChange={this.onHandleChangeInput}
                label="Email" icon="envelope" group 
                validate error="wrong" success="right" size="sm" required/>
        </Fragment>
        
        let classFf = "display-4 text-center text-dark p-2"

        if (selector === '') 
        {
            return (
                <Fragment>
                    <p className={classFf}>Escoja una opcion</p>
                </Fragment>
            )
        }
        else if (selector === 'student') 
        {
            return (
                <Fragment>
                    <p className={classFf}>Registro Estudiante</p>
                    {block}
                    <hr />
                    <Input 
                        name="faculty"
                        onChange={this.onHandleChangeInput} 
                        label="Facultad" size="sm" type="text" rows="2" icon="pencil" />
                    <Input 
                        name="school"
                        onChange={this.onHandleChangeInput} 
                        label="Carrera" size="sm" type="text" rows="2" icon="pencil" />
                </Fragment>
            )
        }
        else
        {
            return (
                <Fragment>
                    {
                        this.state.selector === 'worker' ? (
                            <p className={classFf}>Registro Trabajador</p>
                            ):(
                            <p className={classFf}>Registro Administrador</p>
                        )
                    }
                    {block}
                    <hr />
                    <Input 
                        name="department"
                        onChange={this.onHandleChangeInput} 
                        label="Departamento" size="sm" type="text" rows="2" icon="pencil" />
                    <Input
                        name="position"
                        onChange={this.onHandleChangeInput}
                        label="Posición" size="sm" type="text" rows="2" icon="pencil" />
                </Fragment>
            )
        }

       
    }       
    onHandleChangeInput = (e) => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    onHandleChangeSelector = (e) => {
        this.setState({
            selector: e.target.value
        })
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    toggle2 = () => {
        this.setState({
            modal: !this.state.modal,
            send: true
        });
    }
    handleRegisterForm = (e) => {
        e.preventDefault();

        let { selector, name, lastname,
            nationality, ci, sex, email,
            faculty, school,
            department, position } = this.state

        let Data,
        password = `${ci}_${lastname.split(' ')[0]}`
        
    
        if (selector === 'student')
        {
            if( name === '' || lastname === '' || ci  === '' || email  === '' || faculty  === '' || school  === '')
            {
                alert("Por favor verifique que no exista ningun campo vacio")
                return null
            }

            Data = {
                type: selector,
                name,
                lastname,
                nationality,
                ci,
                sex,
                email,
                password,
                faculty,
                school,
                scholarship: false,
                scholarshipStatus: 'without',
                medal: {
                    status: false
                }
            }
        }
        else
        {

            Data = {
                type: selector,
                name,
                lastname,
                nationality,
                ci,
                sex,
                email,
                password,
                department,
                position,
            }
        }

        console.log(Data);
        
        
        Axios({
            method: 'post',
            url: `/api/signup`,
            headers: { 'authorization': localStorage.Token },
            data: Data
        })
        .then(res =>{
            console.log(res)
            alert("Se registro el usuario correctamente!")
            this.toggle2();
        } )
        .catch(err => {
            console.log(err)
            alert("El usuario ya se encuentra registrado en la base de datos")
        })   
        
    }
};

export default Register;