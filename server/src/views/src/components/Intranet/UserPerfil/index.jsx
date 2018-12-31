import React, { Component, Fragment } from 'react';
import { Button, Collapse } from 'mdbreact';

import Table from './Parts/TableE';
import Quarer from './Parts/Quarer';
import Document from './Parts/Document';
import DocumentE from '../PanelE/Parts/DocumentE';
import Schedule from './Parts/Schedule';

class UserPerfil extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            collapse1: false,
            collapse2: false,
            collapse3: false,
        };
    }

    toggle(e) {
        const { name } = e.target

        if (name === "collapse1")
            this.setState({ [name]: !this.state.collapse1 });
        else if (name === "collapse2")
            this.setState({ [name]: !this.state.collapse2 });
        else if (name === "collapse2")
            this.setState({ [name]: !this.state.collapse2 });
    }
    render() {
        let rec = localStorage.getItem('Perfil')
        let user = JSON.parse(rec)
        return (
            <Fragment>

                <div className={`container align-middle`}>
                    <h2 className="display-3 mt-3">Perfil del Estudiante</h2>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="card red lighten-5">
                                <div className="card-body">
                                    <Quarer user={user} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 offset-md-1">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    <Table user={user} />
                                </div>
                            </div>
                            {/* ---Accordeon--- */}
                            <div>

                                <Button name="collapse2" color="success" onClick={this.toggle} style={{ marginBottom: "1rem" }} className="mt-5 btn-block">Datos Del Estudiante</Button>
                                <Collapse isOpen={this.state.collapse2}>
                                    <div className="card shadow-lg mt-5">
                                        <div className="card-body">
                                            {
                                                user.request ? (
                                                    <Document user={user} />
                                                ) : (
                                                        null
                                                    )
                                            }
                                        </div>
                                    </div>

                                </Collapse>

                            </div>
                            {/* ---Accordeon--- */}
                            <div>
                                <Button name="collapse1" color="success" onClick={this.toggle} style={{ marginBottom: "1rem" }} className="mt-5 btn-block">Datos Socioeconomicos</Button>
                                <Collapse isOpen={this.state.collapse1}>
                                    <div className="card shadow-lg mt-5">
                                        <div className="card-body">
                                            {
                                                user.request ? (
                                                    <DocumentE user={user} />
                                                ) : (
                                                        null
                                                    )
                                            }
                                        </div>
                                    </div>
                                </Collapse>

                            </div>
                            {/* ---Accordeon--- */}
                            <div>
                                <Button name="collapse3" color="success" onClick={this.toggle} style={{ marginBottom: "1rem" }} className="mt-5 btn-block">Horario</Button>
                                <Collapse isOpen={this.state.collapse3}>
                                    <div className="card shadow-lg mt-5">
                                        <div className="card-body">
                                            {
                                                user.request ? (
                                                    user.request.schedule ? (
                                                        <Schedule user={user} />
                                                    ) : (
                                                            null
                                                        )
                                                ) : (null)
                                            }
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default UserPerfil;


