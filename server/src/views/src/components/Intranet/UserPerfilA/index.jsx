import React, { Component} from 'react';
import { Card, CardBody, Button, Collapse } from 'mdbreact';

import History from '../../Routes/History'
import Axios from 'axios';

import Table from './Parts/TableE';
import Quarer from './Parts/Quarer';
import Document from './Parts/Document';
import DocumentE from './Parts/DocumentE';
import Schedule from './Parts/Schedule';

class UserPerfilA extends Component {
    constructor(props)
    {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state={
            disabled:true,
            admPassword:'',
            collapse1: false,
            collapse2: false,
            collapse3: false,
        }
    }
    toggle(e) {
        const { name } = e.target

        if (name === "collapse1")
            this.setState({ [name]: !this.state.collapse1 });
        else if (name === "collapse2")
            this.setState({ [name]: !this.state.collapse2 });
        else if (name === "collapse2")
            this.setState({ [name]: !this.state.collapse2 });
    }
    render()
    {
        let rec = localStorage.getItem('Perfil')
        let user = JSON.parse(rec)
        return (
            <div>
                <div className={`container align-middle`}>
                {
                    user.type === "student" ? (
                        <h2 className="display-3 mt-3">Perfil del Estudiante</h2>
                        ):(
                        <h2 className="display-3 mt-3">Perfil del Trabajador</h2>    
                    )
                }
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="card red lighten-5">
                                <div className="card-body">
                                    <Quarer fEdit={this.handleChangeEdit} edit={this.state.disabled} user={user} />
                                    
                                    <Card className="mt-3">
                                        <CardBody>
                                            <input name="admPassword" value={this.state.admPassword} onChange={this.onHandleInput} className="form-control mb-3" type="password" placeholder="Contraseña administrador"/>
                                            <button onClick={()=>this.handlerClickEdit(user)} type="button" className="btn btn-success btn-block mb-2">
                                                   <span>Activar Edición</span>                                                
                                            </button>
                                            <Button onClick={()=>this.onHandlerDelete(user)}className="btn-block" color="danger">Eliminar Usuario</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-12 col-md-7 offset-md-1">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    {
                                        user.type === 'student' ? (
                                            <Table fEdit={this.handleChangeEdit} user={user} />
                                        ) : (null)
                                    }
                                </div>
                            </div>

                            {/* ---Accordeon--- */}
                            <div>

                                <Button name="collapse2" color="success" onClick={this.toggle} style={{ marginBottom: "1rem" }} className="mt-5 btn-block">Datos Del Estudiante</Button>
                                <Collapse isOpen={this.state.collapse2}>
                                    <div className="card shadow-lg mt-5">
                                        <div className="card-body">
                                            {
                                                user.request ? (
                                                    <Document fEdit={this.handleChangeEdit} edit={this.state.disabled} user={user} />
                                                ) : (
                                                        null
                                                    )
                                            }
                                        </div>
                                    </div>

                                </Collapse>

                            </div>
                            {/* ---Accordeon--- */}
                            <div>
                                <Button name="collapse1" color="success" onClick={this.toggle} style={{ marginBottom: "1rem" }} className="mt-5 btn-block">Datos Socioeconomicos</Button>
                                <Collapse isOpen={this.state.collapse1}>
                                    <div className="card shadow-lg mt-5">
                                        <div className="card-body">
                                            {
                                                user.request ? (
                                                    <DocumentE user={user} />
                                                ) : (
                                                        null
                                                    )
                                            }
                                        </div>
                                    </div>
                                </Collapse>

                            </div>
                            {/* ---Accordeon--- */}
                            <div>
                                <Button name="collapse3" color="success" onClick={this.toggle} style={{ marginBottom: "1rem" }} className="mt-5 btn-block">Horario</Button>
                                <Collapse isOpen={this.state.collapse3}>
                                    <div className="card shadow-lg mt-5">
                                        <div className="card-body">
                                            {
                                                user.request ? (
                                                    user.request.schedule ? (
                                                        <Schedule user={user} />
                                                    ) : (
                                                            null
                                                        )
                                                ) : (null)
                                            }
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onHandleInput = (e) =>
    {
        let {name,value} = e.target
        this.setState({
            [name]:value
        })
    }
    onHandlerDelete = (user) =>
    {
        if(window.confirm(`Esta seguro que desea elimar a ${user.name.split(' ')[0]}`))
        {
            if(this.state.admPassword === '131323')
            {
                alert("Usuario Eliminado")

                Axios({
                    method: 'delete',
                    url: `/api/users/${user._id}`,
                    headers: { 'authorization': localStorage.Token },
                  })
                    .then(res => {
                        console.log("Delete User Success")
                    })
                    .catch(err =>{
                        console.log('Error Al Borrar')
                        console.error(err)
                    });
                    
                    setTimeout(History.push('/panelt'), 2500) 
                    window.location.reload()
            }
            else
                alert("La contraseña introducida no es valida")
        }
    }
    handleChangeEdit = () =>
    {
        this.setState({disabled:!this.state.disabled})
    }
    handlerClickEdit = (user) =>{
        if(window.confirm(`Esta seguro que desea iniciar la edicion de ${user.name.split(' ')[0]}` ))
            if(this.state.admPassword === "131323")
                
                this.setState({
                    disabled:!this.state.disabled,
                    admPassword:''
                })
            else
                alert("La contraseña introducida no es valida")
    }
}

export default UserPerfilA;


