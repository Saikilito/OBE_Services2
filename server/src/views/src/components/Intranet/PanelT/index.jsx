import React, { Component } from 'react';

import TableE from './parts/TableE';
import Quarer from './parts/Quarer';
import Switch from './parts/Switch';

class PanelT extends Component {
    render() {
        return (
            <div>
                <div className={`container`}>
                    <h2 className="display-3 mt-3 p-3 text-center">Panel del Trabajador</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <Quarer user={this.props.user} />
                            {
                                this.props.user.type === 'adm' ? (
                                    <Switch access={this.props.access} user={this.props.user}/>
                                    ):(
                                        null
                                )
                            }
                        </div>
                        <div className="col-md-8 ">
                            <TableE allUsers={this.props.allUsers} />
                        </div>
                        <div className="col-md-4">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PanelT;
