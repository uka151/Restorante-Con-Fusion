import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactUs';
import Header from './HeaderComponent';
import AboutUs from './AboutUs';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { addComment, fetchDishes,fetchComments, fetchPromos, fetchHomedish } from '../redux/ActionCreator';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';


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
  fetchDishes: () => { dispatch(fetchDishes()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments:()=>{dispatch(fetchComments())},
  fetchHomedish:()=>{dispatch(fetchHomedish())},
  fetchPromos:()=>{dispatch(fetchPromos())}
  
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDish: null
    };
  }
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchHomedish();
    this.props.fetchPromos();
    this.props.fetchComments();
  }
  onDishSelect(dishID) {
    this.setState({ selectDish: dishID });
  };

  




  render() {
    const DishWithId = ({ match }) => {
      return (
        <div className="row">
          <div className="col-12 offset-sm-1">
            <DishDetail dishe={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
              com={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
              commentsErrMess={this.props.comments.errMess}
              addComment={this.props.addComment}
            /></div>
        </div>
      );
    }

    const HomePage = () => {
      return (
        <Home
          dish={this.props.homedish.homedish.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        />
      );
    }


    return (
      <div >
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path='/contactUs' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route path='/AboutUs' component={() => <AboutUs leader={this.props.leaders} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
//filter is javascript operate on each dish in array give subarray of dishes 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
