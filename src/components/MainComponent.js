import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactUs';
import Header from './HeaderComponent';
import AboutUs from './AboutUs';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotion';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      comments: COMMENTS,
      selectDish: null
    };
  }
  onDishSelect(dishID) {
    this.setState({ selectDish: dishID });
  };





  render() {
    const DishWithId = ({ match }) => {
      return (
        <div className="row">
          <div className="col-12 offset-sm-1">
            <DishDetail dishe={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
              comm={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))[0]} /></div>
        </div>
      );
    }

    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    const men = () => {
      return (
        <Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)} />
      );
    }
    const About =()=>{
      return(
      <AboutUs leader={this.state.leaders}/>);
    }
    return (
      <div >
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={men} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path='/contactUs' component={Contact} />
          <Route path='/AboutUs' component={About} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
//filter is javascript operate on each dish in array give subarray of dishes 
export default Main;
