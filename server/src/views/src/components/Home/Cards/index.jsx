import React, { Component } from 'react';
import CardOnly from './CardOnly';
import Styles from './cards.module.css';


const items = [
    { src: './../../assets/noticias/not2.jpg', },
    { src: './../../assets/noticias/not3.jpg', },
    { src: './../../assets/noticias/not4.jpg', },
];

class Cards extends Component {
    render() {
        return (
            <section className={`${Styles.root}`} id="Noticias">
                <div className="row m-0">
                    <div className="col mb-2 p-5 bg-success default-color">
                        <h2 className={`h1 text-center text-white display-4 p-4`}>
                            Noticias OBE!
                        </h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <article className={`row mr-0 p-5 ${Styles.root}`}>
                        {
                            items.map((e, i) =>
                                <div className="offset-md-1 col-md-3" key={`${i}cardNot`}>
                                    <CardOnly sourc={e} />
                                </div>
                            )
                        }
                    </article>
                </div>
            </section>
        );
    }
}

export default Cards;