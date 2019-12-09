import React from 'react';
import { Text, Box, Flex, Heading } from 'rebass';
import PieChart from 'react-minimal-pie-chart';

const defaultLabelStyle = {
  fontSize: 4,
  fill: '#121212',
  fontFamily: 'sans-seriff'
};

const Problem = (props) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: (window.innerWidth > 500) ?'100vh' : '150vh',
      }}
      id='problem'
    >
      <Flex
        sx={{
          width: '100%',
          height: '100vh',
          flexDirection: 'row',
          justifyContent: 'space-around',
          p: 4,
          flexWrap: 'wrap'
        }}
      >
        {console.log(window.innerWidth)}
        <Box
          sx={{
            p: 10,
            border: '2px solid #000000',
            width: '50%',
            minWidth: '400px',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Heading
            fontSize={'2rem'}
            style={{
              textAlign: 'center',
              textOverflow: 'wrap',
            }}
          >
            A Majority of the United States's energy is 'rejected'.
        </Heading>
          <PieChart
            style={{
              width: '35vw',
              minWidth: '300px',
              marginTop: '2rem'
            }}
            data={[
              { title: 'Used Electricity', value: 39, color: '#00ffff' },
              { title: 'Rejected Electricity', value: 61, color: '#ffea41' }
            ]}
            label={props => props.data[props.dataIndex].title}
            labelStyle={{
              ...defaultLabelStyle
            }}
          />
          <a href="https://3dfs.com/wp-content/uploads/2016/10/2014_us_energy.png">Source</a>
        </Box>
        <Box
          sx={{
            p: 8,
            width: '50%',
            minWidth: '400px',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Heading
            fontSize={'2rem'}
            style={{
              textAlign: 'center',
              textOverflow: 'wrap'
            }}
          >
            Over a third of the CO2 emissions in the U.S. come from Electricity Generation.
        </Heading>
          <PieChart
            style={{
              width: '35vw',
              minWidth: '300px',
              marginTop: '2rem'
            }}
            data={[
              { title: 'Electricity Generation', value: 33, color: '#00ffff' },
              { title: 'Other Emissions', value: 66, color: '#ffea41' }
            ]}
            label={props => props.data[props.dataIndex].title}
            labelStyle={{
              ...defaultLabelStyle
            }}
          />
          <a href="https://www.eia.gov/tools/faqs/faq.php?id=77&t=11">Source</a>
        </Box>
      </Flex>
    </Box>
  );
};

export default Problem;