import React, {Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';

class Menu extends Component{

constructor(props){                    //define state 
    super(props);
    this.state={
        selectedDish: null            // define the state for selectedDish as null;
    }
           
}
onDishSelect(dish){                             // define function which take input as dish & change the value of selectedDish using set state Method
    this.setState({selectedDish:dish});
}
renderDish(dish){              // define renderDish function that display data after click even perfom that take input dish
    if(dish!=null){
          return (
              <Card>
           <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
            </CardBody>
              </Card>
          );
    }else{
        return(
            <div></div>
        )
    }
}

render(){
    const menu = this.props.dishes.map((dish) =>{
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=>this.onDishSelect(dish)}>    // onClick event define  pass as function with onDishSelect(dish) 
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                     </CardImgOverlay>
                </Card>
            </div>
        )
    });
    return(
     <div className="container">
         <div className="row">
                 {menu}
         </div>
         <div className="row">   // dfine extra div for display the data on screen here renderDish function call
             {this.renderDish(this.state.selectedDish)}
         </div>
     </div>

    );
}


    
}
export default Menu;