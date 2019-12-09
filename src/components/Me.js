import React from 'react';
import { Box, Flex, Heading } from 'rebass';

const Me = () => {
  return (
    <Flex
    id='about'
    sx={{
      width: '100%',
      height: (window.innerWidth > 500) ? '100vh' : '210vh',
      backgroundImage: 'url(https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
      backgroundSize: 'cover',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: (window.innerWidth > 500) ? 'space-between' : 'center',
      alignItems: 'center'
    }}
    >
      <Box
      sx={{
        width: (window.innerWidth > 500) ? '30%' : '80%',
        backgroundColor: '#ffffff',
        borderRadius: 16,
        p: 10,
        marginLeft: (window.innerWidth > 500) ? '2%' : 0,
        marginTop: (window.innerWidth > 500) ? 0 : '2%'

      }}
      >
        <Heading fontSize={'2rem'}>
          About Me
        </Heading>
        <img src="http://timleonard.site/images/profile.JPG" style={{borderRadius: 16}}/>
        <h3>Tim Leonard</h3>
        <p >Aspiring Developer/Entrepreneur Seeking Summer 2020 Internship</p>
        <p > Studying Software Engineering and Computer Science at Stevens Institute of Technology</p>
        <a href="http://timleonard.site/TimLeonardResume_Fall2019.pdf"><p>Full Resume</p></a>
        <a href="https://github.com/DranoelMit/zx-assignment"><p>How I built this website</p></a>
      </Box>
      <Box
        sx={{
          width: (window.innerWidth > 500) ? '60%' : '90%',
          backgroundColor: 'rgba(150,150,150,0.5)',
          borderRadius: 16,
          marginRight: (window.innerWidth > 500) ? '2%' : 0
        }}
      >
        <Heading fontSize={'2rem'}>How I could help bring this to life</Heading>
        <ul style={{textAlign:'left', fontSize: '1.5rem', fontFamily: 'sans-seriff'}}>
          <li style={{paddingBottom:'2%'}}>Extremely development focused background.</li>
          <li style={{paddingBottom:'2%'}}>I'm super interested in early companies and startups. Currently I am working at Forkist, a food focused startup in Hoboken NJ.</li>
          <li style={{paddingBottom:'2%'}}>My long term goal is to start my own company dedicated to helping users first, and worrying about optimizing profits second. This product could not only save user's money but also help reduce the carbon footprint worldwide.</li>
          <li style={{paddingBottom:'2%'}}>I have all the skills neccesary to address this issue. I could build the app and all of the backend services neccesary and am connected to a network of people that would be interested in investing or helping the product take off. The only obstacle is that this is too large of a project for one person.</li>
        </ul>
      </Box>
    </Flex>
  );
};

export default Me;