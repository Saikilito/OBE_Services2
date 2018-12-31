import React, { Component } from "react";
import { Col, Container, Fa, Row, Footer } from "mdbreact";

import './footerone.css';
import Styles from './footerOne.module.css';

class FooterO extends Component {
    render() {
        return (
            <Footer id="Contacto" className={`elegant-color font-small pt-4 mt-4 ${Styles.navColor} m-0 `}>
                <Container fluid className="text-center text-md-left">
                    <Row>
                        <Col md="4">
                            <h5 className="title h3">Organizacion de Bienestar Estudiantil</h5>
                            <div className={`col-md-6 m-0 float-left `}>
                                <Row className="d-flex justify-content-center align-item-center">
                                    <div className="row">
                                        <div className="col">
                                            <p className="ml-2 h4 text-success">Sigue a OBE en</p>
                                        </div>
                                    
                                    </div>

                                    <div className="row">
                                    
                                    <div className={`col-md-4 m-0 p-0 ${``}`}>
                                        <a href="www.facebook.com"><Fa icon="facebook" stack="3x" className={Styles.social} /></a><br />
                                    </div>
                                    <div className={`col-md-4 m-0  p-0 ${``}`}>
                                        <a href="www.twitter.com"><Fa icon="twitter" stack="3x" className={Styles.social} /></a><br />
                                    </div>
                                    <div className={`col-md-4 m-0 p-0 ${``}`}>
                                        <a href="www.instagram.com"><Fa icon="instagram" stack="3x" className={Styles.social} /></a>
                                    </div>
                                    
                                    </div>
                                </Row>      
                            </div>
                        </Col>
                        <Col md="4" className="h4-responsive text-center text-success">
                            ENLACES DE INTERES<br/>
                            <div>
                                <a href="/www.ucv.com.ve" >Pagina Oficial UCV</a><br/>
                                <a href="/www.ucv.com.ve" >Secretaria UCV</a><br/>
                                <a href="/www.ucv.com.ve" >Facultades UCV</a><br/>
                                <a href="/www.ucv.com.ve" >Noticias UCV</a><br/>
                            </div>
                        </Col>
                        <Col md="4">
                            <Fa icon="cog" spin size="3x" fixed />
                            <span className="sr-only">Loading...</span>
                            <ul className="mt-5">
                                <li className="list-unstyled">

                                    <h5 className="title">Escribenos</h5>
                                </li>
                                <li className="list-unstyled">
                                    <i className="fa fa-envelope-o fa-lg " aria-hidden="true"> correo-obe@ucv.ve</i>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Universidad Central de Venezuela:{" "}
                        <a href="https://www.ucv.ve"> Visitanos </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterO;