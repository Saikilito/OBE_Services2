import React, { Component } from 'react';
import { Fa, Button} from 'mdbreact'

class Apply extends Component {

  state={
    selector:'ci',
    search:''
  }
  render() {
    return(
    <div>
      <form className="border-warning bg-light mt-5 mb-5 p-5">
                <div className="form-group">
                    <Fa icon="search" size="lg" className="ml-1" />
                    <label className="label">Buscar estudiantes</label>
                    <select onChange={this.onHandlerSelector} name="selector" className="form-control">
                        <option value="ci">Por cedula</option>
                        <option value="accepted">Verificados</option>
                        <option value="without">Sin solicitar</option>
                        <option value="waiting">En espera</option>
                        <option value="rejected">Rechazados</option>
                    </select>
                    {this.onSearchInput()}
                </div>
                
                <Button onClick={this.onHandlerSerch} color="elegant">Buscar</Button>

            </form>
    </div>
  )}
  onHandlerSelector = (e) => {
    const option = e.target.value
    this.setState({
        selector: option
    })
  }
  onSearchInput = () =>
  {
      if(this.state.selector === "ci")
      {
          return  <div className="form-inline md-form mt-4">
                      <input name="search" onChange={this.onSerching} className="form-control mr-sm-2 mb-0" type="text" placeholder="Search" aria-label="Search"/>
                  </div>
      }
  }
  onSerching = (e) =>
  {   
      let { name , value } = e.target
      console.log(value,"target")
      console.log(this.state.search,"state")

      this.setState({
        [name]:value
      })
  }
  onHandlerSerch = (e) =>
  {
      e.preventDefault()
    console.log(this.state.selector)
      let graduandos = this.state.selector
      let usersAll = this.props.allUsers
      let users  
      
        users = usersAll.filter((e,i)=>{
            if(e.type === 'student')
                return e
            else return null
        })

      if(graduandos === "accepted")
      {
          let backUser = users.filter((e,i)=>{
              if(e.medal.status === "accepted")
                  return e
              
              else return null
          })

          this.props.studentList(backUser);
      }
      else if(graduandos === "waiting")
      {
          let backUser = users.filter((e,i)=>{
              if(e.medal.status === "waiting")
                  return e
              
              else return null
          })

          this.props.studentList(backUser);
      }
      else if(graduandos === "without")
      {
          let backUser = users.filter((e,i)=>{
              if(e.medal.status === "without")
                  return e
              
              else return null
          })

          this.props.studentList(backUser);
      }
      else if(graduandos === "rejected")
      {
          let backUser = users.filter((e,i)=>{
              if(e.medal.status === "rejected")
                  return e
              
              else return null
          })

          this.props.studentList(backUser);
      }
      else if (graduandos === "ci")
      {
          let civ = this.state.search
          
          let backUser = users.filter((e,i)=>{
              if(e.ci.toString() === civ && e.type !== 'worker' && e.type !== "adm" )
                  return e        
              else   
                  return null
          })

          this.props.studentList(backUser);
      }
  }
}


export default Apply;