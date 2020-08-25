import * as React from 'react';
import styled from 'styled-components';
import Key from './Key';
import Pie from './Pie';

const ChartContainer = styled.div`
  width: 300px;
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
