import React, { Component } from 'react';
import UserMedal from '../UserMedal'

class Becas extends Component {
  render() {
    return(
    <div>
      <div className="bg-dark p-5 text-white text-center">
        <h2 className="display-3">Observar medallas </h2>
      </div>
      <UserMedal/>
      
    </div>
  )}
}


export default Becas;