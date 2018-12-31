import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Table, TableBody, TableHead } from 'mdbreact';

class TableE extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            edit : true,
            scholarshipStatus:''
        }
    }
    render()
    {
        let { scholarship, medal } = this.props.user

        if (scholarship === false || scholarship === 'false' ) scholarship = 'Sin Beca';
        let status2
        
        if (medal.status === false) medal.status = 'Inhabilitado'
        else if (medal.status === 'without') status2 = 'Sin Solicitar';
        else if (medal.status === 'waiting') status2 = 'En espera';
        else if (medal.status === 'accepted') status2 = 'Verificado';
        else if (medal.status === 'rejected') status2 = 'Rechazado';

        return (
            <Fragment>
            <p className="h3-responsive text-center">Tabla de estado</p>
            <Table bordered className="text-center">
                <TableHead color="primary-color" textWhite>
                    <tr>
                        <th>Tipo de Beca</th>
                        <th>Estatus Beca</th>
                        <th>Estatus Medalla</th>
                    </tr>
                </TableHead>
                <TableBody className="text-center align-middle">
                    <tr>
                        <td><span className="h4 lead"> {scholarship} </span></td>
                         {this.handlerBecaStatus()} 
                        <td><span className="h4 lead"> {status2} </span></td>
                    </tr>
                    <tr>
                        <td>
                            {this.onHandlerCancel()}
                        </td>
                        <td>
                            <button onClick={this.onChangeSelector} className="btn badge badge-pill badge-danger" disabled={!this.state.edit}><span style={{ fontSize: '0.8em' }}>Editar</span></button>
                        </td>
                        <td>
                            {this.onHandlerSend()}
                        </td>
                    </tr>

                </TableBody>
            </Table>
            </Fragment>
        );
    }
    onHandlerCancel = () =>
    {
        if(!this.state.edit)
            return (<button onClick={this.onChangeSelector} className="btn badge badge-pill badge-danger">
                    <span style={{ fontSize: '0.8em' }}>Cancelar</span>
                </button>)
        else return null
    }
    onHandlerSend = () =>
    {
        let {edit} = this.state
        if(!edit)
        {
            return (
               
                    <button onClick={this.onChangePuts} className="btn badge badge-pill badge-danger"><span style={{ fontSize: '0.8em' }}>Enviar</span></button>
           
                )
        }
        else
            return null
    }
    onChangePuts = (e) => 
    {
        let {scholarshipStatus } = this.state

        if(scholarshipStatus === '')
        {
            e.preventDefault()
            alert("Debe seleccionar una opción valida")
        }
        else if(scholarshipStatus === 'without')
        {
            Axios({
                method:'put',
                url: `/api/users/${this.props.user._id}`,
                headers: { 'authorization': localStorage.Token },
                data:{
                    scholarship: false,
                    scholarshipStatus
                }
              })
                .then(res => {
                    alert("Los datos se han cambiado satisfactoriamente");
                    let userStorage = JSON.parse(localStorage.getItem("Perfil"))
                    userStorage.scholarshipStatus = this.state.scholarshipStatus
                    let resStorage = JSON.stringify(userStorage);
                    localStorage.setItem("Perfil",resStorage);
                    window.location.reload();
                })
                .catch(err =>{
                    console.log('Error al actualizar el estado')
                  console.error(err)
                });
        }
        else
        {
            Axios({
                method: 'put',
                url: `/api/users/${this.props.user._id}`,
                headers: { 'authorization': localStorage.Token },
                data:{
                    scholarshipStatus: this.state.scholarshipStatus
                }
              })
                .then(res => {
                    alert("Los datos se han cambiado satisfactoriamente");
                    
                    let userStorage = JSON.parse(localStorage.getItem("Perfil"))
                        userStorage.scholarshipStatus = this.state.scholarshipStatus
                    let resStorage = JSON.stringify(userStorage);
                    localStorage.setItem("Perfil",resStorage)
                    window.location.reload();
                })
                .catch(err =>{
                    console.log('Error al actualizar el estado')
                  console.error(err)
                });
              
        }

    }
    onChangeSelector = (e)=>{
        this.setState({
            edit:!this.state.edit
        })
    }
    handlerBecaStatus = () => {
        let { scholarshipStatus } = this.props.user

        if (scholarshipStatus === 'without') scholarshipStatus = 'Sin solicitar'
        else if (scholarshipStatus === 'waiting') scholarshipStatus = 'En proceso'
        else if (scholarshipStatus === 'accepted') scholarshipStatus = "Beca Activa";

        if (this.state.edit)
            return <td>
                    <span className="h4 lead"> {scholarshipStatus} </span></td>
        else
            return  <td>
                    <span className="h4 lead">
                        <select onClick={this.handlerSelector} className="Seleccione Estutus">
                            <option value="">Escoja una opción</option>
                            <option value="accepted">Aceptado</option>
                            <option value="waiting">En proceso</option>
                            <option value="without">Sin Beca</option>
                        </select></span>
                    </td>        
    }
    handlerSelector = (e) => 
    {
        console.log(e.target.value);
        this.setState({scholarshipStatus:e.target.value})
    }
}

export default TableE;
