import React, { Component, createRef } from 'react';
import { Card, CardBody, Fa } from 'mdbreact';

class Economic extends Component {

    state = {
        ready:false,
        mdbInput: 'disable'
    }
    dedicationWorkRef1 = createRef();
    dedicationWorkRef2 = createRef();
    dedicationWorkRef3 = createRef();
    dedicationWorkRef4 = createRef();
    workRef = createRef();
    timeWorkRef = createRef();
    benefitRef = createRef();
    liveWithRef = createRef();
    getFamilyMoneyRef = createRef();
    otherMoneyRef = createRef();
    totalStudentRef = createRef();
    paymentResidenceRef = createRef();
    foodStudentRef = createRef();
    transportStudentRef = createRef();
    materialStudentRef = createRef();
    recreationStudentRef = createRef();
    personalExpensesRef = createRef();
    medicalStudentExpensesRef = createRef();
    otherStudentExpensesRef = createRef();
    totalStudentExpensesRef = createRef();

    familyIncomeRef = createRef();
    housingExpensesRef = createRef();
    foodExpensesRef = createRef();
    servicesExpensesRef = createRef();
    phoneExpensesRef = createRef();
    condominuimExpensesRef = createRef();
    transportExpensesRef = createRef();
    medicalExpensesRef = createRef();
    otherExpensesRef = createRef();
    totalExpensesRef = createRef();
    nameResponsibleRef = createRef();
    responsibleIncomeRef = createRef();
    familyBurdenRef = createRef();

