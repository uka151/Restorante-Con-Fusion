import React, { Component } from 'react';
import { Card, CardImg, CardBody, Breadcrumb, Button, BreadcrumbItem, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import {baseUrl} from '../shared/baseUrl';
import CommentForm from '../components/CommentForm';
import { Loading } from './LoadingComponent';



class DishDetail extends Component {
    //dishe



    renderDish(dish) {
        return (
            <div key={dish.id} className="col-6 col-md-5 m-1">
                <Card>
                    <CardBody center>
                        <CardImg id="Cardimg" src={baseUrl + dish.image} alt={dish.name} /></CardBody>
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
                            </div>
                        </ul>
                        <div className="Row">
                            <div className="col-12 md-5 ">
                                <Button type="submit" className="fa fa-shopping-cart fa-lg" value="Add Item"> Add to Cart</Button>

                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    };
    renderCommentOnly(comments, addComment, dishId) {
        const comment = comments.map((dish) => {
            return (
                <div>
                    <div classname="row">
                        <p>{dish.comment}</p></div>
                    <div className="row">
                        <p>{dish.author}</p>
                        <p>{dish.date}</p>
                    </div>
                    <div className="row">
                        <h6>Rating: {dish.rating}</h6>
                    </div>
                </div>

            )

        })
     if(this.props.isLoading){
          return(
              <div>
                  <Loading/>
              </div>
          )
     }else if(this.props.errMess){
         return(
             <div>
     <h4>{this.props.errMess}</h4>
             </div>
         )
     }else

        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h2>All Comments</h2>
                        </CardTitle>
                        {comment}

                    </CardBody>
                    <div className="col-12 md-5 m-1">
                        <CommentForm addComment={addComment}
                            dishId={dishId} />
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
                <div className="row ml-2">
                    {this.renderCommentOnly(this.props.com, this.props.addComment, this.props.dishe.id)}

                </div>

            </div>
        )
    };

}




export default DishDetail;