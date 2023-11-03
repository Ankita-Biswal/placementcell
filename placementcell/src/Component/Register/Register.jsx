import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: #333;
`;

const FormContainer = styled.div`
  margin-top: 20px;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
`;

const Button = styled.button`
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function Registration() {
  const [regId, setRegId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function register() {
    try {
      // Send a POST request to your Spring Boot API to register the user
      const response = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ regId, password }),
      });

      if (response.status === 201) {
        // Registration successful
        // Redirect to the login page or perform login here
        navigate('/login'); // Redirect to the login page after successful registration
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  }

  return (
    <Container>
      <Title>Register</Title>
      <FormContainer>
        <Label>Username:</Label>
        <Input type="text" placeholder="Username" onChange={(e) => setRegId(e.target.value)} />
        <Label>Password:</Label>
        <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={register}>Register</Button>
      </FormContainer>
    </Container>
  );
}

export default Registration;
