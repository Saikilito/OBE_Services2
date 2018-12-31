import React, { Component, Fragment } from 'react';
import Axios from 'axios';

import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalFooter } from 'mdbreact';

class MedalE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      send: false,
      bank: '',
      transf: '',
      importD: '',
      date: ''
    }
  }

  render() {
    return (
      <Fragment>
        {
          this.state.send ? (window.location.reload()) : null
        }
        {
          console.log(this.props.user)
        }
        <div className="bg-dark p-5 text-white text-center">
          <h2 className="display-3">Pagar Medallas</h2>
        </div>
        <Container className="mt-5 align-middle">
          <Row>
            <Col>
              <p className="text-center lead">
                Esta sección es solo para graduandos de la Universidad Central de Venezuela<br />
                Si Ud. requiere el servicio de pago de medallas, por favor, considere los siguientes puntos:
              </p>

              <ul className="lead">
                <li>Debe subir un archivo digital únicamente de extensión "JPG" o "PNG" como copia del recibo de pago original</li>
                <li>La imagen subida debe ser notablemente visible en todos sus campos</li>
                <li>La imagen subida debe tener un peso máximo de 1.5mb</li>
                <li>Tenga cuidado de introducir datos erróneos en el formulario</li>
                <li>Al momento de retirar su medalla lleve consigo el bauche original y copia</li>
              </ul>
              <p>Al llenar el formulario Ud. participara en el proceso de verificación de pagos, esté pendiente en su perfil de OBE, cuando el valor en su campo Medalla este en "Verificado" Ud. podrá dirigirse a Librería para realizar el retiro</p>
              <p>Si cualquiera de estas normas es infringida, su solicitud se rechazará automáticamente y deberá dirigirse a la oficina central de OBE para reevaluar su solicitud</p>
              <div className="">

                {this.alertTimeMedall()}

                <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
                  <div className="modal-header primary-color white-text">
                    <h4 className="title">
                      <Fa className="fa fa-pencil" />Formulario de pago</h4>
                    <button type="button" className="close" onClick={this.toggle}>
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <form onSubmit={this.handleUploadFile}>
                    <ModalBody className="grey-text">
                      <Input name="bank" onChange={this.handleChange} size="sm" label="Banco" icon=" fa-credit-card" group type="text" validate error="wrong" success="right" />
                      <Input name="transf" onChange={this.handleChange} size="sm" label="Número de transferencia" icon=" fa-lightbulb-o" group type="text" validate error="wrong" success="right" />
                      <Input name="importD" onChange={this.handleChange} size="sm" label="Importe Bss." icon=" fa-money" group type="number" validate error="wrong" success="right" />
                      <label className="m-0 p-0" htmlFor="date">Fecha del pago</label>
                      <Input name="date" onChange={this.handleChange} id="date" size="sm" icon=" fa-hourglass-end" group type="date" validate error="wrong" success="right" />
                      <label className="mb-3 p-0" htmlFor="file">Seleccione el archivo</label><br />
                      <input type="file" ref={(ref) => { this.uploadInput = ref; }} name="file" id="file" />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="secondary" onClick={this.toggle}>Cerrar</Button>{' '}
                      
                        <Button onClick={this.toggleR} type="submit" color="primary">Enviar</Button>
                      
                    </ModalFooter>
                  </form>
                </Modal>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }

  toggleR = (e) =>{
    let band = false ;

    for (let i in this.state)
      if (this.state[i] === '')
      {
        alert(`El campo ${i} está vacio`)
        e.preventDefault()
        band = true
      }
    
      if (band) alert("Ningun campo debe quedar vacio");
  }
  handleChange = (e) => {

    const { name, value } = e.target;

    this.setState({ [name]: value })
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  toggle2 = () => {
    this.setState({
      modal: !this.state.modal,
      send: true
    });
  }
  handleUploadFile = (e) => {
    e.preventDefault();
    console.log(this.uploadInput.value, "Valor Image")
    
    console.log(this.uploadInput.files[0])
    if(!this.uploadInput.files[0])
    {
      alert("Debe subir una imagen digital")
      return null
    }
    
    const { bank, transf, importD, date } = this.state
    
    this.setState({
      modal: !this.state.modal,
      send: true
    });


    console.log(this.state)

    const Data = new FormData();
    let extension = this.uploadInput.files[0].name.split('.').pop()
    Data.append('file', this.uploadInput.files[0])
    Data.append('userCi', this.props.user.ci)

    Axios({
      method: 'post',
      url: `/api/upload`,
      headers: { 'authorization': localStorage.Token },
      data: Data
    })

      .then(res => console.log(res))
      .then(err => console.error(err))

    let Data2 = {
      medal: {
        status: 'waiting',
        medalURL: this.props.user.ci,
        extension,
        bank,
        transf,
        importD,
        date
      }
    }

    Axios({
      method: 'put',
      url: `/api/users/${this.props.user._id}`,
      headers: { 'authorization': localStorage.Token },
      data: Data2
    })
      .then(res =>{
        localStorage.setItem('Perfil', JSON.stringify(res))
        console.log(res)
      }
      )

      .catch(err => console.error(err))
  }
  alertTimeMedall = () => {
    let alert = null, buttone = false, color
    let { status } = this.props.user.medal

    if (this.props.access) {
      alert = 'En estos momento no estamos recibiendo pagos, hasta nuevo aviso'
      color = "alert-warning"
      buttone = true
    }
    else if (status === 'false' || status === false) {
      alert = 'Ud. no esta habilitado para esta acción'
      color = "alert-danger"
      buttone = true
    }
    else if (status === 'waiting') {
      alert = 'Su pago esta siendo procesado'
      color = "alert-warning"
      buttone = true
    }
    else if (status === 'accepted') {
      alert = 'Enhora buena, su pago ya ha sido confirmado!'
      color = "alert-success"
      buttone = true
    }
    else if (status === 'rejected') {
      alert = 'Lo sentimos, su proceso de pago fué rechazado!'
      color = "alert-danger"
      buttone = true
    }
    return <Fragment>
      <Button className={`d-block mx-auto mt-5 p-3`}
        color="danger"
        onClick={this.toggle}
        disabled={buttone} >
        Click aquí para procesar pago de medalla
                </Button>
      <span className={`d-block text-center  text-danger  m-3 py-3 ${color}`} >
        {alert}
      </span>
    </Fragment>

  }
};


export default MedalE;
