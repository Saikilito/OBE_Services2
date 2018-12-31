import React, { Component } from 'react';

import Table from './Parts/TableE';
import Quarer from './Parts/Quarer';
import MedalInfo from './Parts/MedalInfo';


class UserMedal extends Component {
    state = {
        disabled: true
    }
    render() {
        let rec = localStorage.getItem('Perfil')
        let user = JSON.parse(rec)
        return (
            <div>
                <div className={`container align-middle`}>
                    <h2 className="display-3 mt-3">Perfil del Estudiante</h2>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="card red lighten-5">
                                <div className="card-body">
                                    <Quarer edit={this.state.disabled} user={user} />

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 offset-md-1">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    {
                                        user.type === 'student' ? (
                                            <Table user={user} />
                                        ) : (null)
                                    }
                                </div>
                            </div>
                            <div className="card shadow-lg mt-5">
                                <div className="card-body">
                                    {
                                        (user.medal.status !== false || user.medal.status !== 'without')?
                                            (< MedalInfo user={user}/>)
                                        :
                                            (null)
                                    }
                                    
                            </div>
                            </div>
                        </div>
                        <div className="card shadow-lg mt-5">
                            <div className="card-body">

                                <img style={{ maxHeight: '30em' }} className="img-fluid" src={`http://localhost:3001/${user.ci}.${user.medal.extension}`} alt="deposit" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    handlerClickEdit = (e) => {
        this.setState({ disabled: !this.state.disabled })
    }
}

export default UserMedal;


