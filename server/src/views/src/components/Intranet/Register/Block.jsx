import React, { Component , Fragment } from 'react';
import { Input } from 'mdbreact';

class Block extends Component {
    constructor(props) {
        super(props);
        this.state ={
                selector: '',
                name:'',
                lastname:'',
                nationality:'',
                ci:'',
                sex:'',
                email:'',
                password:'',
            }
    }
    render() {
        return (
            <Fragment>                           
            <Input 
                name="lastname"
                onChange={this.onHandleChangeInput}
                ref={(ref) => { this.lastnameRef = ref; }} label="Apellidos" group type="text" validate error="wrong" success="right" size="sm" />
    
            <label htmlFor="sex">Nacionalidad</label>
            <select 
                name="nationality"
                onChange={this.onHandleChangeInput}
                ref={(ref) => { this.nationalityRef = ref; }} id="nationality">
    
                <option value="Venezolano">Venezolano</option>
                <option value="Extrangero">Extrangero</option>
    
            </select>
    
            <Input 
                name="ci"
                onChange={this.onHandleChangeInput}
                ref={(ref) => { this.ciRef = ref; }} 
                label="Cedula de identidad" icon="tag" group type="number" validate error="wrong" success="right" size="sm" />
    
            <label htmlFor="sex">Sexo</label>
            <select 
                name="sex"
                onChange={this.onHandleChangeInput}
                ref={(ref) => { this.sexRef = ref; }} id="sex">
    
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
    
            </select>
    
            <Input 
                name="email"
                onChange={this.onHandleChangeInput}
                ref={(ref) => { this.emailRef = ref; }} 
                label="Email" icon="envelope" group type="email" validate error="wrong" success="right" size="sm" />
    
            <Input 
                
                
                label="Contraseña" icon="lock" group type="password" validate error="wrong" success="right" size="sm" />
    
            <Input 
                name="password"
                onChange={this.onHandleChangeInput}
                ref={(ref) => { this.passwordRef = ref; }} 
                label="Confimar contraseña" group type="password" validate error="wrong" success="right" size="sm" />
    
        </Fragment>
        );
    }
}

export default Block;
