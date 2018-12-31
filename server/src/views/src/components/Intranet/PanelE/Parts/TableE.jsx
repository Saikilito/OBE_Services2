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
        let status2
        let { scholarship, medal } = this.props.user

        if (scholarship === false || scholarship === 'false' ) scholarship = 'Sin Beca';

        if (medal.status === false || medal.status === "false" || medal.status === null) medal.status = 'Inhabilitado'
        else if(medal.status === "without") status2 = 'Sin Solicitar';
        else if(medal.status === "waiting") status2 = 'En Proceso';
        else if(medal.status === "accepted") status2 = 'Verificado';
        else if(medal.status === "rejected") status2 = 'Rechazado'


        return (
            <Fragment>
            <p className="h5-responsive">Tabla de estados</p>
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
                        <td><span className="h4 lead">{scholarship}</span></td>
                         {this.handlerBecaStatus()} 
                        <td><span className="h4 lead">{status2}</span></td>
                    </tr>

                </TableBody>
            </Table>
            </Fragment>
        );
    }
    onChangePuts = (e) => 
    {
        let { scholarshipStatus } = this.state

        if(scholarshipStatus === '')
        {
            e.preventDefault()
            alert("Debe Seleccionar una opción valida")
        }
        else if(scholarshipStatus === 'without')
        {
            Axios({
                method: 'put',
                url: `/api/users/${this.props.user._id}`,
                headers: { 'authorization': localStorage.Token },
                data:{
                    scholarship: false,
                    scholarshipStatus
                }
              })
                .then(res => {
                    alert("Los datos se han cambiado satisfactoriamente");
                  if(res.data.user.type !== 'student')
                    this.getAllUsers(res.data.user)
                  else
                    this.setState({stage:1, user:res.data.user})
                })
                .catch(err =>{
                    console.log('no chiamoo')
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
                  if(res.data.user.type !== 'student')
                    this.getAllUsers(res.data.user)
                  else
                    this.setState({stage:1, user:res.data.user})
                })
                .catch(err =>{
                    console.log('no chiamoo')
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

            return <td>
                    <span className="h4 lead"> {scholarshipStatus} </span></td>
    }
    handlerSelector = (e) => 
    {
        console.log(e.target.value);
        this.setState({scholarshipStatus:e.target.value})
    }
}

export default TableE;
