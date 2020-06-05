import React, { Component} from 'react';
import {Modal, ModalHeader, ModalBody, Button} from 'reactstrap';


class CommentForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            isOpenModal:false
        }
    }

   toggleModal(){
    this.setState({ isOpenModal: !this.state.isOpenModal });
    }

    render(){
        return(
                <div>
                    
                  <Button type="submit" onClick={()=>this.toggleModal()}>Send me FeedBack</Button>

                  <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal}>
                      <ModalHeader toggle={this.toggleModal}>
                          <h1>Comment Form</h1>
                      </ModalHeader>
                      <ModalBody>

                      </ModalBody>
                  </Modal>
                </div>
        );
    };
}

export default CommentForm;