import React from 'react';
//Components
import AreaH from './AreaH';
import AreaN from './AreaN';
import Cards from './Cards';
import Carousel from './Carousel';
import Servicios from './Servicios';
import NavbarO from './NavbarO';
import Becas from './Becas'

const Home = (props) => <React.Fragment>

            <NavbarO type={props.type} logged={props.logged}/>
            <Carousel />
            <AreaH />
            <AreaN />
            <Servicios />
            <Becas />
            <Cards />

        </React.Fragment>
    
export default Home;
