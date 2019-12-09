import React from 'react';
import { Flex, Box, Link } from 'rebass';

const NavBar = (props) => {
  return (
    <Flex
      px={2}
      bg='rgba(0,0,0,0)'
      alignItems='center'
      style={{
        position: 'fixed',
        zIndex: 100,
        width: '100%', 
        fontSize: '.75rem'
      }}
    >
      <Link variant='nav' p={2} fontWeight='bold' style={{textDecoration: 'none', backgroundColor: '#ffffff'}} href='#intro'>The Shocking Truth</Link>
      <Box mx='auto' />
      <Link variant='nav' href='#problem'>
        The Problem
      </Link>
      <Link variant='nav' href='#solution'>
        The Solution
      </Link>
      <Link variant='nav' href='#validation'>
        Validation
      </Link>
      <Link variant='nav' href='#about'>
        About Me
      </Link>
    </Flex>

  );
};

export default NavBar;