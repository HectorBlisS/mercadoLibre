import React, {Component} from 'react';
import { Carousel } from 'antd';
import './home.css';
import Ofertas from './Ofertas';
import logo from '../../logo.svg';
import {Row, Col, Card} from 'antd';
import img1 from '../../assets/images/realstate.jpg';
import img2 from '../../assets/images/car.jpg';
import img3 from '../../assets/images/home.jpg';
import img4 from '../../assets/images/tiempolibre.jpg';
import img5 from '../../assets/images/negocios.jpg';
import img6 from '../../assets/images/sport.jpg';
import img7 from '../../assets/images/game.jpg';

const c1 = "https://http2.mlstatic.com/resources/deals/exhibitors_resources/mlm-home-desktop-slider-picture-e50b5a65-79c3-42af-9ab0-14b3618a40e1.jpg";

const c2 = "https://http2.mlstatic.com/resources/deals/exhibitors_resources/mlm-home-desktop-slider-picture-a984fc12-2dfc-4f93-a908-aace1641a24d.png";

const c3 = "https://http2.mlstatic.com/resources/deals/exhibitors_resources/mlm-home-desktop-slider-picture-c8600459-8ca9-4c8c-ade4-42a6488eadf3.jpg";
      
const c4 = "https://http2.mlstatic.com/resources/deals/exhibitors_resources/mlm-home-desktop-slider-picture-2d3f095f-3c28-4c2d-b8b1-c58fa7bf96a6.png";

class HomePage extends Component{

    state = {
        categories: [
            {
                "name": "Inmuebles",
                "img": img1,
                "slug": "categoria/inmuebles",
                "id": "1"
            },
            {
                "name": "Vehículos",
                "img": img2,
                "slug": "categoria/vehiculos",
                "id": "2"
            },
            {
                "name": "Hogar",
                "img": img3,
                "slug": "categoria/hogar",
                "id": "3"
            },
            {
                "name": "Tiempo libre",
                "img": img4,
                "slug": "categoria/tiempo-libre",
                "id": "4"
            },
            {
                "name": "Negocios",
                "img": img5,
                "slug": "categoria/negocios",
                "id": "5"
            },
            {
                "name": "Deportes",
                "img": img6,
                "slug": "categoria/deportes",
                "id": "6"
            },
            {
                "name": "Videojuegos",
                "img": img7,
                "slug": "categoria/videojuegos",
                "id": "7"
            }
        ]
    }

    displayCategoryItem = (category) => (
        <div className="Card" key={category.id}>
            <div className="card-image">
                <img src={category.img} alt={category.slug} />
                <span className="card-title">{category.name}</span>
            </div>
        </div>
    );


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

                <section className="categories-container">

                    <div className="row">

                        <div className="col half">

                            {this.state.categories.slice(0,2).map((category)=>(
                                this.displayCategoryItem(category)
                            ))}

                        </div>

                        <div className="col quarter">

                            {this.state.categories.slice(2,5).map((category)=>(
                                this.displayCategoryItem(category)
                            ))}

                        </div>

                        <div className="col quarter">

                            {this.state.categories.slice(5).map((category)=>(
                                this.displayCategoryItem(category)
                            ))}

                        </div>

                    </div>

                </section>

            </div>
        );
    }
}


export default HomePage;