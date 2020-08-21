import Chart from '../Chart/Container';
import Table from '../Table/Container';

import * as React from 'react';
import styled from 'styled-components';

const Section = () => {
  const SectionContainer = styled.div`
    background-color: lightblue;
  `;
  return (
    <SectionContainer>
      <Chart />
      <Table />
    </SectionContainer>
  );
};

export default Section;
