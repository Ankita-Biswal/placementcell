import React from 'react';
import styled from 'styled-components';

const ProgramsContainer = styled.section`
  background-color: #f7f7f7;
  padding: 2rem;
`;

const Program = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
`;

const Programs = () => {
  const programData = [
    {
      title: 'Computer Science',
      description: 'Learn the latest in computer science and programming.',
    },
    {
      title: 'Business Administration',
      description: 'Prepare for a career in the world of business and management.',
    },
    {
      title: 'Engineering',
      description: 'Explore the fascinating field of engineering and innovation.',
    },
  ];

  return (
    <ProgramsContainer>
      {programData.map((program, index) => (
        <Program key={index}>
          <Title>{program.title}</Title>
          <Description>{program.description}</Description>
        </Program>
      ))}
    </ProgramsContainer>
  );
};

export default Programs;
