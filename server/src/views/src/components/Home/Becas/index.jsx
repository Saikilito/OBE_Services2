import React, { Component } from 'react';
import Styles from './services.module.css';
// import Flipcard from 'react-flipcard-2';
// import './flipcard.css'

class Becas extends Component {
    constructor() {
        super();
        this.state = { isFlipped: false }
        this.getShow = this.getShow.bind(this);
    }

    getShow() {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }
    render() {
        return (
            <div className={`${Styles.root}`} id="Servicios">

                {/* 
                    ---------NUESTROS SERVICIOS
                */}

                <section className="row m-0 ">
                    <article className="col primary-color-dark p-5">
                        <h2 className={`text-center text-white display-4 m-1 p-3`}>
                            Conoce nuestras servicios de ayudantia
                        </h2>
                    </article>
                </section>

                <section className={`row m-0 mt-5 d-flex justify-content-center align-item-center`}>
                {/* 
                    ---------Izquierda
                */}

                    <article className={`col-md-4 mt-5 text-center text-white`}>

                            <div className={`mt-3 mb-5 info-color-dark`}>
                                <p className="p-3 h1-responsive">Beca ayudantía</p>
                            </div>

                            <div className={`mt-1 info-color-dark`}>
                                <p className="p-3 h1-responsive">Beca Estudio</p>
                            </div>

                    </article>

                {/* 
                    ---------Centro
                */}

        

                        <article className={`col-md-4 mt-3 text-center text-white mb-3 d-none d-md-block`}>
                                <div className={`align-middle p-2 h5-responsive elegant-color`}>
                                    <p className="p-5">Ya disponible en nuestro sistema!!<br/>Si desea información detallada puedes enviarnos un correo!</p>
                                </div>
                        </article>

                {/* 
                    ---------Derecha
                */}

                    <article className={`col-md-4 mb-5 text-center text-white`}>
                        
                            <div className={`info-color-dark`}>
                                <p className="align-middle p-3 h1-responsive">Premio al merito</p>
                            </div>
                        
                            <div className={`info-color-dark my-md-5`}>
                                <p className="align-middle p-3 h1-responsive">Ayudas Económicas</p>
                            </div>
                        
                        
                            <div className={`info-color-dark`}>
                                <p className="align-middle p-3 h1-responsive">Y más!</p>
                            </div>
                        
                    </article>

                </section>
            </div>
                )
            }
        }
        
        
export default Becas;