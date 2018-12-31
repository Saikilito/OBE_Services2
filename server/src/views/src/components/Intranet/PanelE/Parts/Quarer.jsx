import React from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText  } from 'mdbreact';

const image = [
    { src: "/assets/photo/photo1.jpg" },
    { src: "/assets/photo/photo2.jpg" },
];

const Quearer = (props) => {
    let e = props.user
    return (
        <div className="shadow-lg rounded">
            <Card >
                { e.sexo === 'female' ? (
                    <CardImage className="img-fluid" src={image[1].src} />
                ):(
                    <CardImage className="img-fluid" src={image[0].src} />
                )}
                <CardBody>
                    <CardTitle style={{'fontSize': '1.25rem'}} className="text-capitalize">
                        <span className="pb-5">Nombres:</span>
                        <span className="lead pb-5"> {e.name} </span><br />
                        <span className="pb-5">Apellidos:</span>
                        <span className="lead pb-5"> {e.lastname} </span><br />
                        <span className="pb-5">Correo Electronico:</span>
                        <span className="lead pb-5"> {e.email} </span><br />
                        <span className="pb-5">C.I.V:</span>
                        <span className="lead pb-5"> {e.ci} </span><br />
                        <span className="pb-5">Facultad:</span>
                        <span className="lead pb-5"> {e.faculty} </span><br />
                        <span className="pb-5">Carrera:</span>
                        <span className="lead pb-5"> {e.school}<br /> </span><br />
                    </CardTitle>
                    <CardText className="text-center">Universidad Central De Venezuela</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default Quearer;
