import React from 'react';

const Document = (props) => {
    let { id, academicData } = props.user.request
    return (
        <div className="">
            <p className="h4-responsive text-center py-4">DATOS DE IDENTIFICACIÓN</p>
            <span className="indigo-text">Lugar de nacimiento:  </span>
            <span className="text-capitalize ">  {id.placeOfBirth}</span>
            <br/>
            <span className="indigo-text">Fecha de nacimiento:  </span>
            <span className="text-capitalize ">  {id.birthDate.split('T')[0]}</span>
            <br/>
            <span className="indigo-text">Teléfono Celular:  </span>
            <span className="text-capitalize ">  0{id.phoneNumber}</span>
            <br/>
            <span className="indigo-text">Mientras estudia recide en:  </span>
            <span className="text-capitalize">  {id.studyDirection}</span>
            <br/>
            <span className="indigo-text">Teléfono de recidencia:  </span>
            <span className="text-capitalize ">  0{id.residencePhone}</span>
            <br/>
            <span className="indigo-text">Estado:  </span>
            <span className="text-capitalize ">  {id.stateResidence}</span>
            <br/>
            <span className="indigo-text">Municipio:  </span>
            <span className="text-capitalize ">  {id.municipalityResidence}</span>
            <br/>
            <span className="indigo-text">Parroquia:  </span>
            <span className="text-capitalize pb-5">  {id.parishResidence}</span>
            <br/>
            <span className="indigo-text">Dirección de domicilio:  </span>
            <span className="text-capitalize ">  {id.homeStudent}</span>
            <br/>
            <span className="indigo-text">Estado:</span>
            <span className="text-capitalize ">  {id.homeState}</span>
            <br/>
            <span className="indigo-text">Municipio:  </span>
            <span className="text-capitalize ">  {id.homeMunicipality}</span>
            <br/>
            <span className="indigo-text">Parroquia:  </span>
            <span className="text-capitalize ">  {id.homeParish}</span>
            <br/>
            <span className="indigo-text">Teléfono de domicilio:  </span>
            <span className="text-capitalize ">  0{id.homePhone}</span>
            <br/>
            <span className="indigo-text">Teléfono de ubicación:  </span>
            <span className="text-capitalize "> 0{id.otherPhone}</span>
            <br/>
            <hr/>
            <br/>
            
            <p className="h4-responsive text-center py-4">DATOS ACADEMICOS</p>
            <span className="indigo-text">Facultad:  </span>
            <span className="text-capitalize">  {academicData.faculty}</span>
            <br/>
            <span className="indigo-text">Escuela:  </span>
            <span className="text-capitalize">  {academicData.school}</span>
            <br/>
            <span className="indigo-text">Año/Sem:  </span>
            <span className="text-capitalize">  {academicData.sem}</span>
            <br/>
            <span className="indigo-text">Promedio:  </span>
            <span className="text-capitalize">  {academicData.average}</span>
            <br/>
            <span className="indigo-text">Eficiencia:  </span>
            <span className="text-capitalize">  {academicData.efficiency}</span>
            <br/>
            <span className="indigo-text">Indice Academico:  </span>
            <span className="text-capitalize">  {academicData.academicIndex}</span>
            <br/>

        </div>
    );
}

export default Document;