    mdbInput = () => {
        this.setState({ mdbInput: 'active' })
    }
    formRedy = (e) =>
    {
        e.preventDefault();

        let workRef2 = this.workRef.current.checked ? 'Si' : 'No';
        let dedicationWorkR;

        if (this.dedicationWorkRef1.current.checked)
            dedicationWorkR = this.dedicationWorkRef1.current.value
        else if (this.dedicationWorkRef2.current.checked)
            dedicationWorkR = this.dedicationWorkRef2.current.value
        else if (this.dedicationWorkRef3.current.checked)
            dedicationWorkR = this.dedicationWorkRef3.current.value
        else
            dedicationWorkR = 'No'

        var Data = {
                work: workRef2,
                timeWork: this.timeWorkRef.current.value,
                dedicationWork: dedicationWorkR,
                benefit: this.benefitRef.current.value,
                liveWith: this.liveWithRef.current.value,
            
            studentMoney: {
                getFamilyMoney: this.getFamilyMoneyRef.current.value,
                otherMoney: this.otherMoneyRef.current.value,
                total: this.totalStudentRef.current.value
            },
            studentExpenses: {
                paymentResidence: this.paymentResidenceRef.current.value,
                food: this.foodStudentRef.current.value,
                transport: this.transportStudentRef.current.value,
                studyMaterials: this.materialStudentRef.current.value,
                recreation: this.recreationStudentRef.current.value,
                personalExpenses: this.personalExpensesRef.current.value,
                medicalExpenses: this.medicalStudentExpensesRef.current.value,
                otherExpenses: this.otherStudentExpensesRef.current.value,
                totalExpenses: this.totalStudentExpensesRef.current.value
            },
            familyMoney: {
                familyIncome: this.familyIncomeRef.current.value,
                housingExpenses: this.housingExpensesRef.current.value,
                foodExpenses: this.foodExpensesRef.current.value,
                servicesExpenses: this.servicesExpensesRef.current.value,
                phoneExpenses: this.phoneExpensesRef.current.value,
                condominuim: this.condominuimExpensesRef.current.value,
                transport: this.transportExpensesRef.current.value,
                medicalExpenses: this.medicalExpensesRef.current.value,
                otherExpenses: this.otherExpensesRef.current.value,
                totalExpenses: this.totalExpensesRef.current.value,
                nameResponsible: this.nameResponsibleRef.current.value,
                responsibleIncome: this.responsibleIncomeRef.current.value,
                familyBurden: this.familyBurdenRef.current.value
            }
        }

        for (let i in Data) {
            if (Data[i] === "") {
                alert("Por favor verifique todos los campos")
                console.log(Data,"Data")
                console.log(i)
                this.setState({ redy: false })
                return null
            }
        }
        for (let i in Data.studentExpenses) {
            if (Data.studentExpenses[i] === "") {
                alert("Por favor verifique todos los campos")
                console.log(Data.studentExpenses,"StudentExpenses")
                console.log(i)
                this.setState({ redy: false })
                return null
            }
        }
        for (let i in Data.studentMoney) {
            if (Data.studentMoney[i] === "") {
                alert("Por favor verifique todos los campos")
                console.log(Data.studentMoney,"StudentMoney")
                console.log(i)
                this.setState({ redy: false })
                return null
            }
        }
        for (let i in Data.familyMoney) {
            if (Data.familyMoney[i] === "") {
                alert("Por favor verifique todos los campos")
                console.log(Data.familyMoney,"FamilyMoney")
                console.log(i)
                this.setState({ redy: false })
                return null
            }
        }


        console.log(Data)

        let JSONData = JSON.stringify(Data)
        !this.state.ready ? localStorage.setItem('EconomicData',JSONData) : localStorage.removeItem('EconomicData')
        this.setState({ready:!this.state.ready})
    }
    handlerChange = (e) => {
    }
    render() {
        return (
            <Card className="shadow">
                <CardBody>
                    <div className="grey-text text-center">
                        <p className="h4 text-center text-dark py-4">DATOS SOCIOECONOMICOS</p>

                        <label htmlFor="" className="text-dark h4">¿Trabaja?    </label><br />
                        <div className="custom-control custom-radio custom-control-inline">
                            <input ref={this.workRef} onChange={this.handlerChange} type="radio" id="customRadioInline6" name="work" value="Si" className="custom-control-input" disabled={this.state.ready}/>
                            <label className="custom-control-label" htmlFor="customRadioInline6" >Si</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input onChange={this.handlerChange} type="radio" id="customRadioInline7" name="work" value="No" className="custom-control-input" disabled={this.state.ready}/>
                            <label className="custom-control-label" htmlFor="customRadioInline7" >No</label>
                        </div>

                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.timeWorkRef} onChange={this.handlerChange} type="number" id="timeWork" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="timeWork">Tiempo de dedicacion (hs/d)</label>
                        </div>


                        <label htmlFor="dedicationWork" className="text-dark">Tiempo de dedicación</label><br />

                        <div className="custom-control custom-radio custom-control-inline">
                            <input ref={this.dedicationWorkRef1} onChange={this.handlerChange} name="dedicationWork" type="radio" id="dedicationWorkRef1" value="Tiempo Completo" className="custom-control-input" disabled={this.state.ready}/>
                            <label className="custom-control-label" htmlFor="dedicationWorkRef1">Tiempo Completo</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input ref={this.dedicationWorkRef2} onChange={this.handlerChange} name="dedicationWork" type="radio" id="dedicationWorkRef2" value="Por Horas" className="custom-control-input" disabled={this.state.ready}/>
                            <label className="custom-control-label" htmlFor="dedicationWorkRef2">Por Horas</label>
                        </div>
                        <br />
                        <div className="custom-control custom-radio custom-control-inline">
                            <input ref={this.dedicationWorkRef3} onChange={this.handlerChange} name="dedicationWork" type="radio" id="dedicationWorkRef3" value="Medio Tiempo" className="custom-control-input" disabled={this.state.ready}/>
                            <label className="custom-control-label" htmlFor="dedicationWorkRef3">Medio Tiempo</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input ref={this.dedicationWorkRef4} onChange={this.handlerChange} name="dedicationWork" type="radio" id="dedicationWorkRef4" value="No" className="custom-control-input" disabled={this.state.ready}/>
                            <label className="custom-control-label" htmlFor="dedicationWorkRef4">No</label>
                        </div>

                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.benefitRef} onChange={this.handlerChange} type="text" id="benefit" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="benefit">¿Recibe algun beneficio?</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.liveWithRef} onChange={this.handlerChange} type="text" id="liveWith" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="liveWith">Mientras estudia vivirá con:</label>
                        </div>

                        <Fa icon=" fa-money" size="2x" className="mr-3 mt-5" fixed />
                        <label className="text-dark " htmlFor="customRadioInline10"> Ingresos mensuales del estudiante</label>

                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.getFamilyMoneyRef} onChange={this.handlerChange} type="number" id="getFamilyMoney" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="getFamilyMoney">Monto que recibe del grupo familiar</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.otherMoneyRef} onChange={this.handlerChange} type="number" id="otherMoney" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="otherMoney">Otros aportes</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.totalStudentRef} onChange={this.handlerChange} type="number" id="totalStudent" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="totalStudent">Total</label>
                        </div>


                        <Fa icon=" fa-percent" size="2x" className="mr-3 mt-5" fixed />
                        <label className="text-dark " htmlFor="customRadioInline10">Egresos mensuales del estudiante</label>

                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.paymentResidenceRef} onChange={this.handlerChange} type="number" id="paymentResidence" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="paymentResidence">Pago Res. Est./Hab. alq.</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.foodStudentRef} onChange={this.handlerChange} type="number" id="foodStudent" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="foodStudent">Alimentación</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.transportStudentRef} onChange={this.handlerChange} type="number" id="transportStudent" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="transportStudent">Transporte</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.materialStudentRef} onChange={this.handlerChange} type="number" id="materialStudent" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="materialStudent">Materiales de estudio</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.recreationStudentRef} onChange={this.handlerChange} type="number" id="recreationStudent" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="recreationStudent">Recreación</label>
                        </div>

                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.personalExpensesRef} onChange={this.handlerChange} type="number" id="personalExpenses" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="personalExpenses">Gastos Personales</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.medicalStudentExpensesRef} onChange={this.handlerChange} type="number" id="medicalStudentExpenses" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="medicalStudentExpenses">Gastos Medicos</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.otherStudentExpensesRef} onChange={this.handlerChange} type="number" id="otherStudentExpenses" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="otherStudentExpenses">Otrs Gastos</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.totalStudentExpensesRef} onChange={this.handlerChange} type="number" id="totalStudentExpenses" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="totalStudentExpenses">Total Egresos</label>
                        </div>


                        <Fa icon=" fa-calculator" size="2x" className="mt-3" fixed />
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.familyIncomeRef} onChange={this.handlerChange} type="number" id="familyIncome" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="familyIncome">Total Ingresos mensuales del Grupo Familiar</label>
                        </div>

                        <Fa icon=" fa-money" size="lg" className="mr-3 mt-5" fixed />
                        <label className="text-dark " htmlFor="customRadioInline10">Egresos mensuales del Grupo Familiar</label>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.housingExpensesRef} onChange={this.handlerChange} type="number" id="housingExpenses" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="housingExpenses">Vivienda</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.foodExpensesRef} onChange={this.handlerChange} type="number" id="foodExpenses" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="foodExpenses">Alimentación</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.servicesExpensesRef} onChange={this.handlerChange} type="number" id="servicesExpenses" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="servicesExpenses">Luz, agua, aseo</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.phoneExpensesRef} onChange={this.handlerChange} type="number" id="phoneExpenses" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="phoneExpenses">Teléfono</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.condominuimExpensesRef} onChange={this.handlerChange} type="number" id="condominuimExpenses" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="condominuimExpenses">Condominio</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.transportExpensesRef} onChange={this.handlerChange} type="number" id="transportExpenses" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="transportExpenses">Transporte</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.medicalExpensesRef} onChange={this.handlerChange} type="number" id="medicalExpenses" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="medicalExpenses">Gastos Medicos</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.otherExpensesRef} onChange={this.handlerChange} type="number" id="otherExpenses" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="otherExpenses">Otros Gastos</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.totalExpensesRef} onChange={this.handlerChange} type="number" id="totalExpenses" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="totalExpenses">Total Egresos</label>
                        </div>

                        <Fa icon=" fa-male" size="lg" className="mr-3 mt-5" fixed />
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.nameResponsibleRef} onChange={this.handlerChange} type="text" id="nameResponsible" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="nameResponsible">Nombre del responsable económico</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.responsibleIncomeRef} onChange={this.handlerChange} type="number" id="responsibleIncome" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="responsibleIncome">Ingresos del responsable</label>
                        </div>
                        <div onClick={this.mdbInput} className="md-form">
                            <input ref={this.familyBurdenRef} onChange={this.handlerChange} type="number" id="familyBurden" className="form-control" disabled={this.state.ready}/>
                            <label className={this.state.mdbInput} htmlFor="familyBurden">Carga familiar</label>
                        </div>


                        <button onClick={this.formRedy} className="btn btn-outline-cyan btn-block mb-4">{this.state.ready ? 'Editar datos':'Verificar datos'}</button>
                        <div className="text-center exp">
                            <div className="checkbox">
                                <input type="checkbox" 
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

export default Economic;