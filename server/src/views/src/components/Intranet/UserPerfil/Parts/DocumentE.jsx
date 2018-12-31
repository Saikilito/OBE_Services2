import React from 'react';

const DocuemntE = (props) => {
    let { socioeconomic } = props.user.request,
        { studentMoney, studentExpenses, familyMoney } = socioeconomic
    return (
        <div>
            <p className="h4-responsive text-center py-4">DATOS SOCIOECONÓMICOS</p>
            <div className="md-form">
                <input type="text" id="work" className="form-control text-capitalize" defaultValue={socioeconomic.work} disabled/>
                <label htmlFor="work" className="active">Trabaja</label>
            </div>
            <div className="md-form">
                <input type="text" id="timeWork" className="form-control text-capitalize" defaultValue={socioeconomic.timeWork} disabled/>
                <label htmlFor="timeWork" className="active">Tiempo de dedicación</label>
            </div>
            <div className="md-form">
                <input type="text" id="benefit" className="form-control text-capitalize" defaultValue={socioeconomic.benefit} disabled/>
                <label htmlFor="benefit" className="active">Recibe algún beneficio</label>
            </div>
            <div className="md-form">
                <input type="text" id="liveWith" className="form-control text-capitalize" defaultValue={socioeconomic.liveWith} disabled/>
                <label htmlFor="liveWith" className="active">Vive con</label>
            </div>
            <hr/>
            <hr/>
            <hr/>
            <p className="h5-responsive text-center py-3">Ingresos mensuales del estudiante</p>

            <div className="md-form">
                <input type="text" id="familyMoney" className="form-control text-capitalize" defaultValue={studentMoney.getFamilyMoney} disabled/>
                <label htmlFor="familyMoney" className="active">Aporte familiar</label>
            </div>
            <div className="md-form">
                <input type="text" id="otherMoney" className="form-control text-capitalize" defaultValue={studentMoney.otherMoney} disabled/>
                <label htmlFor="otherMoney" className="active">Otros aportes</label>
            </div>
            <div className="md-form">
                <input type="text" id="totalMoney" className="form-control text-capitalize" defaultValue={studentMoney.total} disabled/>
                <label htmlFor="totalMoney" className="active text-danger font-weight-bold">Total Aportes</label>
            </div>


            <p className="h5-responsive text-center py-4">Gastos mensuales del estudiante</p>
            <div className="md-form">
                <input type="text" id="payRecidence" className="form-control text-capitalize" defaultValue={studentExpenses.paymentResidence} disabled/>
                <label htmlFor="payRecidence" className="active">Pago de recidencia</label>
            </div>
            <div className="md-form">
                <input type="text" id="food" className="form-control text-capitalize" defaultValue={studentExpenses.food} disabled/>
                <label htmlFor="food" className="active">Comida</label>
            </div>
            <div className="md-form">
                <input type="text" id="transport" className="form-control text-capitalize" defaultValue={studentExpenses.transport} disabled/>
                <label htmlFor="transport" className="active">Transporte</label>
            </div>
            <div className="md-form">
                <input type="text" id="materialStudent" className="form-control text-capitalize" defaultValue={studentExpenses.studyMaterials} disabled/>
                <label htmlFor="materialStudent" className="active">Material de Estudio</label>
            </div>
            <div className="md-form">
                <input type="text" id="recreation" className="form-control text-capitalize" defaultValue={studentExpenses.reacreation} disabled/>
                <label htmlFor="recreation" className="active">Recreación</label>
            </div>
            <div className="md-form">
                <input type="text" id="personaleExpenses" className="form-control text-capitalize" defaultValue={studentExpenses.personalExpenses} disabled/>
                <label htmlFor="personaleExpenses" className="active">Gastos Personales</label>
            </div>
            <div className="md-form">
                <input type="text" id="medicExpenses" className="form-control text-capitalize" defaultValue={studentExpenses.medicalExpenses} disabled/>
                <label htmlFor="medicExpenses" className="active">Gastos Medicos</label>
            </div>
            <div className="md-form">
                <input type="text" id="otherExpenses" className="form-control text-capitalize" defaultValue={studentExpenses.otherExpenses} disabled/>
                <label htmlFor="otherExpenses" className="active">Otros Gastos</label>
            </div>
            <div className="md-form">
                <input type="text" id="totalExpenses" className="form-control text-capitalize" defaultValue={studentExpenses.totalExpenses} disabled/>
                <label htmlFor="totalExpenses" className="active text-danger font-weight-bold">Total Gastos</label>
            </div>

            <p className="h5-responsive text-center py-4">Datos Familiares</p>
            <div className="md-form">
                <input type="text" id="familyIncome" className="form-control text-capitalize" defaultValue={familyMoney.familyIncome} disabled/>
                <label htmlFor="familyIncome" className="active">Ingresos Familiares</label>
            </div>

            <p className="text-center lead">Gastos</p>
            <div className="md-form">
                <input type="text" id="homeExpenses" className="form-control text-capitalize" defaultValue={familyMoney.housingExpenses} disabled/>
                <label htmlFor="homeExpenses" className="active">En Vivienda</label>
            </div>
            <div className="md-form">
                <input type="text" id="foodExpenses" className="form-control text-capitalize" defaultValue={familyMoney.foodExpenses} disabled/>
                <label htmlFor="foodExpenses" className="active">En Comida</label>
            </div>
            <div className="md-form">
                <input type="text" id="servicesExpenses" className="form-control text-capitalize" defaultValue={familyMoney.servicesExpenses} disabled/>
                <label htmlFor="servicesExpenses" className="active">En Servicios</label>
            </div>
            <div className="md-form">
                <input type="text" id="phoneExpenses" className="form-control text-capitalize" defaultValue={familyMoney.phoneExpenses} disabled/>
                <label htmlFor="phoneExpenses" className="active">En Teléfono</label>
            </div>
            <div className="md-form">
                <input type="text" id="condominum" className="form-control text-capitalize" defaultValue={familyMoney.condominuim} disabled/>
                <label htmlFor="condominum" className="active">En Condominio</label>
            </div>
            <div className="md-form">
                <input type="text" id="transportExpenses" className="form-control text-capitalize" defaultValue={familyMoney.transport} disabled/>
                <label htmlFor="transportExpenses" className="active">En Transporte</label>
            </div>
            <div className="md-form">
                <input type="text" id="medicExpensesF" className="form-control text-capitalize" defaultValue={familyMoney.medicalExpenses} disabled/>
                <label htmlFor="medicExpensesF" className="active">Gastos Medicos</label>
            </div>
            <div className="md-form">
                <input type="text" id="otherExpesesF" className="form-control text-capitalize" defaultValue={familyMoney.otherExpenses} disabled/>
                <label htmlFor="otherExpesesF" className="active">Otros Gastos</label>
            </div>
            <div className="md-form">
                <input type="text" id="totalExpensesF" className="form-control text-capitalize" defaultValue={familyMoney.totalExpenses} disabled/>
                <label htmlFor="totalExpensesF" className="active text-danger font-weight-bold">Total Gastos</label>
            </div>

            
            <p className="text-center lead">Responsable Económico</p>
            <div className="md-form">
                <input type="text" id="nameResponsible" className="form-control text-capitalize" defaultValue={familyMoney.nameResponsible} disabled/>
                <label htmlFor="nameResponsible" className="active">Nombre</label>    
            </div>
            <div className="md-form">
                <input type="text" id="incomeResposible" className="form-control text-capitalize" defaultValue={familyMoney.responsibleIncome} disabled/>
                <label htmlFor="incomeResposible" className="active">Ingresos</label>    
            </div>
            <div className="md-form">
                <input type="text" id="burderFamily" className="form-control text-capitalize" defaultValue={familyMoney.familyBurden} disabled/>
                <label htmlFor="burderFamily" className="active">Carga familiar</label>    
            </div>
        </div>
    );
}

export default DocuemntE;
