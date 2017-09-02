import React, {Component} from 'react';
import { Carousel } from 'antd';
import './home.css';
import Ofertas from './Ofertas';
import Mapa from '../mapa/Mapa';
import Categories from './Categories';

const c1 = "https://http2.mlstatic.com/resources/deals/exhibitors_resources/mlm-home-desktop-slider-picture-e50b5a65-79c3-42af-9ab0-14b3618a40e1.jpg";

const c2 = "https://http2.mlstatic.com/resources/deals/exhibitors_resources/mlm-home-desktop-slider-picture-a984fc12-2dfc-4f93-a908-aace1641a24d.png";

const c3 = "https://http2.mlstatic.com/resources/deals/exhibitors_resources/mlm-home-desktop-slider-picture-c8600459-8ca9-4c8c-ade4-42a6488eadf3.jpg";
      
const c4 = "https://http2.mlstatic.com/resources/deals/exhibitors_resources/mlm-home-desktop-slider-picture-2d3f095f-3c28-4c2d-b8b1-c58fa7bf96a6.png";

class HomePage extends Component{

    render(){

        return(
            <div className="home">
                <Carousel autoplay>
                    <div><img src={c1} alt="portada"/></div>
                    <div><img src={c2} alt="portada"/></div>
                    <div><img src={c3} alt="portada"/></div>
                    <div><img src={c4} alt="portada"/></div>
                    <div><h3>5</h3></div>
                </Carousel>
                <Ofertas />

                <Categories/>

                <Mapa/>

            </div>
        );
    }
}


export default HomePage;