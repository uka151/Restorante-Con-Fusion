import React, { Component } from 'react';
import {Card, CardImg,CardBody,CardText,  CardTitle} from 'reactstrap';
class DishDetail  extends Component{
  //dishe
    

 renderDish(dish){
     return (
         <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card>
        <CardImg width="80%" src={dish.image} alt={dish.name}/>
        <CardBody>
       <CardTitle>{dish.name}</CardTitle>
       <CardText>{dish.description}</CardText>
       </CardBody>
        </Card>
        </div>
     )
 };
 renderComments(com){
     
 
     return(
         <div className="col-12 col-md-5 m-1"> 
        <h4>Comments</h4>
        <div key={com.key}> 
        <ul className="list-unstyle">
            <p>{com.comment}</p>
            <p>-- {com.author}, {com.date}</p>
        </ul> 
    </div>
         </div>
     )
 } 

    render(){

        return(
            <div className="row">      
            {this.renderDish(this.props.dishe)}
            {this.renderComments(this.props.comm)}
            </div>    
    
        )
    };

}


export default DishDetail;