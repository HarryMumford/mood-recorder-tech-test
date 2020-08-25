import Chart from '../Chart/Container';
import Table from '../Table/Container';

import * as React from 'react';
import styled from 'styled-components';

const blob = require('../../assets/images/blob.svg');

const Section = () => {
  const SectionContainer = styled.div`
    background-image: url(${blob});
    height: 80%;
  `;

  return (
    <SectionContainer>
      <Chart />
      <Table />
    </SectionContainer>
  );
};

export default Section;
