import React from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

const image = [
    { src: "/assets/photo/photo1.jpg" },
    { src: "/assets/photo/photo2.jpg" },
];

const Quearer = (props) => {
    let e = props.user
    return (
        <div className="card">
            <div className="card-body">
                <Card>
                { e.sexo === 'female' ? (
                    <CardImage className="img-fluid" src={image[1].src} />
                ):(
                    <CardImage className="img-fluid" src={image[0].src} />
                )}
                    <CardBody>
                        <CardTitle className="text-capitalize">
                            <span className="lead">Nombres:</span>
                            <span className="lead"> {props.user.name} </span><br />
                            <span className="lead">Apellidos:</span>
                            <span className="lead"> {props.user.lastname} </span><br />
                        </CardTitle>
                        <CardText>
                            <span>Email:</span>
                            <span> {props.user.email} </span><br />
                            <span>C.I.V: </span>
                            <span> {props.user.ci} </span><br />
                            <span>Cargo: </span>
                            <span> {props.user.position} </span><br />
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Quearer;
