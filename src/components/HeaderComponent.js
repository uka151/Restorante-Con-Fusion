import React, { Component } from 'react';
import { Navbar, Jumbotron, NavbarBrand, Nav, Modal, Input, Label, Form, FormGroup, ModalBody, NavbarToggler, Button, Collapse, NavItem, ModalHeader } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import  '../App.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }
//toggleNav method is used for setup the status of collaps menu & isNavOpen become true 
    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }
 // when click on Login the isOpen method call to toggleModal function & setup the value true of isModalOpen & modal popup   
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
  // This method is used for handle the login status & catch the data directly from DOM which is input by user & alert the message on display  
    handleLogin(event) {
        this.toggleModal();
        alert("Username is :" + this.username.value +
            " Password is :" + this.password.value + " Remember " +
            this.remember.checked);
        event.preventDefault();
    }


    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className='mr-auto' href='/' ><img src='../assets/images/logo.png' alt='Ristorante Con Fusion' height='30' width='41'
                        /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'><span className='fa fa-home fa-lg'>Home</span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/aboutus'><span className='fa fa-info fa-lg'>About Us</span></NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className='nav-link' to='/menu'><span className='fa fa-list fa-lg'>Menu</span></NavLink></NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contactus'><span className='fa fa-address-card fa-lg'>Contact Us</span>
                                    </NavLink></NavItem>
                            </Nav>
                        </Collapse>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg">Login</span></Button>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className=" col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div></div></div>
                </Jumbotron>
             
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> 
                    <ModalHeader toggle={this.toggleModal} className="ModalLogin">
                        Login
                    </ModalHeader>
                    <ModalBody className="ModalBody">
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input type='text' id="username" name='username' className='InputBox'
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type='password' id="username" name='username' 
                                className='InputBox'
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type='checkbox' id="remember" name='remember'
                                        innerRef={(input) => this.remember = input} />Remember me
                        </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button> </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;