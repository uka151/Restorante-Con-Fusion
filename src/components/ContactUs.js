import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, FormGroup, Card, CardBody, FormFeedback, Form, Label, Input, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            },
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validation = this.validation.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
        this.handleInputChange(event);
    };
    //onBlur method event occur when user leaves form field . it is use with form validation
    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })
    }

    validation(firstname, lastname, email, telnum) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        }
        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'firstname should be >=3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'firstname should be <10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'lastname should be >=3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'lastname should be <10 characters';

        const reg =new RegExp('^[0-9]+$');
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. number should contain only number'

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = "Email should contain @  like @.com";

        return errors;

    };


    render() {
        const errors = this.validation(this.state.firstname, this.state.lastname, this.state.email, this.state.telnum);

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/contactus'>Contact Us</Link></BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <h3>Contact Us</h3><hr />
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>   : +919451075292   <br />
                            <i className="fa fa-fax"></i>:   +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>:<a href="mailto:umeshagrahari87@gmail.com">umeshagrahari87@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>
                            Map of our Location
               </h5>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href=":+919451075292"><i className="fa fa-phone">Call</i></a>
                            <a role="button" className="btn btn-info" href="/">
                                <i className="fa fa-skype">Skype</i>
                            </a>
                            <a role="button" className="btn btn-success" href="mailto:umeshagrahari87@gmail.com"><i className="fa fa-envelope">Email</i></a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>

                    <div className="col-12 col-md-9">
                        <Card>
                            <CardBody>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup row>
                                        <Label htmlFor="firstname" md={2}>First Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="firstname" name="firstname"
                                                placeholder="First Name"
                                                value={this.state.firstname}
                                                onBlur={this.handleBlur('firstname')}
                                                onChange={this.handleInputChange}
                                                valid={errors.firstname === ''}
                                                invalid={errors.firstname !== ''}
                                            />
                                            <FormFeedback>
                                                {errors.firstname}
                                            </FormFeedback>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label htmlFor="lastname" md={2}>Last Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="lastname" name="lastname"
                                                placeholder="Last Name"
                                                value={this.state.lastname}
                                                onBlur={this.handleBlur('lastname')}
                                                onChange={this.handleInputChange}
                                                valid={errors.lastname === ''}
                                                invalid={errors.lastname !== ''}
                                            />
                                            <FormFeedback>
                                           {errors.lastname}
                                            </FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                        <Col md={10}>
                                            <Input type="tel" id="telnum" name="telnum"
                                                placeholder="Tel. number"
                                                value={this.state.telnum}
                                                onBlur={this.handleBlur('telnum')}
                                                onChange={this.handleInputChange}
                                                valid={errors.telnum===''}
                                                invalid={errors.telnum!==''} />
    <FormFeedback>{errors.telnum}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="email" md={2}>Email</Label>
                                        <Col md={10}>
                                            <Input type="email" id="email" name="email"
                                                placeholder="Email"
                                                value={this.state.email}
                                                onBlur={this.handleBlur('email')}
                                                onChange={this.handleInputChange}
                                                valid={errors.email===''}
                                                invalid={errors.email!==''} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{ size: 6, offset: 2 }}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox"
                                                        name="agree"

                                                        checked={this.state.agree}
                                                        onChange={this.handleInputChange} /> {' '}
                                                    <strong>May we contact you?</strong>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={{ size: 3, offset: 1 }}>
                                            <Input type="select" name="contactType"
                                                value={this.state.contactType}
                                                onChange={this.handleInputChange}>
                                                <option>Tel.</option>
                                                <option>Email</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="message" md={2}>Your Feedback</Label>
                                        <Col md={10}>
                                            <Input type="textarea" id="message" name="message"
                                                rows="12"
                                                value={this.state.message}
                                                onChange={this.handleInputChange}></Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{ size: 10, offset: 2 }}>
                                            <Button type="submit" color="primary">
                                                Send Feedback
                                    </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>  </div>

        );

    }

}

export default Contact;