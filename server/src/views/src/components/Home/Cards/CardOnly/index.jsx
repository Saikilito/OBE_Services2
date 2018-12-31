import React from 'react';

const Cards = (props) => {
  return (
    <article className={`shadow-lg mb-3`}>
      <div className={`card`}>
        <img className="card-img-top" src={props.sourc.src} alt="Cap" />
        <div className="card-body">
          <h5 className="card-title">Noticia OBE</h5>
          <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor dolorem ex quod, et quidem laboriosam asperiores ipsum eum, autem exercitationem accusantium facere deleniti. Voluptatum aperiam commodi aliquid tempore eius?</p>
        </div>
      </div>
    </article>
  );
};

export default Cards;