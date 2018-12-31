import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Table, TableBody, TableHead } from 'mdbreact';

class TableE extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            edit : true,
            medal:''
        }
    }
    render()
    {
        let { scholarship, scholarshipStatus } = this.props.user

        if (scholarship === false || scholarship === 'false' || scholarship === null ) scholarship = 'Sin Beca';
        
        if (scholarshipStatus === 'without') scholarshipStatus = 'Sin solicitar'
        else if (scholarshipStatus === 'waiting') scholarshipStatus = 'En proceso'
        else if (scholarshipStatus === 'accepted') scholarshipStatus = "Beca Activa"

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
                        <td><span className="h4 lead"> {scholarshipStatus} </span></td>
                        {this.handleMedalStatus()}
                         
                    </tr>
                    <tr>
                        <td>
                            {this.onHandlerCancel()}
                        </td>
                        <td>
                            {this.onHandlerSend()}
                        </td>
                        <td>
                            <button onClick={this.onChangeSelector} className="btn badge badge-pill badge-danger" disabled={!this.state.edit}>
                                <span style={{ fontSize: '0.8em' }}>Editar</span>
                            </button>
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
                    <button onClick={this.onChangePuts} className="btn badge badge-pill badge-danger">
                        <span style={{ fontSize: '0.8em' }}>Enviar</span>
                    </button>
                )
        }
        else
            return null
    }
    onChangePuts = (e) => 
    {
        let { medal } = this.state
        
        let recStorage = JSON.parse(localStorage.getItem('Perfil'))
            recStorage.medal.status = medal

            console.log(recStorage)

        if( medal === '')
        {
            e.preventDefault()
            alert("Debe Seleccionar una opción valida")
        }
        else if(medal === false)
        {
            Axios({
                method: 'put',
                url: `/api/users/${this.props.user._id}`,
                headers: { 'authorization': localStorage.Token },
                data:{
                    medal:{
                        status:medal
                    }
                }
            })
            .then(res => {
                alert("Los datos se han cambiado satisfactoriamente");
                localStorage.setItem('Perfil',JSON.stringify(recStorage));
                window.location.reload();
            })
            .catch(err =>{
                console.error(err)
            });
        }
        else
        {
            Axios({
                method:'put',
                url: `/api/users/${this.props.user._id}`,
                headers: { 'authorization': localStorage.Token },
                data:{
                    medal:recStorage.medal
                }
            })
            .then(res => {
                alert("Los datos se han cambiado satisfactoriamente");
                localStorage.setItem('Perfil',JSON.stringify(recStorage));
                window.location.reload();
            })
            .catch(err =>{
                console.log('Error al enviar')
                console.error(err)
            });

        }
    }
    onChangeSelector = (e)=>{
        this.setState({
            edit:!this.state.edit
        })
    }
    handleMedalStatus = () => {
        let { medal } = this.props.user
        let status2
        
        if (medal.status === false || medal.status === "false" || medal.status === null) medal.status = 'No Graduando'
        else if(medal.status === "without") status2 = 'Sin Solicitar';
        else if(medal.status === "waiting") status2 = 'En Proceso';
        else if(medal.status === "accepted") status2 = 'Verificado';
        else if(medal.status === "rejected") status2 = 'Rechazado'

        if (this.state.edit)
            return <td><span className="h4 lead"> {status2} </span></td>
        else
            return  <td>
                    <span className="h4 lead">
                        <select onClick={this.handlerSelector} className="Seleccione Estutus">
                            <option value="">Escoja una opción</option>
                            <option value="accepted">Aceptado</option>
                            <option value="waiting">Procesando</option>
                            <option value="without">Sin Solicitar</option>
                            <option value="rejected">Rechazado</option>
                            <option value={false}>No graduando</option>
                        </select></span>
                    </td>        
    }
    handlerSelector = (e) => 
    {
        console.log(e.target.value);
        this.setState({medal:e.target.value})
    }
}

export default TableE;
