import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default class InterestForm extends React.Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    message: '',
    sent: false
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleMessage = (e) => {
    this.setState({ message: e.target.value });
  };

  formSubmit = (e) => {
    e.preventDefault();

    // Check if all form fields are filled
    if (
      this.state.name.trim() !== '' &&
      this.state.lastName.trim() !== '' &&
      this.state.email.trim() !== '' &&
      this.state.message.trim() !== ''
    ) {
      let data = {
        name: this.state.name,
        lastName: this.state.lastName,
        email: this.state.email,
        message: this.state.message
      };
      axios
        .post('/api/forma', data)
        .then((res) => {
          // Form submission successful, show the "Message has been sent" popup
          this.setState({ sent: true });

          // Reset the form after a delay
          setTimeout(() => {
            this.resetForm();
          }, 3000);
        })
        .catch(() => {
          console.log('error');
        });
    } else {
      // Show an error or do something if the form fields are not filled
      console.log('Please fill out all the form fields.');
    }
  };

  resetForm = () => {
    this.setState({
      name: '',
      lastName: '',
      email: '',
      message: '',
      sent: false // Reset the sent state back to false to hide the "Message has been sent" popup
    });
  };

  render() {
    return (
      <div>
        <h4 className='mb-3'>Get in Touch!</h4>
        <Form className='contact-form' onSubmit={this.formSubmit}>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridFirst'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='First Name'
                value={this.state.name}
                onChange={this.handleName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridLast'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Last Name'
                value={this.state.lastName}
                onChange={this.handleLastName}
              />
            </Form.Group>
          </Row>

          <Form.Group className='mb-3' controlId='formGridAddress1'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              placeholder='abc123@georgetown.edu'
              value={this.state.email}
              onChange={this.handleEmail}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              placeholder='Write your message here'
              value={this.state.message}
              onChange={this.handleMessage}
            />
          </Form.Group>
          {this.state.sent && <div className='msg msgAppear'> Message has been sent </div>}
          <Button id='formButton' className='mb-3' variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

