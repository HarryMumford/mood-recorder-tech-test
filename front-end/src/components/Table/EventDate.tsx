import * as React from 'react';
import { getDay, getDate, getMonth } from '../../services/dateFormatter';
import styled from 'styled-components';

const FullDate = styled.div`
  font-size: 0.7rem;
  color: darkslategray;
`;

const EventDate = (props: { timestamp: string }) => {
  const { timestamp } = props;
  const day = getDay(timestamp);
  const date = getDate(timestamp);
  const month = getMonth(timestamp);
  const year = new Date(timestamp).getFullYear();

  return (
    <>
      <FullDate key={timestamp}>{`${day} ${date} ${month} ${year}`}</FullDate>
    </>
  );
};

export default EventDate;
