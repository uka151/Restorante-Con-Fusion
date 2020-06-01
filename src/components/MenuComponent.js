import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

function MenuItemRender({ dish, onClick }) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="60%" src={dish.image} alt={dish.name} />
            </Link>
            <CardBody>
                <h4>Name:  {dish.name}</h4>
                <h4>Price:  {dish.price}</h4>
                <h4>Status : {dish.status}</h4>
            </CardBody>
        </Card>
    );
}


const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <MenuItemRender dish={dish} onClick={props.onClick} />
            </div>
        )
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active><Link to='/menu'>Menu</Link></BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3><hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
            <div>

            </div>
        </div>
    );
}



export default Menu;       