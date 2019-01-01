import React, { Component } from 'react';
import {Switch, Route } from "react-router-dom";
import Axios from 'axios';
import History from './Routes/History';

//Components
import Home from './Home';
import { FooterO, Error404 } from './Layouts';
import { Login, PanelE, PanelT, BecasA, BecasE, BecasT, MedalE, MedalT,
          NavbarE, UserPerfil, UserPerfilA, UserMedal, Register, Workers } from './Intranet';


class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
        stage: 0,
        user: {},
        userRec:{},
        allUsers: [],
        allAccess:{}
      }
      this.getAllUsers = this.getAllUsers.bind(this);
  }
  
  //Stage : 0 - - - Usuario no autentcado
  //Stage : 1 - - - Usuario autenticado

  //Los Componentes con prefijo A son componente para el Administrados
  //Los Componentes con prefijo T son componente para el Trabajador
  //Los Componentes con prefijo E son componente para el Estudiante


  componentWillMount() {
    console.log("App WillMount")

    if (localStorage.User){
      this.getUserForSession();
    }
  }
  
  render() {
    console.log("App Render, El stage es :",this.state.stage)

    if (this.state.stage === 0) {
      return (
          <React.Fragment>

            <Switch>
              <Route exact path="/" render={() => <Home logged={localStorage.User ? true:false} />} />
              <Route exact path="/login" render={() => <Login logged={localStorage.User ? true:false} userC={this.handlerUserCap} />} />
              {/* <Route path="*" component={Error404} /> */}
            </Switch>
            <FooterO />
          
          </React.Fragment>
      )
    }
    else if(this.state.stage === 1)
    {
        const workers = this.state.allUsers.filter((e)=>e.type === 'worker')
        const students = this.state.allUsers.filter((e)=>e.type === 'student')
      
      return (
          <React.Fragment>
            {console.log("App Render Return, Usuario es: ", this.state.user.name)}
            <Switch>
              <Route exact path="/" render={() => <Home type={this.state.user.type} logged={localStorage.User ? true:false}/>} />
              <Route exact path="/login" render={() => <Login logged={localStorage.User ? true:false} userC={this.handlerUserCap} />} />

              <React.Fragment>

                <NavbarE user={this.state.user} />
                <figure className="m-0">
                  <img style={{'width':'100vw'}} src={"/assets/slider/sl9e.jpg"} alt="header-register" className="img-fluid" />
                </figure>
                {this.handlerPanel()}
                {this.handlerBecas(students)}
                {this.handlerMedal(students)}
                <Route exact path="/workers" render={()=> <Workers allUsers={workers} fRecovery={this.fRecovery}/>} />
                <Route exact path="/register" render={() => <Register/>} />
                
  
              </React.Fragment>
              
              <Route exact path="*" component={Error404} />
              
            </Switch>
            <FooterO />
  
          </React.Fragment>
      )
    }
  }

  getUserForSession = () =>
  {
    
    this.getAllAccess()

    Axios({
      method: 'get',
      url: `/api/users/${localStorage.User}`,
      headers: { 'authorization': localStorage.Token }
    })
    .then(res => {
          if(res.data.user.type !== 'student')
            this.getAllUsers(res.data.user)
          else
            this.setState({
              stage:1,
              user:res.data.user
            })
      
        })
        .catch(err =>{
          console.error(err)
        });
  }
  async getAllAccess () 
  {
      console.log("Obteniendo Accesos");

      const allAccess = await Axios({
        method: 'get',
        url: `/api/access`,
        headers: { 'authorization': localStorage.Token }
      })

      await this.setState({
        allAccess: allAccess.data.access
      })
      
      if(allAccess.status !== 200 ) console.log("Error in getAllUsers")
  }
  async getAllUsers (user) 
  {
    if (localStorage.User && this.state.allUsers.length === 0 && user.type !== "student") {
      
      const allUser = await Axios({
        method: 'get',
        url: `/api/users`,
        headers: { 'authorization': localStorage.Token }
      })

      await this.setState({
        user,
        stage: 1,
        allUsers: allUser.data.users
      })
      
      if(allUser.status !== 200 ) console.log("Error in getAllUsers")
    }
  }

  handlerUserCap = (user) => {
    this.getAllAccess()
    if (user.type === "student")
    {
      History.push('/panele')
      this.setState({ user , stage:1 })
    }
    else{
      this.getAllUsers(user)
      History.push('/panelt')
    }
  }

  
  handlerPanel = () => {
    if (this.state.user.type === 'student')
    return <Route exact path="/panele" render={()=><PanelE user={this.state.user}/>} />
    else
    return <Route exact path="/panelt" render={()=><PanelT access={this.state.allAccess} allUsers={this.state.allUsers} user={this.state.user} />} />
  }
  handlerMedal = (students) => {
    if (this.state.user.type === 'student')
    return <Route exact path="/medale" render={()=><MedalE access={!this.state.allAccess.medall} user={this.state.user}/>} />
    else{
      return <React.Fragment>
      <Route exact path="/medalt" render={()=> <MedalT fRecovery={this.fRecoveryMedal} allUsers={students} />} />
      <Route exact path="/medal/:id" render={()=><UserMedal />}/>
            </React.Fragment>
    }
  }
  handlerBecas = (students) => {
    if (this.state.user.type === 'student')
      return <Route exact path="/becase" render={()=><BecasE access={this.state.allAccess.beca} user={this.state.user}/>} />
    else if (this.state.user.type === 'worker')
    {
      return <React.Fragment>
        <Route exact path="/becast" render={() => <BecasT fRecovery={this.fRecovery} allUsers={students} />} />
        <Route exact path="/becas/:id" render={()=><UserPerfil />}/>
      </React.Fragment>
    }
    else if (this.state.user.type === 'adm')
    {
      return <React.Fragment>
        <Route exact path="/becasa" render={() => <BecasA fRecovery={this.fRecovery} allUsers={students} />} />
        <Route exact path="/becas/:id" render={()=><UserPerfilA />}/>
      </React.Fragment>
    }
  }
  fRecovery = (user) => 
  {
    console.log("Se Recobro a: ",user.name);
    let subir = JSON.stringify(user);
    localStorage.setItem('Perfil',subir)
    History.push(`/becas/${user.ci}${user.lastname.split(' ')[0]}`)
    this.setState({userRec:user})
  }
  fRecoveryMedal = (user) => 
  {
    console.log("Se Recobro a: ",user.name);
    let subir = JSON.stringify(user);
    localStorage.setItem('Perfil',subir)
    History.push(`/medal/${user.ci}${user.lastname.split(' ')[0]}`)
    this.setState({userRec:user})
  }
}

export default App;