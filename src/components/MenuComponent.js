import React, {Component } from 'react';
import {Card, CardImg,CardBody,CardText, CardImgOverlay, CardTitle} from 'reactstrap';
import DishDetail from '../components/DishdetailComponent';

class Menu extends Component{

constructor(props){
    super(props);
    this.state={
        selectedDish: null
    }
           
}
onDishSelect(dish){
    this.setState({selectedDish:dish});
}

renderd(dish){
    if(dish==null){
        return (
            <div>
            </div>
        )
    }else{
        return (
          <DishDetail dishe={this.state.selectedDish}/>
       )
    }
};

render(){
    const menu = this.props.dishes.map((dish) =>{
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=>this.onDishSelect(dish)}>  
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
         <div>
           {this.renderd(this.state.selectedDish)}  
     </div>
</div>
    );
}


    
}
export default Menu;