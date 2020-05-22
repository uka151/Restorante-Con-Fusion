import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

function Aboutus(props) {

    const leaders= props.leader.map((leader)=>{
        return(
           
            <div className="row container">
                <div className="col-2">
              <img  src={leader.image}/></div>
              <div className="col-10">
        <h5>Leader {leader.name}</h5>
        <p>{leader.designation}</p>
        <p>{leader.description}</p>
        
        </div>
       
        </div>
       
        )
    })



    return (
        <div>
            <div className="row offset-2">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/Aboutus'>AboutUs</Link></BreadcrumbItem>
                </Breadcrumb>
            </div>
           <div className="offset-2">
            <div className='row, col-12'>
                <h3>About Us</h3><hr />
            </div>
            <div className="row row-content container">
                <div className="col-12 col-md-6">
                    <h2>Out History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white ">Fact At a Galance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 feb. 2013</dd>
                                <dt className="col-6"> Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Turnover Employee</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div></div>
            <div className="col-12 container">
                <Card>
                    <CardBody className="bg-faded">
                        <blockquote className="blockquote">
                            <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                            <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                            </footer>
                        </blockquote>
                    </CardBody>
                </Card>
            </div>
            <div className="row row-content">

                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                 
                        {leaders}
                 
                </div>
            </div>




        </div>
        </div>
    );
}



export default Aboutus;