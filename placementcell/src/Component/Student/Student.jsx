import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: #333;
`;

const LogoutButton = styled.button`
  background-color: #f00;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d00;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
`;

const CompanyList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CompanyItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0;
  padding: 10px;
`;

const CompanyName = styled.span`
  font-weight: bold;
`;

const ApplyButton = styled.button`
  background-color: #007BFF;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Suggestions = styled.ul`
  list-style: none;
  padding: 0;
  position: absolute;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

function Student({ name, profile }) {
  const navigate = useNavigate();
  const [upcomingCompanies, setUpcomingCompanies] = useState([
    { name: 'Company A', applied: false },
    { name: 'Company B', applied: true },
    { name: 'Company C', applied: false },
  ]);
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleLogout = () => {
    // Perform any logout actions if necessary
    // For now, let's simply navigate back to the login page
    navigate('/login');
  };

  const applyToCompany = (companyIndex) => {
    const updatedCompanies = [...upcomingCompanies];
    updatedCompanies[companyIndex].applied = true;
    setUpcomingCompanies(updatedCompanies);

    // Show a toast message when the application is submitted
    toast.success('Congratulations! Your Request will be sent to the HR', {
      position: 'top-center',
      autoClose: 3000, // Auto-close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const cancelApplication = (companyIndex) => {
    const updatedCompanies = [...upcomingCompanies];
    updatedCompanies[companyIndex].applied = false;
    setUpcomingCompanies(updatedCompanies);
  };

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    // Simulate suggestions based on input
    const newSuggestions = ['Company X', 'Company Y', 'Company Z'].filter((company) =>
      company.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(newSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setSuggestions([]);
  };

  return (
    <Container>
      <Title>Welcome, {name}!</Title>
      <p>Your profile: {profile}</p>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      <SearchBar
        placeholder="Search for companies"
        value={searchInput}
        onChange={handleSearchChange}
      />
      {suggestions.length > 0 && (
        <Suggestions>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </SuggestionItem>
          ))}
        </Suggestions>
      )}
      <CompanyList>
        {upcomingCompanies.map((company, index) => (
          <CompanyItem key={index}>
            <CompanyName>{company.name}</CompanyName>
            {company.applied ? (
              <span>Application Submitted</span>
            ) : (
              <>
                <ApplyButton onClick={() => applyToCompany(index)}>Apply</ApplyButton>
                <ApplyButton onClick={() => cancelApplication(index)}>Cancel</ApplyButton>
              </>
            )}
          </CompanyItem>
        ))}
      </CompanyList>

      {/* Add the ToastContainer to display the toast messages */}
      <ToastContainer />
    </Container>
  );
}

export default Student;
