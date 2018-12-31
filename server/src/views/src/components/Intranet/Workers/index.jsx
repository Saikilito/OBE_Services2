import React, { Component , Fragment  } from 'react';
import { Button } from 'mdbreact'

import Apply from './apply';
import Styles from './becas.module.css';
class BecasA extends Component {

  constructor(props) {
    super(props);
    this.state = {
      studentList: null
    }
  }

  render() {
    return (
      <div>
        <div className="bg-dark p-5 text-white text-center">
          <h2 className="display-3">Buscar Usuarios</h2>
        </div>
        <div className="row mr-0 bg-light">
          <div className="col">
            <div className={`container-fluid ${Styles.root}`}>
              <div className="container">
                <Apply allUsers={this.props.allUsers} studentList={this.studentListCap} />
                <div className="row">
                  {this.onHandlerCreateInputs()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  studentListCap = (student) => {
    this.setState({
      studentList: student
    })
  }
  onHandlerCreateInputs = ()=> {
    if (this.state.studentList !== null) {
      let students = this.state.studentList

      return (

        students.map((e, i) => {

          let block = <div className="card shadow-lg mt-3">
                        <div className="card-body">
                        <form onSubmit={this.prevenForm}>
                          <h5 className="card-title text-center text-capitalize">{`${e.name} ${e.lastname}`}</h5>
                          <p className="card-text text-center">{`C.I.V: ${e.ci}`}</p>
                          {
                            e.type === 'student' ? (
                              <Fragment className="text-capitalize">
                                <p className="card-text">{`Facultad: ${e.faculty}`}</p>
                                <p className="card-text">{`Beca Tipo: ${e.scholarship}`}</p>
                                <p className="card-text">{`Beca Estatus: ${e.scholarshipStatus}`}</p>
                              </Fragment>
                            ):(
                              <Fragment>
                                <p className="card-text text-center text-dark">{`Trabajador`}</p>
                                <p className="card-text">{`Correo: ${e.email}`}</p>
                                <p className="card-text text-capitalize">{`Departamento: ${e.department}`}</p>
                                <p className="card-text text-capitalize">{`Posición: ${e.position}`}</p>
                              </Fragment>
                            )
                          }
                          <Button onClick={()=>this.props.fRecovery(e)} color="primary">Ver Perfil</Button>
                        </form>
                        </div>
                      </div>

          if (i % 2 === 0) {
            return (
              <div className="col-md-5 col-sm-12" key={`${i}serchStudent`}>
                {block}
              </div>)
          }
          else {
            return (
              <div className="col-md-5 offset-2 col-sm-12" key={`${i}serchStudent`}>
                {block}
              </div>)
          }
        }

        )
      )
    }
  }

  preventForm(e)
  {
    e.preventDefault();
  }
}

export default BecasA;
