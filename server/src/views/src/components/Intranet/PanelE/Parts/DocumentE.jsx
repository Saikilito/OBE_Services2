import React from 'react';

const DocuemntE = (props) => {
    let { socioeconomic } = props.user.request,
        { studentMoney, studentExpenses, familyMoney } = socioeconomic
    return (
        <div>
            <p className="h4-responsive text-center py-4">DATOS SOCIOECONÓMICOS</p>
            <span className="indigo-text">Trabaja:  </span>
            <span className="text-capitalize">  {socioeconomic.work}</span>
            <br/>
            <span className="indigo-text">Tiempo de dedicación:  </span>
            <span className="text-capitalize">  {socioeconomic.timeWork}</span>
            <br/>
            <span className="indigo-text">Recibe algún beneficio:  </span>
            <span className="text-capitalize">  {socioeconomic.benefit}</span>
            <br/>
            <span className="indigo-text">Vive con:  </span>
            <span className="text-capitalize">  {socioeconomic.liveWith}</span>
            <hr/>

            <p className="h5-responsive text-center py-4">Ingresos mensuales del estudiante</p>
            <span className="indigo-text">Aporte familiar:  </span>
            <span className="text-capitalize">  {studentMoney.getFamilyMoney}</span>
            <br/>
            <span className="indigo-text">Otros aportes:  </span>
            <span className="text-capitalize">  {studentMoney.otherMoney}</span>
            <br/>
            <span className="text-danger font-weight-bold">Total Aportes:  </span>
            <span className="text-capitalize">  {studentMoney.total}</span>
            <hr/>

            <p className="h5-responsive text-center py-4">Gastos mensuales del estudiante</p>
            <span className="indigo-text">Pago de recidencia:  </span>
            <span className="text-capitalize">  {studentExpenses.paymentResidence}</span>
            <br/>
            <span className="indigo-text">Comida:  </span>
            <span className="text-capitalize">  {studentExpenses.food}</span>
            <br/>
            <span className="indigo-text">Transporte:  </span>
            <span className="text-capitalize">  {studentExpenses.transport}</span>
            <br/>
            <span className="indigo-text">Material de Estudio:  </span>
            <span className="text-capitalize">  {studentExpenses.studyMaterials}</span>
            <br/>
            <span className="indigo-text">Recreación:  </span>
            <span className="text-capitalize">  {studentExpenses.reacreation}</span>
            <br/>
            <span className="indigo-text">Gastos Personales:  </span>
            <span className="text-capitalize">  {studentExpenses.personalExpenses}</span>
            <br/>
            <span className="indigo-text">Gastos Medicos:  </span>
            <span className="text-capitalize">  {studentExpenses.medicalExpenses}</span>
            <br/>
            <span className="indigo-text">Otros Gastos:  </span>
            <span className="text-capitalize">  {studentExpenses.otherExpenses}</span>
            <br/>
            <span className="text-danger font-weight-bold">Total Gastos:  </span>
            <span className="text-capitalize">  {studentExpenses.totalExpenses}</span>
            <hr/>
            
            <p className="h5-responsive text-center py-4">Datos Familiares</p>
            <span className="indigo-text">Ingresos Familiares:  </span>
            <span className="text-capitalize">  {familyMoney.familyIncome}</span>
            <br/><br/>
            <p className="text-center lead">Gastos</p>
            <span className="indigo-text">En Vivienda:  </span>
            <span className="text-capitalize">  {familyMoney.housingExpenses}</span>
            <br/>
            <span className="indigo-text">En Comida:  </span>
            <span className="text-capitalize">  {familyMoney.foodExpenses}</span>
            <br/>
            <span className="indigo-text">En Servicios:  </span>
            <span className="text-capitalize">  {familyMoney.servicesExpenses}</span>
            <br/>
            <span className="indigo-text">En Teléfono:  </span>
            <span className="text-capitalize">  {familyMoney.phoneExpenses}</span>
            <br/>
            <span className="indigo-text">En Condominio:  </span>
            <span className="text-capitalize">  {familyMoney.condominuim}</span>
            <br/>
            <span className="indigo-text">En Transporte:  </span>
            <span className="text-capitalize">  {familyMoney.transport}</span>
            <br/>
            <span className="indigo-text">Gastos Medicos:  </span>
            <span className="text-capitalize">  {familyMoney.medicalExpenses}</span>
            <br/>
            <span className="indigo-text">Otros Gastos:  </span>
            <span className="text-capitalize">  {familyMoney.otherExpenses}</span>
            <br/>
            <span className="text-danger font-weight-bold">Total Gastos:  </span>
            <span className="text-capitalize">  {familyMoney.totalExpenses}</span>
            <br/><br/>
        
            <p className="text-center lead">Responsable Económico</p>
            <span className="indigo-text">Nombre:  </span>
            <span className="text-capitalize">  {familyMoney.nameResponsible}</span>
            <br/>
            <span className="indigo-text">Ingresos:  </span>
            <span className="text-capitalize">  {familyMoney.responsibleIncome}</span>
            <br/>
            <span className="indigo-text">Carga familiar:  </span>
            <span className="text-capitalize">  {familyMoney.familyBurden}</span>
        </div>
    );
}

export default DocuemntE;
