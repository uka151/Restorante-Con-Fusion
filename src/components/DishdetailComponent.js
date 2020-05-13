import React, { Component } from 'react';
import {Card, CardImg,CardBody,CardText,  CardTitle} from 'reactstrap';
class DishDetail  extends Component{
  //dish
constructor(props){
    super(props);
} 

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
     const comment = this.props.dish.comments.map((dis)=>{
         return (
             <div key={dis.key}> 
                 <ul className="list-unstyle">
                     <p>{dis.comment}</p>
                     <p>-- {dis.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month:'short', day:'2-digit'}).format(new Date.parse(dis.date))}</p>
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

        return(
            <div className="row">      
            {this.renderDish(this.props.dish)}
            {this.renderComments()}
            </div>    
    
        )
    };

}


export default DishDetail;