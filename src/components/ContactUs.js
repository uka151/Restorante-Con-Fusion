import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link}  from 'react-router-dom';

function Contact(props){
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to='/contactus'>Contact Us</Link></BreadcrumbItem>
                </Breadcrumb> 
            </div>
            <div className="row">
            <h3>Contact Us</h3><hr/>
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
           <i className="fa fa-phone"></i>   : +919451075292   <br/>  
           <i className="fa fa-fax"></i>:   +852 8765 4321<br/>
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
           <a role="button" className="btn btn-info">
               <i className="fa fa-skype">Skype</i>
           </a>
           <a role="button" className="btn btn-success" href="mailto:umeshagrahari87@gmail.com"><i className="fa fa-envelope">Email</i></a>
           </div>    
         </div>
         </div>
         
         </div>
         
     
    );
}

export default Contact;