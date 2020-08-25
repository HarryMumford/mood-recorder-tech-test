import * as React from 'react';
import styled from 'styled-components';
import Key from './Key';
import Pie from './Pie';

const ChartContainer = styled.div`
  align-content: center;
  background-color: azure;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
  width: 250px;
`;

const Chart = () => {
  return (
    <ChartContainer>
      <Pie />
      <Key />
    </ChartContainer>
  );
};

export default Chart;
