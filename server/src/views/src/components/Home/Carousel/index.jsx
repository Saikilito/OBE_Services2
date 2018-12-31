import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask} from 'mdbreact';
// import Styles from './carousel.module.css';

const items = [
  {
    src: '/assets/slider/sld1e.jpg',
    altText: 'Universidad Central de Venezuela',
    caption: 'Biblioteca FING'
  },
  {
    src: '/assets/slider/sld2e.jpg',
    altText: 'Universidad Central de Venezuela',
    caption: 'Mural'
  },
  {
    src: '/assets/slider/sld3e.jpg',
    altText: 'Universidad Central de Venezuela',
    caption: 'Edificio Amlo'
  },
  {
    src: '/assets/slider/sld4e.jpg',
    altText: 'Universidad Central de Venezuela',
    caption: 'Edificio Amla'
  },
  {
    src: '/assets/slider/sld5e.jpg',
    altText: 'Universidad Central de Venezuela',
    caption: 'Biblioteca FING'
  },
  {
    src: '/assets/slider/sld6e.jpg',
    altText: 'Universidad Central de Venezuela',
    caption: 'Comedor'
  },
];

class CarouselOne extends Component {
  render(){
    return(
      <div>
        <Carousel
          activeItem={1}
          length={6}
          showControls={true}
          showIndicators={true}
          className={`z-depth-1 w-100`}>
          <CarouselInner>
            {
              items.map((e,i)=>
              <CarouselItem key={`${i}corusel`} itemId={`${i+1}`}>
                <View key={`${i}coruselview`}>
                  <img className={``} src={e.src} alt="First slide" key={`${i}carouselimg`} />
                  <Mask overlay="black-light"></Mask>
                </View>
                <CarouselCaption key={`${i}coruselcaption`}>
                  <h3 className="h3-responsive">{e.caption}</h3>
                  <p>{e.altText}</p>
                </CarouselCaption>
              </CarouselItem>     
              )
            }
          </CarouselInner>
        </Carousel>
      </div>
    );
  }
}

export default CarouselOne;