import React from 'react';
import { Box, Heading } from 'rebass';
import { whileStatement } from '@babel/types';

const Solution = (props) => {
  return (
    <Box
      id='solution'
      sx={{
        width: '100%',
        height: '100vh',
        p: 5,
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundImage: 'url(https://media.giphy.com/media/443tfmj2wY6hWf5Rwg/giphy.gif)',
        backgroundSize: 'cover',

      }}
    >
      <Heading fontSize={60} style={{color: '#ffffff'}}> The Solution </Heading>
      <Box sx={{
        fontSize: '1.2rem',
        fontFamily: 'sans-seriff',
        color: '#ffffff',
        width: '50%',
        backgroundColor: 'rgba(0,0,0,00.5)',
        borderRadius: 12,
        p: 6,
        textAlign: 'left'
      }}>
        <p>Build a service that is integrated with smart-home devices and can detect when no one is home and turn off all plugged in devices.</p>

       <p>Almost a quarter of all homes have at least one smart device (Google Home, Amazon Alexa, etc.) and these devices support integrations with smart plugs, which can turn outlets on and off via wifi (<a href="https://www.nielsen.com/us/en/insights/article/2018/smart-speaking-my-language-despite-their-vast-capabilities-smart-speakers-all-about-the-music/">source</a>).</p>

       <p> A service like this can greatly reduce a family's electricity use and carbon foorprint, as well as lower their bills drastically.</p>
      </Box>
    </Box>
  );
};

export default Solution;