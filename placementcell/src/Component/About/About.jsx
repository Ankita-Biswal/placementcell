import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  background-color: #f7f7f7;
  padding: 2rem;
`;

const Slider = styled.div`
  /* Add styles for the slide images here */
`;

const AboutContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const AboutItem = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Box = styled.div`
  background-color: #004080;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  flex: 0 1 calc(33.333% - 10px);
  text-align: center;
`;

const BoxImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

const BoxText = styled.p`
  font-size: 0.9rem;
`;

const Graph = styled.img`
  width: 100%;
  height: auto;
  margin-top: 1rem;
`;

const ViceChancellorMessage = styled.div`
  text-align: center;
`;

const ViceChancellorImage = styled.img`
  width: 200px; /* Adjust the size as needed */
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 1rem;
`;

const ViceChancellorText = styled.p`
  font-size: 1rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <Slider>
        {/* Add slide images or use a carousel/slider component */}
        {/* You'll need to include a carousel/slider library here */}
      </Slider>
      <AboutContent>
        <AboutItem>
          <Image src="/Images/Slideimages/skill.jpg" alt="Image 1" />
          <Title>Our Mission</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo in nunc ultricies blandit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quos tempora quo labore eum voluptatum cupiditate cum sit? Fugiat repellat reprehenderit ea quis nemo distinctio, possimus sint assumenda ut minima!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione, ut eum maiores vitae qui voluptates? Rerum excepturi quo corrupti voluptatibus mollitia, aliquid unde aut! Quisquam eveniet harum ipsa non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sequi pariatur laborum dolor? Aperiam doloremque natus porro repellat totam placeat iusto vitae animi. Expedita porro saepe provident molestias hic dolore.
          </Description>
          <BoxContainer>
            <Box>
              <BoxImage src="/Images/Box1/Box1.jpg" alt="Box 1" />
              <BoxText>Message 1</BoxText>
            </Box>
            <Box>
              <BoxImage src="/Images/box2.jpg" alt="Box 2" />
              <BoxText>Message 2</BoxText>
            </Box>
            <Box>
              <BoxImage src="/Images/box3.jpg" alt="Box 3" />
              <BoxText>Message 3</BoxText>
            </Box>
          </BoxContainer>
        </AboutItem>
        <AboutItem>
          <Image src="/Images/Slideimages/skill.jpg" alt="Image 2" />
          <Title>Our Vision</Title>
          <Description>
            To provide quality education, creating human assets / manpower and intellectual capital. To enhance research and development in different disciplines. To develop new generation entrepreneurs who will be instrumental in fueling economic growth. To create able Leaders, Managers, and Technocrats.
          </Description>
          <BoxContainer>
            <Box>
              <BoxImage src="/Images/box4.jpg" alt="Box 4" />
              <BoxText>Message 4</BoxText>
            </Box>
            <Box>
              <BoxImage src="/Images/box5.jpg" alt="Box 5" />
              <BoxText>Message 5</BoxText>
            </Box>
            <Box>
              <BoxImage src="/Images/box6.jpg" alt="Box 6" />
              <BoxText>Message 6</BoxText>
            </Box>
          </BoxContainer>
        </AboutItem>
        <AboutItem>
          <Image src="/Images/Slideimages/skill.jpg" alt="Image 3" />
          <Title>Our Values</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo in nunc ultricies blandit.
          </Description>
          <BoxContainer>
            <Box>
              <BoxImage src="/Images/box7.jpg" alt="Box 7" />
              <BoxText>Message 7</BoxText>
            </Box>
            <Box>
              <BoxImage src="/Images/box8.jpg" alt="Box 8" />
              <BoxText>Message 8</BoxText>
            </Box>
            <Box>
              <BoxImage src="/Images/box9.jpg" alt="Box 9" />
              <BoxText>Message 9</BoxText>
            </Box>
          </BoxContainer>
        </AboutItem>
      </AboutContent>
      <ViceChancellorMessage>
        <ViceChancellorImage src="/Images/Msg/supriya.jpg" alt="Vice Chancellor" />
        <ViceChancellorText>
          Dear Students,
          We are delighted to welcome you to our university. Your journey here is the beginning of a bright and promising future. Our dedicated team of educators and staff is committed to providing you with the highest quality education, resources, and support.
          As the Vice Chancellor, I extend my best wishes to each of you. Together, we will make your time here enriching and transformative. Our university's community thrives on diversity, innovation, and excellence.
          Feel free to explore the opportunities that await you, and never hesitate to reach out if you have any questions or need assistance.
          Welcome aboard, and let's embark on this educational adventure together.
          Warm regards,
          [Dr. Supriya Patnayak, Vice Chancellor, CUTM]
        </ViceChancellorText>
      </ViceChancellorMessage>
    </AboutContainer>
  );
};

export default About;
