import React,{Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';

class Main extends Component{
  constructor(props){
    super(props);
    this.state ={
      dishes:DISHES,
      selectedDish:null
    };
  }

  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
}
  render(){
  return (
    <div >
      <Navbar dark color="danger">
      <div className="container">
        <NavbarBrand href="/">Restorant Confusion</NavbarBrand>  
      </div></Navbar>
      <Menu dishes={this.state.dishes}
      onClick={(dishId)=>this.props.onDishSelect(dishId)}
      />
       <DishDetail    
      dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish )[0]}/>
     
      </div>
  );
}}
//filter is javascript operate on each dish in array give subarray of dishes 
export default Main;
