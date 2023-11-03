import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  background-color: #f7f7f7;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const PersonCard = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PersonImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const PersonName = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactPage = () => {
  const peopleData = [
    {
      name: 'Main Campus',
      image: '/Images/Location/s2.png',
      contactNumber: '123-456-7890',
      email: 'maincampus@example.com',
      location: 'City, State, India',
    },
    {
      name: 'Branch Campus 1',
      image: 'Images/location2.jpg',
      contactNumber: '987-654-3210',
      email: 'branch1@example.com',
      location: 'City, State, India',
    },
    {
      name: 'Branch Campus 2',
      image: 'Images/location3.jpg',
      contactNumber: '987-654-3210',
      email: 'branch2@example.com',
      location: 'City, State, India',
    },
    {
      name: 'Branch Campus 3',
      image: 'Images/location4.jpg',
      contactNumber: '987-654-3210',
      email: 'branch3@example.com',
      location: 'City, State, India',
    },
    // Add more locations here
  ];

  return (
    <ContactContainer>
      {peopleData.map((location, index) => (
        <PersonCard key={index}>
          <PersonImage src={location.image} alt={location.name} />
          <PersonName>{location.name}</PersonName>
          <ContactInfo>
            <p>Contact Number: {location.contactNumber}</p>
            <p>Email: {location.email}</p>
            <p>Location: {location.location}</p>
          </ContactInfo>
        </PersonCard>
      ))}
    </ContactContainer>
  );
};

export default ContactPage;
