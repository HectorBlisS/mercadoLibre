import React from 'react';
import img1 from '../../assets/images/realstate.jpg';
import img2 from '../../assets/images/car.jpg';
import img3 from '../../assets/images/home.jpg';
import img4 from '../../assets/images/tiempolibre.jpg';
import img5 from '../../assets/images/negocios.jpg';
import img6 from '../../assets/images/sport.jpg';
import img7 from '../../assets/images/game.jpg';
import './categories.css';
import {Link} from 'react-router-dom';

class Categories extends React.Component{

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
        <Link to="/anuncios/all">
            <div className="Card" key={category.id}>
                <div className="card-image">
                    <img src={category.img} alt={category.slug} />
                    <span className="card-title">{category.name}</span>
                </div>
            </div>
        </Link>
    );

    render(){
        return(
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
        );
    }

}

export default Categories;