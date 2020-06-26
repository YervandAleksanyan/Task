import React from 'react';
import useSignUpForm from './customHooks';
import PhoneInput, { isValidPhoneNumber  } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import TableComponent from './Table';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Signup = () => {

    const {inputs, handleInputChange, handleSubmit, handlePhoneInputChange, handleGenderChange} = useSignUpForm();

  return (
    <div>
    <Form onSubmit={handleSubmit}>
    <Form.Row className="align-items-center">
      <Form.Label>Name</Form.Label>
      <Form.Group as={Col}> 
        <Form.Control 
            type="text" 
            name="firstName" 
            required 
            placeholder="First" 
            onChange={handleInputChange}  
            value={inputs.firstName}
        />
      </Form.Group>
      <Form.Group as={Col}> 
        <Form.Control 
            type="text" 
            name="lastName" 
            required 
            placeholder="Last" 
            onChange={handleInputChange}  
            value={inputs.lastName}
        />
      </Form.Group>
    </Form.Row>
    <Form.Group> 
        <Form.Label> Email </Form.Label>
        <Form.Control
            type="email" 
            name="email" 
            required 
            onChange={handleInputChange}
            value={inputs.email}
        /> 
    </Form.Group>
    <Form.Group>
      <Form.Label>Phone Number</Form.Label>
      <PhoneInput 
        defaultCountry='AM'
        international
        required 
        value={inputs.value}
        onChange={handlePhoneInputChange} 
        error={inputs.value ? (isValidPhoneNumber(inputs.value) ? undefined : 'Invalid phone number') : 'Phone number required'}
        />
    </Form.Group>
    <Form.Group>
      <Form.Label>Birth Date</Form.Label>
      <input 
        type="date" 
        name="birthDate"
        required 
        placeholder="mm / dd / yyyy"
        onChange={handleInputChange} 
        value={inputs.birthDate}
       />
    </Form.Group>
    <Form.Group>
        <Form.Label> Gender </Form.Label>
        <br/>
        Male
        <Form.Check 
            type="radio" 
            name="gender" 
            value="male" 
            onChange={handleGenderChange}
        />
           <br/>
           Female
        <Form.Check 
            type="radio" 
            name="gender" 
            value="female" 
            onChange={handleGenderChange} 
        /> 
    </Form.Group>
    <Button type="submit" onClick={handleSubmit}>Submit</Button>
  </Form>
  </div>
  )
}




export default Signup;