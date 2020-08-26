import * as React from 'react';
import styled from 'styled-components';
import Rows from './Rows';

const Table = () => {
  const TableContainer = styled.div`
    align-content: center;
    background-color: azure;
    border-radius: 10px;
    padding: 20px;
    margin: 0 auto 0 20px;
    width: 300px;
    font-family: sans-serif;
  `;

  return (
    <TableContainer>
      <Rows />
    </TableContainer>
  );
};

export default Table;
