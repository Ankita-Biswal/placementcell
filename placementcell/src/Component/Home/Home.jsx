import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  background-color: #f0f0f0;
  padding: 2rem;
  text-align: center;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background-color: #004080;
  color: #fff;
`;

const HeroImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const WelcomeMessage = styled.section`
  padding: 2rem 0;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #004080;
  }

  p {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`;

const CEOSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`;

const CEOImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 2rem;
`;

const CEOContent = styled.div`
  text-align: left;

  h3 {
    font-size: 1.5rem;
    color: #004080;
  }

  p {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <HeroSection>
        {/* Image 1 */}
        <HeroImage src="/Images/Slideimages/main-gate.png" alt="University Image 1" />
      </HeroSection>
      <WelcomeMessage>
        <h2>Welcome to Our University</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu quam quis urna lacinia fringilla.
        </p>
      </WelcomeMessage>
      <HeroSection>
        {/* Image 2 */}
        <HeroImage src="/Images/Slideimages/s2.png" alt="University Image 2" />
      </HeroSection>
      <HeroSection>
        {/* Image 3 */}
        <HeroImage src="/Images/Slideimages/s3.png" alt="University Image 3" />
      </HeroSection>
      <WelcomeMessage>
        <h2>Message from the CEO</h2>
        <CEOSection>
          <CEOImage src="Images/Msg/mukti.jpg" alt="CEO Image" />
          <CEOContent>
            <h3>Dr.Muktikanta Mishra</h3>
            <p>
              "Dr. Mishra in his endeavor to explore entrepreneurial capability, as a Director of Consulting Firm along with three professors had taken over the management of one Engineering College in 2005. The engineering college (Jagannath Institute for Technology & Management (JITM), Paralakhemundi) located in a remote rural area of the poorest district of Orissa, is All India Council for Technical Education (AICTE) approved. At that time, it had seven academic departments and 420 seats, and was faced with reduced intake, poor academic performance and placement problems. Dr. Mishra has taken it as a mission of life and real time personal social responsibility to turn around this college and place it at a national level through qualitative improvement in curricular, co-curricular and extra-curricular activities. "
            </p>
          </CEOContent>
        </CEOSection>
      </WelcomeMessage>
    </HomePageContainer>
  );
};

export default HomePage;
