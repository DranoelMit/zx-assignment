import React from 'react';
import { Flex, Box, Heading } from 'rebass';

const Validation = () => {
  return (
    <Flex
      id='validation'
      sx={{
        width: '100%',
        height: (window.innerWidth > 500) ? '100vh' : '200vh',
        flexWrap: 'wrap',
        paddingTop: '5%'

      }}
    >
      <Box
        sx={{
          p: 6,
          width: (window.innerWidth > 500) ?'50%': '100%',
          minWidth: '300px',

          borderRight: '10px solid #00ffff'
        }}
      >
        <Heading fontSize={'2rem'} style={{          textDecoration:'underline',
          textDecorationColor: '#00ffff',}}>How I would validate this opportunity.</Heading>
        <ul style={{fontSize: '1rem', fontFamily: 'sans-seriff', textAlign: 'left'}}>
          <li style={{paddingBottom:'3rem'}}> Use a prototype of the app to conduct user testing and measure the change in electricity use compared to the same month of the prior year.</li>
          <li style={{paddingBottom:'3rem'}}> Conduct further research to confirm that greatly reducing the use of passive electricty in households has an effect on the overall CO2 emissions.</li>
          <li style={{paddingBottom:'3rem'}}> Formulate a Software as a Service (SaaS) model that ensures families are saving money by using/subscribing to the service.</li>
          <li style={{paddingBottom:'3rem'}}> Evaluate how much money power companies are investing in reducing household electricity waste. Valuate the product and show these companies that investing in this service would cost less and do more than their current investments in reducing this waste.</li>

        </ul>
      </Box>
      <Box
        sx={{
          p: 6,
          width: (window.innerWidth > 500) ?'50%': '100%',
          minWidth: '300px',

          borderRight: '10px solid #ffea41'
        }}
      >
        <Heading fontSize={'2rem'} style={{          textDecoration:'underline',
          textDecorationColor: '#ffea41',}}>Who can address this?</Heading>
        <ul style={{fontSize: '1rem', fontFamily: 'sans-seriff', textAlign: 'left'}}>
         <li style={{paddingBottom:'3rem'}}>Power Companies would be able to directly tie this into their household services.</li>
         <li style={{paddingBottom:'3rem'}}> Any company well-versed in IoT(Internet of Things) and/or smart home devices such as: Google, Amazon, Lifx, and Belkin. These companies could immediately begin building their own in-house product.</li>
         <li style={{paddingBottom:'3rem'}}> The resources needed to communicate with other smart devices is publicly available and so there is an opportunity for any startup to address this issue and begin to develop a revenue stream. </li>
         <li style={{paddingBottom:'3rem'}}> This service greatly benefits from having a way to make the product known and available to as many users as possible. This is why power companies like PSE&G or Smart Home comapnies like Google and Amazon would have the greatest success with this kind of product, becuase they can do more than just put it on the App Stores and invest in advertising, they can simply add it to an exisiting service that customers are already using.</li>
        </ul>
      </Box>
    </Flex>
  );
};

export default Validation;