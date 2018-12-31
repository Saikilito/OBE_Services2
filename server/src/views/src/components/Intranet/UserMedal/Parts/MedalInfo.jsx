import React, { Component, Fragment } from 'react';
import { Table, TableHead, TableBody } from 'mdbreact';

class MedalInfo extends Component {
    render() {
        let user = this.props.user
        return (
            <Fragment>
                <Table bordered className="text-center">
                    <TableHead color="info-color" textWhite>
                        <tr>
                            <th>Banco</th>
                            <th>De transferencia</th>
                        </tr>
                    </TableHead>
                    <TableBody className="text-center align-middle">
                        <tr>
                            <td><span className="h4 lead"> {user.medal.bank}</span></td>
                            <td><span className="h4 lead">  {user.medal.transf} </span></td>
                        </tr>
                    
                    </TableBody>
                </Table>
                <Table bordered className="text-center">
                    <TableHead color="info-color" textWhite>
                        <tr>
                            
                            <th>Fecha</th>
                        </tr>
                    </TableHead>
                    <TableBody className="text-center align-middle">
                        <tr>
                            {
                            (user.medal.date) ?
                            (<td><span className="h4 lead"> {user.medal.date.split('T')[0]} </span></td>)
                            :
                            (null)
                            }
                        </tr>

                    </TableBody>
                </Table>
                <Table bordered className="text-center">
                    <TableHead color="info-color" textWhite>
                        <tr>
                            <th>Importe Bss.</th>
                            
                        </tr>
                    </TableHead>
                    <TableBody className="text-center align-middle">
                        <tr>
                            <td><span className="h4 lead"> {user.medal.importD} </span></td>
                            
                        </tr>

                    </TableBody>
                </Table>
            </Fragment>
        );
    }
}

export default MedalInfo;
