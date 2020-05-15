import React, { Component } from 'react';
import {Card, CardImg,CardBody,CardText,  CardTitle} from 'reactstrap';
class DishDetail  extends Component{
  //dishe

 renderDish(dish){
     return (
         <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name}/>
        <CardBody>
       <CardTitle>{dish.name}</CardTitle>
       <CardText>{dish.description}</CardText>
       </CardBody>
        </Card>
        </div>
     )
 };
 renderComments(){
     const comment = this.props.dishe.comments.map((dis)=>{
         return (
             <div key={dis.key}> 
                 <ul className="list-unstyle">
                     <p>{dis.comment}</p>
                     <p>-- {dis.author}, {dis.date}</p>
                 </ul> 
             </div>
         )
     })
     return(
         <div className="col-12 col-md-5 m-1"> 
        <h4>Comments</h4>
          {comment}
         </div>
     )
 } 

    render(){

console.log('render method invoked in dish detail component');
        return(
            <div className="row">      
            {this.renderDish(this.props.dishe)}
            {this.renderComments()}
            </div>    
    
        )
    };

}


export default DishDetail;