import React, { Component } from 'react';
import Axios from 'axios';
import {  Card, CardBody } from 'mdbreact'
// import './styles.css'

class Switch extends Component {
    state = {
        password:'',
        input: '',
        switch_1: null,
        switch_2: null,
        disabled: false
    }
    componentDidMount()
    {
        this.setState({
            switch_1: this.props.access.beca,
            switch_2: this.props.access.medall
        })
    }
    render() {
        return (
            <div className="card mt-5 shadow-lg">
                <div className="card-body">
                    <Card>
                        <CardBody>
                            <input  name="password"
                                    type="password" 
                                    onChange={this.handleChangeInput} 
                                    className="form-control" 
                                    value={this.state.password} placeholder="Contraseña Administrado"/>
                            <div className="d-flex p-3">
                                <label className="bs-switch">
                                    <input name="check1" type="checkbox" 
                                        onClick={this.handlerRequets} 
                                        defaultChecked={this.state.switch_1}
                                        disabled={this.state.disabled} />
                                    <span className="slider round"></span>
                                </label>
                                <div className={`h5-responsive ml-3 ${this.state.switch_1 ? 'indigo-text':'text-danger'}`}>Becas</div>
                            </div>
                            <div className="d-flex p-3">
                                <label className="bs-switch">
                                    <input ref={e => this.check1Ref = e } name="check2" type="checkbox" 
                                        onClick={this.handlerRequets} 
                                        defaultChecked={this.state.switch_2}
                                        disabled={this.state.disabled} />
                                    <span className="slider round"></span>
                                </label>
                                <div className={`h5-responsive ml-3 ${this.state.switch_2 ? 'indigo-text':'text-danger'}`}>Medallas</div>
                            </div>
                            
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
    handleChangeInput = (e) =>
    {
        let { name , value } = e.target
        this.setState({
            [name]:value
        })
    }
    handlerRequets = (e) => {

        let {name} = e.target,
            {switch_1 , switch_2, password} = this.state,
            sure = name === "check1" ? 'Beca' : 'Medalla'

        let conf = window.confirm(`¿Seguro que quieres swicthear el estado de Sección ${sure}?`),
            contSeg = 131323

        console.log(this.state);

        if (conf && password === contSeg.toString()) {
            
        
            if (name === 'check1')
             this.setState({ switch_1: !this.state.switch_1 })
            else
             this.setState({ switch_2: !this.state.switch_2 })


            if (name === 'check1' && !switch_1 ) {
                Axios({
                    method: 'put',
                    url: `/api/access`,
                    headers: { 'authorization': localStorage.Token },
                    data: {
                        beca: true
                    }
                })
                    .then(res => {
                        alert("Sección Beca ahora esta Activada");
                    })
                    .catch(err => {
                        console.log('Error en el requets')
                        console.error(err)
                    });
            }
            else if (name === 'check1' && switch_1) {
                Axios({
                    method: 'put',
                    url: `/api/access`,
                    headers: { 'authorization': localStorage.Token },
                    data: {
                        beca: false
                    }
                })
                    .then(res => {
                        alert("Sección Beca ahora esta Desactivada");
                    })
                    .catch(err => {
                        console.log('Error en el requets')
                        console.error(err)
                    });
            }
            else if (name === 'check2' && !switch_2) {
                console.log("check2 False a true")
                Axios({
                    method: 'put',
                    url: `/api/access`,
                    headers: { 'authorization': localStorage.Token },
                    data: {
                        medall: true
                    }
                })
                    .then(res => {
                        alert("Sección Medalla ahora esta Activada");
                    })
                    .catch(err => {
                        console.log('Error en el requets')
                        console.error(err)
                    });
            }
            else if (name === 'check2' && switch_2) {
                console.log("check2 True a False")
                Axios({
                    method: 'put',
                    url: `/api/access`,
                    headers: { 'authorization': localStorage.Token },
                    data: {
                        medall: false
                    }
                })
                    .then(res => {
                        alert("Sección Medalla ahora esta Desactivada");
                    })
                    .catch(err => {
                        console.log('Error en el requets')
                        console.error(err)
                    });
            }

        }
        else
        {
            alert("Proceso denegado!")
        }

        this.setState({
            password:''
        })
    }
}

export default Switch;
