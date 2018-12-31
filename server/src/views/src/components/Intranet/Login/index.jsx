import React, { Component } from 'react';
import Styles from './login.module.css';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

import NavbarT from '../NavbarT';

const image = [{ src: "/assets/slider/sl9e.jpg" }];

class Login extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      email:'',
      password:'',
    }
    this.onHandlerLogin = this.onHandlerLogin.bind(this);
    this.onHandlerInput = this.onHandlerInput.bind(this);
  }

  isLogged = () =>{
    if(this.props.logged === true)
      return <Redirect to={'/'}/>
  }

  render() {
    return(
    <div>
      {
        this.isLogged()
      }
      <NavbarT/>
      <div>
        <img src={image[0].src} alt="header-register" className="img-fluid" />
      </div>
      <div className="bg-dark p-5 text-white text-center">
        <h2 className="display-3">Ingresa tus datos</h2>
      </div>
      <div className="row mr-0 bg-light">
        <div className="col">
          <div className={`container-fluid ${Styles.root}`}>
            <div className="container">
            
            {/* Formulario */}
              <form onSubmit={this.onHandlerLogin} className="border-warning bg-light mt-5 mb-5 p-5">
                <div className="form-group">

                  <span className="input-group-addon">
                    <i className="fa fa-envelope fa-lg mr-2"></i>
                  </span>
                  <label className="label">Correo Electronico</label>
                  <input onChange={this.onHandlerInput} type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                  <span className="input-group-addon fa-lg mr-2">
                    <i className="fa fa-lock"></i>
                  </span>
                  <label>Contaseña</label>
                  <input onChange={this.onHandlerInput} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                  <button type="submit" className="btn elegant-color">Ingresar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
  
  onHandlerInput(e)
  {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  onHandlerLogin(e)
  {
    e.preventDefault();
  
    let data = this.state
    let {email,password} = this.state

    if (email === '' || password === '')
    {
      alert("Por favor verifique que no existan campos vacios");
      return null
    }
    
    console.log('Ok... Pidiendo los datos el usuario sesion')
    Axios.post('/api/signin', data)
      .then(res=> {
          let {_id} = res.data.user
          localStorage.setItem('User',_id)
          localStorage.setItem('Token',res.data.token)
          console.log("Listo... Recibi los datos de Usuario sesion", res.data.user)
          this.props.userC(res.data.user)
        }
      )
      .catch(error => {
        console.log(error)
        alert("Usuario y/o contraseña invalida")
      });
      
  }
}


export default Login;