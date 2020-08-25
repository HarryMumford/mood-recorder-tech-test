import { concernEvent } from '../interface/concernEvent';

export function formatConcernEvents(concernEvents: any): Array<concernEvent> {
  const rows = concernEvents[0];
  let output: Array<concernEvent> = [];

  rows.forEach((row: object) => {
    const obj: any = Object.assign({}, row);
    const concernEvent = obj.payload;
    const { severity, timestamp } = concernEvent;
    const outputEvent = {
      timestamp,
      severity,
      observer: 'John Doe'
    };
    output.push(outputEvent);
  });

  return output;
}
