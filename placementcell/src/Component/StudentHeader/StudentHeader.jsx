import React from 'react';

const StudentHeader = ({ name }) => {
  return (
    <header>
      {/* Add the content for the student header here */}
      <h1>Welcome, {name} (Student)!</h1>
      {/* Add any other student-specific header content here */}
    </header>
  );
};

export default StudentHeader;
