import React,{Component} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactUs';
import Header from './HeaderComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import { PROMOTIONS} from '../shared/promotion';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component{
  constructor(props){
    super(props);
    this.state ={
      dishes:DISHES,
      leaders:LEADERS,
      promotions:PROMOTIONS,
      comments:COMMENTS,
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
      <DishDetail dishe={this.state.dishes.filter((dish)=>dish.id===this.state.selectDish)[0]}
         comm={this.state.comments.filter((comment)=>comment.id===this.state.selectDish)[0]}
      />
    </div>
  )
}else{
  return(
    <div></div>
  )
}};



 
  render(){
    const HomePage= () =>{
      return(
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    const men =()=>{
      return (
        <Menu dishes={this.state.dishes}
        onClick={(dishId)=>this.onDishSelect(dishId)}/>
      );
    }
  return (
    <div >
       <Header/>
       <Switch>
         <Route path='/home' component={HomePage}/>
         <Route exact path='/menu' component={men}/>
         <Route path='/contactUs' component={Contact}/>
         <Redirect to='/home'/>
       </Switch>
        {this.renderDishDetail(this.state.selectDish)}
        <Footer/>
      </div>
  );
}}
//filter is javascript operate on each dish in array give subarray of dishes 
export default Main;
