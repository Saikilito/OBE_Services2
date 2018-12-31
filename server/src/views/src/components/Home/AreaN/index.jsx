import React from 'react';
import Styles from './area.module.css';

const AreaN = () =>
    <div  className={`${Styles.root}`} id="Nosotros">
        
        {/* 
            ---------TITULO QUIENES SOMOS
        */}

            <div className="row m-0">
                <div className="col my-2 bg-success default-color">
                    <h2 className={`h1 text-center text-white display-4 p-4`}>
                        ¿Quienes Somos?
                    </h2>
                </div>
            </div>
        
        <section className="row mt-3 mx-5 ">
        {/* 
            ---------HISTORIA
        */}   

            <article className={`col-md-4 ${Styles.s1} mb-1 mb-md-3`}>
                <h2 className="h1">Historia </h2>
                <br />
                <p className={`${Styles.text}`}>
                    Creada el  de diciembre de 1943<br />
                    Como Organización de Bienestar Estudiantil bajo la presidencia del General Isaías Medina Angarita. Nace así como instituto autónomo y con recurso propio, que tendría la función principal la de brindar protección médica, social, económica, cultural y deportiva al estudiantado.
                    Estos programas estarían dirigidos a compensar las limitaciones y necesidades del estudiantado universitario, para que hiciera frente en mejores condiciones el proceso de enseñanza.
                </p>
            </article>
            
        {/* 
            ---------MISION
        */}            

            <article className={`col-md-4 ${Styles.s3} mb-1 mb-md-0`}>
                <h1>Misión</h1>
                <p className={`${Styles.text}`}>
                    Desarrollar políticas que generen programas y servicios, tanto asistenciales como preventivos que tiendan a proporcionar a los estudiantes condiciones de equidad (igualdad) para favorecer su rendimiento académico y a toda la comunidad estudiantil proporcionar el bienestar para su formación integral como estudiante.
                </p>
            </article>

        {/* 
            ---------VISION
        */}

            <article className={`col-md-4 ${Styles.s2} mb-3 mb-md-0`}>
                <h1>Visión</h1>
                <p className={Styles.text}>
                    Ser reconocida por líderizar un modelo de gestión de la seguridad social y bienestar estudiantil universitario, que contribuya con la formación integral del estudiante ucevista.
                </p>
            </article>

        </section>
    </div> 

export default AreaN;