import React, { Component } from 'react';
import { Button, Fa} from 'mdbreact';
    
class Apply extends Component {
    constructor(props) {
        super();
        this.state = {
            selector: "ci",
            search: '',
            faculty:'Ingenieria'
        }
    }
    render() {
        return (
            <form className="border-warning bg-light mt-5 mb-5 p-5">
                <div className="form-group">
                    <Fa icon="search" size="lg" className="ml-1" />
                    <label className="label">Buscar los estudiantes</label>
                    <select onChange={this.onHandlerSelector} name="selector" className="form-control">
                        <option value="ci">Por cedula</option>
                        <option value="becados">Becados</option>
                        <option value="waiting">En espera</option>
                        <option value="without">Sin Becas</option>
                        <option value="faculty">Por Facultad</option>
                    </select>
                    {this.onSearchInput()}
                </div>
                
                <Button onClick={this.onHandlerSerch} color="elegant">Buscar</Button>

            </form>
        );
    }

    onHandlerSelectorByFaculty = (e) =>
    {
        let faculty = e.target.value
        this.setState({
            faculty
        })
    }
    
    onSearchInput = () =>
    {
        if(this.state.selector === "ci")
        {
            return <div className="form-inline md-form mt-4">
                        <input name="search" onChange={this.onSerching} className="form-control mr-sm-2 mb-0" type="text" placeholder="Search" aria-label="Search"/>
                    </div>
        }
        else if(this.state.selector === "faculty")
        {
            return <div className="form-group">
                        <Fa icon="pencil" size="lg" className="ml-1" />
                        <label className="label">Seleccione una facultad</label><br />
                        <select onChange={this.onHandlerSelectorByFaculty} name="selector" className="form-control">
                            <option value="Ingenieria">Ingeniería</option>
                            <option value="Ciencias">Ciencias</option>
                            <option value="Humanidades">Humanidades</option>
                            <option value="FACES">FACES</option>
                            <option value="Medicina">Mediciona</option>
                            <option value="Odontología">Odontología</option>
                            <option value="Ciencias Políticas">Ciencias poliicas</option>
                        </select>
                    </div>
        }
    }

    onSerching = (e) =>
    {   
        let { name , value } = e.target
        console.log(e.target.value,"target")
        console.log(this.state.search,"state")
        this.setState({
          [name]:value
        })
    }

    onHandlerSelector = (e) => {
        const option = e.target.value
        this.setState({
            selector: option
        })
    }

    onHandlerSerch = (e) =>
    {
        e.preventDefault()

        let becados = this.state.selector
        let users = this.props.allUsers

        if(becados === "becados")
        {
            let backUser = users.filter((e,i)=>{
                if(e.scholarshipStatus === "accepted")
                    return e
                
                else return null
            })

            this.props.studentList(backUser);
        }
        else if(becados === "waiting")
        {
            let backUser = users.filter((e,i)=>{
                if(e.scholarshipStatus === "waiting")
                    return e
                
                else return null
            })

            this.props.studentList(backUser);
        }
        else if(becados === "without")
        {
            let backUser = users.filter((e,i)=>{
                if(e.scholarshipStatus === "without")
                    return e
                
                else return null
            })

            this.props.studentList(backUser);
        }
        else if (becados === "ci")
        {
            let civ = this.state.search
            
            let backUser = users.filter((e,i)=>{
                if(e.ci.toString() === civ && e.type !== 'worker' && e.type !== "adm" )
                    return e        
                else   
                    return null
            })

            this.props.studentList(backUser);
        }
        else if (becados === "faculty")
        {
            let faculty = this.state.faculty
            
            let backUser = users.filter((e,i)=>{
                if(e.faculty === faculty )
                    return e
                
                else return null
            })

            this.props.studentList(backUser);
        }
    }
}

export default Apply;
