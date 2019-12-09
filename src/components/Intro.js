import React from 'react';
import { Box, Flex, Heading, Text } from 'rebass';


const Intro = (props) => {
  return (
    <Box
      id='intro'
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(https://media.giphy.com/media/dPTktM4fvh8dO/giphy.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
      <Flex
        sx={{
          width: '100%',
          height: '100vh',
        }}
        alignItems='center'
        justifyContent='center'
      >
        <Heading
          fontSize={80}
        >
          The <span style={{color:'#00ffff'}}>Shocking</span> Truth
          <a href="https://timleonard.site" style={{fontSize: 20, textDecoration: 'none', color: '#ffffff'}}>
            <p>A case study by <span style={{textDecoration: 'underline', textDecorationColor: '#ffea41',}}>Tim Leonard</span></p>
          </a>
        </Heading>
      </Flex>
    </Box>
  );
};

export default Intro;