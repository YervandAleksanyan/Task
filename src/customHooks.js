import React, {useState} from 'react';

const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
        console.log(inputs);
      if (event) {
          setInputs(inputs => ({...inputs, newInput: true}));
        event.preventDefault();
      }
    }

    const handleInputChange = (event) => {
        event.persist();
      if(event.target.name){
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      }
    } 

    const handlePhoneInputChange = (value) => {
        if(value) {
            setInputs(inputs => ({...inputs, phoneNumber: value}));
            console.log(inputs);        }
     }

     const handleGenderChange = (event) => {
         event.persist();
         if(event) {
             setInputs(inputs => ({...inputs, Gender: event.target.value}));
         }
     }
       
    return {
      handleSubmit,
      handleInputChange,
      handlePhoneInputChange,
      handleGenderChange,
      inputs
    };
  }


export default useSignUpForm;