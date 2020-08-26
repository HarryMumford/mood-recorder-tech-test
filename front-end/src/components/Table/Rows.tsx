import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../flux/store';
import { getConcernEvents } from '../../flux/actions/concernEvents';
import EventDate from './EventDate';
import Subtitle from '../Chart/Subtitle';

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
        <thead>
          <tr>
            <th>Severity</th>
            <th>Observer</th>
          </tr>
        </thead>
        <tbody>
          {concernEvents &&
            concernEvents.map((ce) => {
              const { timestamp, severity, observer } = ce;

              return (
                <>
                  <tr key={timestamp}>
                    <td>{severity}</td>
                    <td>{observer} </td>
                  </tr>
                  <EventDate timestamp={timestamp} />
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Rows;
