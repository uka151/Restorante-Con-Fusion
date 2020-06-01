import React, { Component } from 'react';
import { Card, CardImg, CardBody,  Breadcrumb, Button, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class DishDetail extends Component {
    //dishe


    renderDish(dish) {
        return (
            <div key={dish.id} className="col-6 col-md-5 m-1">
                <Card>
                    <CardBody center>
                    <CardImg id="Cardimg" src={dish.image} alt={dish.name} /></CardBody>
                </Card>
            </div>
        )
    };
    renderComments(com) {


        return (
            <div className="col-6 col-md-5 m-1">
                <Card>
                <h4>Comments</h4>
                <div key={com.key}>
                    <ul className="list-unstyle">
                        <h3>{com.name}</h3>
                        <p>{com.description}</p>
                        <br />
                        <div className="col-6">
                            <CardBody>
                                <h4>Name:  {com.name}</h4>
                                <h4>Price:  {com.price}</h4>
                                <h4>Status : {com.status}</h4>
                                <h4>Type : {com.type}</h4>
                            </CardBody>
                            <Button type="submit" className="fa fa-plus fa-lg" value="Add Item"> Add Item</Button>
                        </div>
                    </ul>

                </div>
                </Card>
            </div>
        )
    }

    render() {

        return (
            <div>
                <div className="col-12 col-sm-4 offset -1">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>{this.props.dishe.name}</Link></BreadcrumbItem>
                    </Breadcrumb>  </div>
                <div className="row" >
                    <div className="col-12 col-sm-4">
                        <h3>{this.props.dishe.name}</h3><hr />
                    </div></div>

                <div className="row">
                    {this.renderDish(this.props.dishe)}

                    {this.renderComments(this.props.dishe)}

                </div>
            </div>
        )
    };

}


export default DishDetail;