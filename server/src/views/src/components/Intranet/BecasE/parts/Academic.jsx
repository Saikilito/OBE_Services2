import React, { Component } from 'react';
import { Input, Card, CardBody } from 'mdbreact';

class Academic extends Component {
    state={
        ready:false,
        faculty:'',
        school:'',
        sem:'',
        average:'',
        efficiency:'',
        academicIndex:''
    }
    handlerChange = (e) =>{
        let { name,value } = e.target

        this.setState({
            [name]:value
        })
    }
    formRedy = (e) =>
    {
        e.preventDefault();

        for (let i in this.state) {
            if (this.state[i] === "") {
                alert("Por favor verifique todos los campos")
                console.log(this.state,"estado")
                console.log(i)
                this.setState({ redy: false, cDisabled:false })
                return null
            }
        }

        let JSONData = JSON.stringify(this.state)
        !this.state.ready ? localStorage.setItem('AcademicData',JSONData) : localStorage.removeItem('AcademicData')
        this.setState({ready:!this.state.ready})
    }
    render()
    {
        return (
            <Card className="shadow">
                <CardBody>
                    <p className="h4 text-center py-2">DATOS ACADEMICOS</p>
                    <div className="grey-text">
                        <Input onChange={this.handlerChange} name="faculty" label="Facultad" icon=" fa-university" type="text" rows="2" disabled={this.state.ready} />
                        <Input onChange={this.handlerChange} name="school" label="Escuela" type="text" rows="2" disabled={this.state.ready} />
                        <Input onChange={this.handlerChange} name="sem" label="Años/Sem" type="text" rows="1" disabled={this.state.ready} />
                        <Input onChange={this.handlerChange} name="average" max="20" label="Promedio Ponderado" type="number" rows="2" disabled={this.state.ready} />
                        <Input onChange={this.handlerChange} name="efficiency" label="Eficiencia" type="number" rows="2" disabled={this.state.ready} />
                        <Input onChange={this.handlerChange} name="academicIndex" label="Indice Academico" type="number" rows="2" disabled={this.state.ready} />

                        <button onClick={this.formRedy} className="btn btn-outline-cyan btn-block mb-4">{this.state.ready ? 'Editar datos':'Verificar datos'}</button>
                        <div className="text-center exp">
                            <div >
                                <input className="checkbox" type="checkbox" 
                                    checked={this.state.ready}
                                    onClick={this.handleCheckbox}
                                    name="check" 
                                    disabled={true} 
                                />
                                <label>
                                    <span></span>
                                </label>
                            </div>
                        </div>

                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default Academic;
