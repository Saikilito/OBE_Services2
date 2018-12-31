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
                        <option value="workers">Ver todos</option>
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

       
        if (becados === "ci")
        {
            let civ = this.state.search
            
            let backUser = users.filter((e,i)=>{
                if(e.ci.toString() === civ )
                    return e        
                else   
                    return null
            })

            this.props.studentList(backUser);
        }
        else if (becados === "workers")
        {
            this.props.studentList(users);
        }
    }
}

export default Apply;
