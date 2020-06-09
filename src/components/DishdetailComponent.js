import React, { Component } from 'react';
import { Card, CardImg, CardBody, Breadcrumb, Button, BreadcrumbItem, CardTitle , Label, ModalBody,Modal,ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Errors, Control } from 'react-redux-form';



class DishDetail extends Component {
    //dishe



    renderDish(dish) {
        return (
            <div key={dish.id} className="col-6 col-md-5 m-1">
                <Card>
                    <CardBody center>
                        <CardImg id="Cardimg" src={dish.image} alt={dish.name} /></CardBody>
                </Card>
            </div>
        )
    };

    renderComments(com) {
        return (
            <div className="col-6 col-md-5 m-1">
                <Card>
                    <h4>Comments</h4>
                    <div key={com.key}>
                        <ul className="list-unstyle">
                            <h3>{com.name}</h3>
                            <p>{com.description}</p>
                            <br />
                            <div className="col-6">
                                <CardBody>
                                    <h4>Name:  {com.name}</h4>
                                    <h4>Price:  {com.price}</h4>
                                    <h4>Status : {com.status}</h4>
                                    <h4>Type : {com.type}</h4>
                                </CardBody>
                            </div>
                        </ul>
                        <div className="Row">
                            <div className="col-12 md-5 ">
                                <Button type="submit" className="fa fa-shopping-cart fa-lg" value="Add Item"> Add to Cart</Button>

                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
    renderCommentOnly(comments, addComment, dishId) {
        const comment = comments.map((dish) => {
            return (
                <div>
                    <div classname="row">
                        <p>{dish.comment}</p></div>
                    <div className="row">
                        <p>{dish.author}</p>
                        <p>{dish.date}</p>
                    </div>
                    <div className="row">
                        <h6>Rating: {dish.rating}</h6>
                    </div>
                </div>

            )

        })

        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h2>All Comments</h2>
                        </CardTitle>
                        {comment}

                    </CardBody>
                    <div className="col-12 md-5 m-1">
                        <CommentForm addComment={addComment}
                            dishId={dishId} />
                    </div>

                </Card>
            </div>
        )
    }

    render() {

        return (
            <div>
                <div className="col-12 col-sm-4 offset -1">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>{this.props.dishe.name}</Link></BreadcrumbItem>
                    </Breadcrumb>  </div>
                <div className="row" >
                    <div className="col-12 col-sm-4">
                        <h3>{this.props.dishe.name}</h3><hr />
                    </div></div>
                <div className="row">
                    {this.renderDish(this.props.dishe)}
                    {this.renderComments(this.props.dishe)}
                </div>
                <div className="row ml-2">
                    {this.renderCommentOnly(this.props.comment, this.props.addComment, this.props.dishe.id)}
                </div>
            </div>
        )
    };

}

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ isOpenModal: !this.state.isOpenModal });
    }

    handleSubmit(value) {
        this.props.AddComment(this.props.dishId, value.rating, value.author,value.comment);
    }


    render() {
      
        return (
            <div>

                <Button type="submit" onClick={() => this.toggleModal()}>  <i className="fa fa-pencil-square-o">Submit Comment</i> </Button>
                <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Comment Form
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="Row">
                                <div className="col-12 ">
                                    <Label htmlFor="Rating">Rating</Label>
                                </div>
                            </div>
                            <div className="Row">
                                <div className="col-12 ">
                                    <Control.select model='.Rating' className="form-control" id='Rating' >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </div>
                            </div>
                            <div className="Row">
                                <div className="col-12 ">
                                    <Label htmlFor="yourName"> Your Name</Label>
                                </div>
                            </div>
                            <div className="Row">
                                <div className="col-12 ">
                                    <Control.text model='.yourName' className="form-control" id="yourName" name="yourName" placeholder='Your Name'
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }} />
                                    <Errors className="text-danger" model=".yourName"
                                        show="touched"
                                        messages={{
                                            minLength: "Must be greater than 2 character",
                                            maxLength: "Must be less than 15 character"
                                        }} />
                                </div>
                            </div>
                            <div className="Row">
                                <div className="col-12 ">
                                    <Label htmlFor="Comment">Comment</Label>
                                </div>
                            </div>
                            <div className="Row">
                                <div className="col-12 ">
                                    <Control.textarea model=".Comment" rows="6" className="form-control" name="Comment" id="Comment" />
                                </div>
                            </div>
                            <div className="Row">
                                <Button type="submit" id="submit" className="bg-primary">Submit</Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div >
        );
    };
}



export default DishDetail;