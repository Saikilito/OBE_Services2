import React, { Component } from 'react';
import Styles from './services.module.css';
// import Flipcard from 'react-flipcard-2';
// import './flipcard.css'

class Servicios extends Component {
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
                            Conoce nuestros servicios medicos
                        </h2>
                    </article>
                </section>

                <section className={`row m-0 mt-5 d-flex justify-content-center align-item-center`}>
                {/* 
                    ---------Izquierda
                */}

                    <article className={`col-md-4 mt-5 text-center text-white`}>

                            <div className={`mt-3 mb-5 info-color-dark`}>
                                <p className="p-3 h1-responsive">Medicina General</p>
                            </div>

                            <div className={`mt-1 info-color-dark`}>
                                <p className="p-3 h1-responsive">Psicología</p>
                            </div>

                    </article>

                {/* 
                    ---------Centro
                */}

                    {/* <article className={`col-md-4 text-center text-white`}>
                        <Flipcard disabled={true} flipped={this.state.isFlipped} className={Styles.flipper}>
                            <div onClick={this.getShow} className={`${Styles.square3} rounded elegant-color`}>
                                <p className="p-5">Más información aquí </p>
                            </div>
                            <div className={`${Styles.square32} rounded elegant-color`}>
                                <p className="p-5">Si necesitas asistencia médica, ven a nuestra oficina principal con tu carnet o constancia de estudio y pide tu cita gratuitamente</p>
                            </div>
                        </Flipcard>
                    </article>  */}
                    

                    {/* <Flipcard disabled={true} flipped={this.state.isFlipped}>
                                <div onClick={this.getShow} className={`col-md-4 elegant-color`}>
                                    <p className="p-5">Más información aquí </p>
                                </div>
                                <div className={`elegant-color`}>
                                    <p className="p-5">Si necesitas asistencia médica, ven a nuestra oficina principal con tu carnet o constancia de estudio y pide tu cita gratuitamente</p>
                                </div>
                            </Flipcard> */}
                    {/* <article className={Styles}>
                        <Flipcard disabled={true} flipped={this.state.isFlipped}>
                            <article col-md-4 className={`col-md-4 text-center text-white`}>
                                <div className={`align-middle p-4 h5-responsive elegant-color`}>
                                    <p className="p-5">Si necesitas asistencia médica, ven a nuestra oficina principal con tu carnet o constancia de estudio y pide tu cita gratuitamente</p>
                                </div>
                            </article> 
                            <article col-md-4 className={`col-md-4 text-center text-white`}>
                                <div className={`align-middle p-4 h2-responsive elegant-color`}>
                                    <p className="p-5">Más información aquí</p>
                                </div>
                            </article>
                        </Flipcard>
                        </article> */}

                        <article className={`col-md-4 mt-3 text-center text-white mb-3 d-none d-md-block`}>
                                <div className={`align-middle p-2 h5-responsive elegant-color`}>
                                    <p className="p-5">Si necesitas asistencia médica, ven a nuestra oficina principal con tu carnet o constancia de estudio y pide tu cita gratuitamente</p>
                                </div>
                        </article>

                {/* 
                    ---------Derecha
                */}

                    <article className={`col-md-4 mb-5 text-center text-white`}>
                        
                            <div className={`info-color-dark`}>
                                <p className="align-middle p-3 h1-responsive">Ginecología</p>
                            </div>
                        
                            <div className={`info-color-dark my-md-5`}>
                                <p className="align-middle p-3 h1-responsive">Odontología</p>
                            </div>
                        
                        
                            <div className={`info-color-dark`}>
                                <p className="align-middle p-3 h1-responsive">Oftalmología</p>
                            </div>
                        
                    </article>

                </section>

                {/* <div class="wrapper">
                    <div class="cols">
                        <div class="col" ontouchstart="this.classList.toggle('hover');">
                            <div class="container">
                                <div class="front" style={{"backgroundImage": "url(https://unsplash.it/500/500/)"}}>
                                    <div class="inner">
                                        <p>Diligord</p>
                                        <span>Lorem ipsum</span>
                                    </div>
                                </div>
                                <div class="back">
                                    <div class="inner">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
                )
            }
        }
        
        
export default Servicios;