import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../flux/store';
import { getConcernEvents } from '../../flux/actions/concernEvents';
import EventDate from './EventDate';
import Subtitle from '../Chart/Subtitle';
import { TableRowProps } from './interface';
import { severityColors } from '../../assets/constants/colors';
import styled from 'styled-components';

const SeverityWord = styled.td<TableRowProps>`
  color: ${(props) => props.data};
  font-size: 1rem;
  font-weight: bold;
`;

const TableHeader = styled.tr`
  font-weight: bold;
  color: darkslategray;
  font-size: 0.7rem;
`;

const TableData = styled.td`
  padding: 10px;
  text-align: left;
`;

const Rows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConcernEvents());
  }, []);

  const concernEventState = useSelector(
    (state: RootStore) => state.concernEvent
  );

  const concernEvents = concernEventState.concernEvent;

  return (
    <>
      <Subtitle>Latest Incidents</Subtitle>
      <table>
        <TableHeader>
          <TableData>Severity</TableData>
          <TableData>Observer</TableData>
          <TableData>Date</TableData>
        </TableHeader>
        <tbody>
          {concernEvents &&
            concernEvents.map((ce) => {
              const { timestamp, severity, observer } = ce;
              const color = severityColors[severity];

              return (
                <tr key={timestamp}>
                  <SeverityWord data={color}>{severity}</SeverityWord>
                  <TableData>{observer}</TableData>
                  <EventDate timestamp={timestamp} />
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Rows;
