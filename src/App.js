import React,{Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      dishes:DISHES
    };
  }

  render(){
  return (
    <div >
      <Navbar dark color="danger">
      <div className="container">
        <NavbarBrand href="/">Restorant Confusion</NavbarBrand>
       
        
      </div></Navbar>
      <Menu dishes={this.state.dishes}/>
      </div>
  );
}}

export default App;
