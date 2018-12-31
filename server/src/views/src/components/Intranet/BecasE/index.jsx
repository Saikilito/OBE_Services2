import React, { Component } from 'react';

import Apply from './parts';
import Styles from './becas.module.css';
import './checkbox.module.css';

class BecasE extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scholarshipStatus: "null"
    }
  }

  componentWillMount()
  {
    this.setState({
      scholarshipStatus: "without"
    })
  }

  render() {
    return (
      <div>
        <div className="bg-dark p-5 text-white text-center">
          <h2 className="display-3">Solicitud de beca </h2>
        </div>
        <div className="row mr-0 bg-light">
          <div className="col">
            <div className={`container-fluid ${Styles.root}`}>
              <div className="container">
                {
                  this.onHandleCreateInputs()
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  onHandleCreateInputs = () =>
  {
    
    const {scholarshipStatus} = this.props.user;
    // const scholarshipStatus = 'without';
    if(scholarshipStatus === "accepted")
      return <div className="container display-4 text-center p-5"><p>Ud. Ya tiene una beca asignada</p></div>
    else if (!this.props.access)
      return <div className="container display-4 text-center p-5"><p>En estos momentos no estamos captando becarios, espere hasta nuevo aviso</p></div>
    else if(scholarshipStatus === "without")
      return <Apply user={this.props.user}/>
    else if (scholarshipStatus === "waiting")
    return <div className="container display-2 text-center p-5"><p>Su beca aún se esta procesando</p></div>
      
  }
}

export default BecasE;
