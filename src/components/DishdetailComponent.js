import React, { Component } from 'react';
import {Card, CardBody, CardTitlec, CardImgOverlay, CardText, CardImg, CardTitle } from 'reactstrap';



class DishDetail  extends Component{

     constructor(props){
         super(props)
         this.state={
             selectDish :null
         }
     }

    onDishSelect(dish){
        this.setState({selectDish:dish});
    }

    /*renderComments(dish){
        if(dish!=null){
            return ();
        }
        else{

            return (
                <div>
                </div>
            )
       }
   }*/
   renderDish(dish){
       if(dish!=null){
           return (
               <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image}/>
                    <CardBody>
           <CardTitle>{dish.name}</CardTitle>
           <CardText>
               {dish.description}
           </CardText>
                    </CardBody>
                </Card>
               </div>
           )
       }else{
           return (
               <div>

               </div>
           )
       }
   }


    render(){
       

        return(
            <div className="row">
          <div>
              {this.renderDish(this.state.selectDish)}
              </div>      
           
            </div>     
        )
    };

}


export default DishDetail ;