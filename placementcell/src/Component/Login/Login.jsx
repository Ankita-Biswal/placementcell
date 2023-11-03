import React, { useState, useEffect } from 'react';
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

function Login() {
  const [regId, setRegId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function login() {
    try {
      // Make a GET request to the API
      const response = await fetch();
      const data = await response.json();

      // Check if the login was successful based on the response data
      if (response.ok && data.statuscode === 'success') {
        let role = null;

        if (regId === 'rintu'&& password===233) {
          role = 'student';
          navigate(`/login/${role}`, { state: { name: regId, isStudent: true } });
        }

        // Redirect to the appropriate role-specific route
        navigate(`/login/${role}`, { state: { name: regId, isStudent: false } });
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <Container>
      <Title>Login page</Title>
      <FormContainer>
        <Input type='text' placeholder='regId' onChange={(e) => setRegId(e.target.value)} />
        <br />
        <Input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <br />
        <Button onClick={login}>Login</Button>
      </FormContainer>
    </Container>
  );
}

export default Login;
