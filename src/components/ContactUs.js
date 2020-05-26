import React from 'react';
import { Breadcrumb, BreadcrumbItem, FormGroup, Form, Card, CardBody, Label, Input, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props) {
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
                    <h3>Please Send Feedback us</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Card>
                        <CardBody>
                            <Form>
                                <FormGroup row>
                                    <Label hmtlfor="firstname" md={2}>FirstName</Label>
                                    <Col md={10}>
                                        <Input type="text" id="firstname" name="firstname" placeholder="FirstName" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label hmtlfor="Lastname" md={2}>LastName</Label>
                                    <Col md={10}>
                                        <Input type="text" id="Lastname" name="Lastname" placeholder="LastName" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label hmtlfor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input type="text" id="email" name="email" placeholder="Email" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label hmtlfor="tel" md={2}>Tel.</Label>
                                    <Col md={10}>
                                        <Input type="tel" id="tel" name="tel" placeholder="Tel." />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md={{ size: 6, offset: 2 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name='agree' />
                                                <strong>May We Contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{ size: 3, offset: 2 }}>
                                        <Input type="select" name="contactType">
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label hrmlfor="message" md={2}>Your FeedBack</Label>
                                    <Col md={10}>

                                        <Input type="textarea" rows='10' id="message" name="message" placeholder="Write here !!!!!!!" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row >
                                    <Col md={{ size: 6, offset: 2 }}>
                                        <Button type="button" className="bg-danger" id="submit">Submit</Button>
                                    </Col>
                                </FormGroup>

                            </Form> </CardBody>
                    </Card>
                </div>
            </div>


        </div>


    );
}

export default Contact;