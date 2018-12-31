import React from 'react';

const DocuemntE = (props) => {
    let { socioeconomic } = props.user.request,
        { studentMoney, studentExpenses, familyMoney } = socioeconomic
    return (
        <div>
            <p className="h4-responsive text-center py-4">DATOS SOCIOECONÓMICOS</p>
            <div className="md-form">
                <input type="text" id="work" className="form-control text-capitalize" defaultValue={socioeconomic.work} />
                <label htmlFor="work" className="active">Trabaja</label>
            </div>
            <div className="md-form">
                <input type="text" id="workTime" className="form-control text-capitalize" defaultValue={socioeconomic.timeWork} />
                <label htmlFor="workTime" className="active">Tiempo de dedicación</label>
            </div>
            <div className="md-form">
                <input type="text" id="benefit" className="form-control text-capitalize" defaultValue={socioeconomic.benefit} />
                <label htmlFor="benefit" className="active">Recibe algún beneficio</label>
            </div>
            <div className="md-form">
                <input type="text" id="liveWith" className="form-control text-capitalize" defaultValue={socioeconomic.liveWith} />
                <label htmlFor="liveWith" className="active">Vive con</label>
            </div>
            <hr/>
            <hr/>
            <hr/>
            <p className="h5-responsive text-center py-3">Ingresos mensuales del estudiante</p>

            <div className="md-form">
                <input type="text" id="familyMoney" className="form-control text-capitalize" defaultValue={studentMoney.getFamilyMoney} />
                <label htmlFor="familyMoney" className="active">Aporte familiar</label>
            </div>
            <div className="md-form">
                <input type="text" id="otherMoney" className="form-control text-capitalize" defaultValue={studentMoney.otherMoney} />
                <label htmlFor="otherMoney" className="active">Otros aportes</label>
            </div>
            <div className="md-form">
                <input type="text" id="totalMoney" className="form-control text-capitalize" defaultValue={studentMoney.total} />
                <label htmlFor="totalMoney" className="active text-danger font-weight-bold">Total Aportes</label>
            </div>


            <p className="h5-responsive text-center py-4">Gastos mensuales del estudiante</p>
            <div className="md-form">
                <input type="text" id="payRecidence" className="form-control text-capitalize" defaultValue={studentExpenses.paymentResidence} />
                <label htmlFor="payRecidence" className="active">Pago de recidencia</label>
            </div>
            <div className="md-form">
                <input type="text" id="food" className="form-control text-capitalize" defaultValue={studentExpenses.food} />
                <label htmlFor="food" className="active">Comida</label>
            </div>
            <div className="md-form">
                <input type="text" id="transportation" className="form-control text-capitalize" defaultValue={studentExpenses.transport} />
                <label htmlFor="transportation" className="active">Transporte</label>
            </div>
            <div className="md-form">
                <input type="text" id="materialStudy" className="form-control text-capitalize" defaultValue={studentExpenses.studyMaterials} />
                <label htmlFor="materialStudy" className="active">Material de Estudio</label>
            </div>
            <div className="md-form">
                <input type="text" id="recreation" className="form-control text-capitalize" defaultValue={studentExpenses.reacreation} />
                <label htmlFor="recreation" className="active">Recreación</label>
            </div>
            <div className="md-form">
                <input type="text" id="personalExpenses" className="form-control text-capitalize" defaultValue={studentExpenses.personalExpenses} />
                <label htmlFor="personalExpenses" className="active">Gastos Personales</label>
            </div>
            <div className="md-form">
                <input type="text" id="medicExpenses" className="form-control text-capitalize" defaultValue={studentExpenses.medicalExpenses} />
                <label htmlFor="medicExpenses" className="active">Gastos Medicos</label>
            </div>
            <div className="md-form">
                <input type="text" id="otherExpenses" className="form-control text-capitalize" defaultValue={studentExpenses.otherExpenses} />
                <label htmlFor="otherExpenses" className="active">Otros Gastos</label>
            </div>
            <div className="md-form">
                <input type="text" id="totalExpenses" className="form-control text-capitalize" defaultValue={studentExpenses.totalExpenses} />
                <label htmlFor="totalExpenses" className="active text-danger font-weight-bold">Total Gastos</label>
            </div>

            <p className="h5-responsive text-center py-4">Datos Familiares</p>
            <div className="md-form">
                <input type="text" id="incomeFamily" className="form-control text-capitalize" defaultValue={familyMoney.familyIncome} />
                <label htmlFor="incomeFamily" className="active">Ingresos Familiares</label>
            </div>

            <p className="text-center lead">Gastos</p>
            <div className="md-form">
                <input type="text" id="hauseExpenses" className="form-control text-capitalize" defaultValue={familyMoney.housingExpenses} />
                <label htmlFor="hauseExpenses" className="active">En Vivienda</label>
            </div>
            <div className="md-form">
                <input type="text" id="foodExpenses" className="form-control text-capitalize" defaultValue={familyMoney.foodExpenses} />
                <label htmlFor="foodExpenses" className="active">En Comida</label>
            </div>
            <div className="md-form">
                <input type="text" id="servicesExpenses" className="form-control text-capitalize" defaultValue={familyMoney.servicesExpenses} />
                <label htmlFor="servicesExpenses" className="active">En Servicios</label>
            </div>
            <div className="md-form">
                <input type="text" id="phoneExpenses" className="form-control text-capitalize" defaultValue={familyMoney.phoneExpenses} />
                <label htmlFor="phoneExpenses" className="active">En Teléfono</label>
            </div>
            <div className="md-form">
                <input type="text" id="condominum" className="form-control text-capitalize" defaultValue={familyMoney.condominuim} />
                <label htmlFor="condominum" className="active">En Condominio</label>
            </div>
            <div className="md-form">
                <input type="text" id="transportExpenses" className="form-control text-capitalize" defaultValue={familyMoney.transport} />
                <label htmlFor="transportExpenses" className="active">En Transporte</label>
            </div>
            <div className="md-form">
                <input type="text" id="medicExpensesF" className="form-control text-capitalize" defaultValue={familyMoney.medicalExpenses} />
                <label htmlFor="medicExpensesF" className="active">Gastos Medicos</label>
            </div>
            <div className="md-form">
                <input type="text" id="otherExpensesF" className="form-control text-capitalize" defaultValue={familyMoney.otherExpenses} />
                <label htmlFor="otherExpensesF" className="active">Otros Gastos</label>
            </div>
            <div className="md-form">
                <input type="text" id="totalExpensesF" className="form-control text-capitalize" defaultValue={familyMoney.totalExpenses} />
                <label htmlFor="totalExpensesF" className="active text-danger font-weight-bold">Total Gastos</label>
            </div>

            
            <p className="text-center lead">Responsable Económico</p>
            <div className="md-form">
                <input type="text" id="nameResponsible" className="form-control text-capitalize" defaultValue={familyMoney.nameResponsible} />
                <label htmlFor="nameResponsible" className="active">Nombre</label>    
            </div>
            <div className="md-form">
                <input type="text" id="incomeResposible" className="form-control text-capitalize" defaultValue={familyMoney.responsibleIncome} />
                <label htmlFor="incomeResposible" className="active">Ingresos</label>    
            </div>
            <div className="md-form">
                <input type="text" id="familyBurder" className="form-control text-capitalize" defaultValue={familyMoney.familyBurden} />
                <label htmlFor="familyBurder" className="active">Carga familiar</label>    
            </div>
        </div>
    );
}

export default DocuemntE;
