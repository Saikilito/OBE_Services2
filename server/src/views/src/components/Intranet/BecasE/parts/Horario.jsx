import React from 'react';
import { Table, TableBody, TableHead, Container, Row, Fa, Input, Card, CardBody } from 'mdbreact';

// const Horario = () => {
class Horario extends React.Component {
    state = {
        ready:false,
        mondayE:'',
        mondayS:'',
        tuesdayE:'',
        tuesdayS:'',
        wednesdayE:'',
        wednesdayS:'',
        thursdayE:'',
        thursdayS:'',
        fridayE:'',
        fridayS:'',
        activity:'',
        skills:''
    }
    formRedy = () =>
    {
        console.log(this.state)
        let JSONData = JSON.stringify(this.state)
        !this.state.ready ? localStorage.setItem('ScheduleData',JSONData) : localStorage.removeItem('ScheduleData')
        this.setState({ready:!this.state.ready})
    }
    handleOnChange = (e) =>{
        let { name, value } = e.target
        this.setState({
            [name]:value
        })
    }
    render()
    {
        return (
            <Card className="shadow">
                <CardBody>
                    <p className="h4 text-center py-4">HORARIO DISPONIBLE PARA AYUDANTIA</p>
                    <div className="text-center mb-5">
                        <Fa icon=" fa-clock-o" spin size="3x" fixed />
                    </div>
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
                                        <div><Input name="mondayE" onChange={this.handleOnChange} id="mondayEntrada" group type="time" validate error="wrong" success="right" disabled={this.state.ready} /></div>
                                        <div><Input name="mondayS" onChange={this.handleOnChange} id="mondaySalida" group type="time" validate error="wrong" success="right" disabled={this.state.ready} /></div>
                                    </td>       
                                </tr>
                                <tr>
                                    <td className="lead h4 align-middle">
                                        <div className="text-center">Martes</div>
                                    </td>
                                    <td >
                                        <div><Input name="tuesdayE" onChange={this.handleOnChange} id="tuesdayEntrada" group type="time" validate error="wrong" success="right" disabled={this.state.ready} /></div>
                                        <div><Input name="tuesdayS" onChange={this.handleOnChange} id="tuesdaySalida" group type="time" validate error="wrong" success="right" disabled={this.state.ready} /></div>
                                    </td>       
                                </tr>
                                <tr>
                                    <td className="lead h4 align-middle">
                                        <div className="text-center">Miercoles</div>
                                    </td>
                                    <td >
                                        <div><Input name="wednesdayE" onChange={this.handleOnChange} id="wednesdayEntrada" group type="time" validate error="wrong" success="right" disabled={this.state.ready} /></div>
                                        <div><Input name="wednesdayS" onChange={this.handleOnChange} id="wednesdaySalida" group type="time" validate error="wrong" success="right" disabled={this.state.ready} /></div>
                                    </td>       
                                </tr>
                                <tr>
                                    <td className="lead h4 align-middle">
                                        <div className="text-center">Jueves</div>
                                    </td>
                                    <td >
                                        <div><Input name="thursdayE" onChange={this.handleOnChange} id="thursdayEntrada" group type="time" validate error="wrong" success="right" disabled={this.state.ready} /></div>
                                        <div><Input name="thursdayS" onChange={this.handleOnChange} id="thursdaySalida" group type="time" validate error="wrong" success="right" disabled={this.state.ready} /></div>
                                    </td>       
                                </tr>
                                <tr>
                                    <td className="lead h4 align-middle">
                                        <div className="text-center">Viernes</div>
                                    </td>
                                    <td >
                                        <div><Input name="fridayE" onChange={this.handleOnChange} id="fridayEntrada" group type="time" validate error="wrong" success="right" disabled={this.state.ready} /></div>
                                        <div><Input name="fridayS" onChange={this.handleOnChange} id="fridaySalida" group type="time" validate error="wrong" success="right"  disabled={this.state.ready}/></div>
                                    </td>       
                                </tr>
                               
                            </TableBody>
                        </Table>
                        </Container>
                    </Row>
                    <Input onChange={this.handleOnChange} name="skills" label="Habilidades y destresas" group type="textarea" validate error="wrong" success="right" disabled={this.state.ready}/>
                    <Input onChange={this.handleOnChange} name="activity" label="Actividades a deempeñar" group type="textarea" validate error="wrong" success="right" disabled={this.state.ready}/>
                     <label className="custom-control material-checkbox">
							    <input onClick={this.formRedy} type="checkbox" defaultChecked={this.state.ready}/>
							    <span>He verificado y confirmo que es correcta la información suministrada</span>
					</label>
                </CardBody>
            </Card>
        );
    }
}

export default Horario;
