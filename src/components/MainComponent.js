import React,{Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';

class Main extends Component{
  constructor(props){
    super(props);
    this.state ={
      dishes:DISHES,
      selectDish:null
    };
  }
  onDishSelect(dishID){
  this.setState({selectDish:dishID});
  }

renderDishDetail(dishid){
  if(dishid!=null){
  return(
    <div>
      <DishDetail dishe={this.state.dishes.filter((dish)=>dish.id===this.state.selectDish)[0]}/>
    </div>
  )
}else{
  return(
    <div></div>
  )
}}
 
  render(){
  return (
    <div >
       <Header/>
      <Menu dishes={this.state.dishes}
      onClick={(dishId)=>this.onDishSelect(dishId)}/>
        {this.renderDishDetail(this.state.selectDish)}
        <Footer/>
      </div>
  );
}}
//filter is javascript operate on each dish in array give subarray of dishes 
export default Main;
