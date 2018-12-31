import React, { Component } from 'react';
import { Table, TableBody, TableHead, Badge } from 'mdbreact';

class TableE extends Component {

    render() {
        let ayudantia = 0, estudiantil = 0, ayEc = 0, other = 0,
            waiting = 0, without = 0,

            mAccepted = 0 , mWaiting = 0 , mWithout = 0 , mRejected = 0 

        if (this.props.allUsers.lengh !== 0) {
            this.props.allUsers.forEach((e, i) => {
                if(e.type === 'student')
                {
                    if (e.scholarship === "Ayudantia" && e.scholarshipStatus === "accepted")
                        ayudantia++
                    else if (e.scholarship === "Estudiantil" && e.scholarshipStatus === "accepted")
                        estudiantil++
                    else if (e.scholarship === "Preparador" && e.scholarshipStatus === "accepted")
                        ayEc++
                    else if (e.scholarshipStatus === "waiting")
                        waiting++
                    else if (e.scholarshipStatus === "without")
                        without++
                    else if (e.scholarshipStatus === "accepted")
                        other++
                }
            })

            this.props.allUsers.forEach((e, i) => {
                if(e.type === 'student')
                {
                    if (e.medal.status === "accepted")
                        mAccepted++
                    else if (e.medal.status === "rejected")
                        mRejected++
                    else if (e.medal.status === "waiting")
                        mWaiting++
                    else if (e.medal.status === "without")
                        mWithout++
                }
            })
        }

        let registrados = estudiantil + ayEc + ayudantia + other + waiting + without,
            bec = ayEc + estudiantil + ayudantia + other,
            grad = mAccepted+mWithout+mWaiting+mRejected

        return (
            <Table>
                <TableHead color="danger-color" textWhite>
                    <tr>
                        <th>#</th>
                        <th>Estado</th>
                        <th>Cantidad</th>
                        <th>Porcentaje</th>

                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <td>
                            <legend className="text-center">Estudiantes Becados</legend>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Estudiantil</td>
                        <td>
                            <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{estudiantil}</Badge>
                        </td>
                        <td>    <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{bec === 0 ? '0' : ((estudiantil*100)/bec).toFixed(2)}%</Badge> </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Ayundatia</td>
                        <td>
                            <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{ayudantia}</Badge>
                        </td>
                        <td>  <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{bec === 0 ? '0' : ((ayudantia*100)/bec).toFixed(2)}%</Badge>    </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Ayuda Economica</td>
                        <td>
                            <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{ayEc}</Badge>
                        </td>
                        <td>  <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{bec === 0 ? '0' : ((ayEc*100)/bec).toFixed(2)}%</Badge>    </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Otros</td>
                        <td>
                            <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{other}</Badge>
                        </td>
                        <td>  <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{bec === 0 ? '0' : ((other*100)/bec).toFixed(2)}%</Badge>    </td>
                    </tr>
                    <tr>
                        <td>
                            <legend className="text-center">Estudiantes & Becas</legend>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Becados</td>
                        <td>
                            <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{bec}</Badge>
                        </td>
                        <td> <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{((bec*100)/registrados).toFixed(2)}%</Badge> </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>En espera</td>
                        <td>
                            <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{waiting}</Badge>
                        </td>
                        <td>  <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{((waiting*100)/registrados).toFixed(2)}%</Badge> </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Sin becas</td>
                        <td>
                            <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{without}</Badge>
                        </td>
                        <td>  <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{((without*100)/registrados).toFixed(2)}%</Badge>   </td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>Registrados</td>
                        <td>
                            <Badge color="indigo" style={{'fontSize':'.75rem'}} pill>{registrados}</Badge>
                        </td>
                        <td>  <Badge color="indigo" style={{'fontSize':'.75rem'}}  pill>100.00%</Badge>  </td>
                    </tr>
                    <tr>
                        <td>
                            <legend className="text-center">Estudiantes & Medallas</legend>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Verificados</td>
                        <td>
                            <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{mAccepted}</Badge>
                        </td>
                        <td>  <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{((mAccepted*100)/grad).toFixed(2)}%</Badge>     </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Sin Solicitar</td>
                        <td>
                            <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{mWithout}</Badge>
                        </td>
                        <td> <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{((mWithout*100)/grad).toFixed(2)}%</Badge>    </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Procesando</td>
                        <td>
                            <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{mWaiting}</Badge>
                        </td>
                        <td>  <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{((mWaiting*100)/grad).toFixed(2)}%</Badge>     </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Rechazados</td>
                        <td>
                            <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{mRejected}</Badge>
                        </td>
                        <td> <Badge color="danger" style={{'fontSize':'.75rem'}} pill>{((mRejected*100)/grad).toFixed(2)}%</Badge>   </td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>Graduandos</td>
                        <td>
                            <Badge color="indigo" style={{'fontSize':'.75rem'}} pill>{grad}</Badge>
                        </td>
                        <td> <Badge color="indigo" style={{'fontSize':'.75rem'}} pill>100.00%</Badge>   </td>
                    </tr>
                </TableBody>
            </Table>
        );
    }
}

export default TableE;
