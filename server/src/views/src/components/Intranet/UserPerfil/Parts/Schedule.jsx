import React, { Fragment } from 'react';
import {Row, Container, Table, TableHead, TableBody} from 'mdbreact';

const Schedule = (props) => {
    let { schedule } = props.user.request

    return (
        <Fragment>
            <p className="h4-responsive text-center py-4">Horario para la Ayudantia</p>
            <Row className="grey-text text-center ">
                        <Container>
                        <Table className="text-dark" bordered>
                            <TableHead>
                                <tr>
                                    <th>Dia</th>
                                    <th>Horario</th>
                                </tr>
                            </TableHead>
                            <TableBody>
                                <tr>
                                    <td className="lead h4 align-middle">
                                        <div className="text-center">Lunes</div>
                                    </td>
                                    <td >
                                        <p className="indigo-text">Lunes entrada: <span className="text-dark">{schedule.mondayE}</span></p>
                                        <p className="indigo-text">Lunes salida: <span className="text-dark">{schedule.mondayS}</span></p>
                                    </td>       
                                </tr>
                                <tr>
                                    <td className="lead h4 align-middle">
                                        <div className="text-center">Martes</div>
                                    </td>
                                    <td >
                                        <p className="indigo-text">Martes entrada: <span className="text-dark">{schedule.tuesdayE}</span></p>
                                        <p className="indigo-text">Martes salida: <span className="text-dark">{schedule.tuesdayS}</span></p>
                                    </td>       
                                </tr>
                                <tr>
                                    <td className="lead h4 align-middle">
                                        <div className="text-center">Miercoles</div>
                                    </td>
                                    <td >
                                        <p className="indigo-text">Miercoles entrada: <span className="text-dark">{schedule.wednesdayE}</span></p>
                                        <p className="indigo-text">Miercoles salida: <span className="text-dark">{schedule.wednesdayS}</span></p>
                                    </td>       
                                </tr>
                                <tr>
                                    <td className="lead h4 align-middle">
                                        <div className="text-center">Jueves</div>
                                    </td>
                                    <td >
                                        <p className="indigo-text">Jueves entrada: <span className="text-dark">{schedule.thursdayE}</span></p>
                                        <p className="indigo-text">Jueves salida: <span className="text-dark">{schedule.thursdayS}</span></p>
                                    </td>       
                                </tr>
                                <tr>
                                    <td className="lead h4 align-middle">
                                        <div className="text-center">Viernes</div>
                                    </td>
                                    <td >
                                        <p className="indigo-text">Viernes entrada: <span className="text-dark">{schedule.fridayE}</span></p>
                                        <p className="indigo-text">Viernes salida: <span className="text-dark">{schedule.fridayS}</span></p>
                                    </td>       
                                </tr>
                                               
                            </TableBody>
                        </Table>
                                <hr/>
                                <br/>
                                <div className="text-center">
                                    <p className="indigo-text">Habilidades y destresas</p>
                                    <p className="text-capitalize">{schedule.skills}</p>
                                    <br/>
                                    <p className="indigo-text">Actividades a desempeñar</p>
                                    <p className="text-capitalize">{schedule.activity}</p>
                                </div>
                        </Container>
                    </Row>
        </Fragment>
    );
}

export default Schedule;
