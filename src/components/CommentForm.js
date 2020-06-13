import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Label } from 'reactstrap';
import { LocalForm, Errors, Control } from 'react-redux-form';

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

    handleSubmit(values) {
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
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
                                    <Control.text model='.yourName' className="form-control" name="yourName" placeholder='Your Name'
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

export default CommentForm;