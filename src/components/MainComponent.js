import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactUs';
import Header from './HeaderComponent';
import AboutUs from './AboutUs';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { addComment, fetchDishes } from '../redux/ActionCreator';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions,
    comments: state.comments,
    homedish: state.homedish,
  }
};
const mapDispatchToProps = (dispatch) => ({

  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  ,
  fetchDishes: () => { dispatch(fetchDishes()) }

});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDish: null
    };
  }
  onDishSelect(dishID) {
    this.setState({ selectDish: dishID });
  };

componentDidMount(){
  this.props.fetchDishes();
}



  render() {
    const DishWithId = ({ match }) => {
      return (
        <div className="row">
          <div className="col-12 offset-sm-1">
            <DishDetail dishe={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
              com={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
              addComment={this.props.addComment}
            /></div>
        </div>
      );
    }

    const HomePage = () => {
      return (
        <Home
          dish={this.props.homedish.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          men={this.props.dishes.filter((dish) => dish.featured)[0]}
        />
      );
    }
    const men = () => {
      return (
        <Menu dishes={this.props.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)} />
      );
    }
    const About = () => {
      return (
        <AboutUs leader={this.props.leaders} />);
    }
    const contact = () => {
      return (
        <Contact />
      )
    }
    return (
      <div >
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={men} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path='/contactUs' component={contact} />
          <Route path='/AboutUs' component={About} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
//filter is javascript operate on each dish in array give subarray of dishes 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
