import React from 'react';
import {Card, CardBody, CardImg,CardTitle, CardText, CardSubtitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderCard({item}){
    return(

        <Card>
      <CardImg src={item.image} alt={item.name}/>
         <CardBody>
    <CardTitle>{item.name}</CardTitle>
    {item.designation? <CardSubtitle>{item.designation}</CardSubtitle>:null}
    <CardText>{item.description}</CardText>
         </CardBody>
        </Card>

    );
}

function Home(props){
    return(
        <div className='container'>
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                </Breadcrumb>
               
            </div>
            <div className="row">
            <h3 className="col-12">Home</h3><hr/>
            </div>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
            <RenderCard item={props.dish}/>
            </div>
            <div className="col-12 col-md m-1">
            <RenderCard item={props.promotion}/>
            </div>
            <div className="col-12 col-md m-1">
            <RenderCard item={props.leader}/>
            </div>
          
            </div>
        
        </div>
    );
}

export default Home;