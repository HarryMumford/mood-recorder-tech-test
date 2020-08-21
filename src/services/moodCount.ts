import { moodCount } from '../interface/moodCount';

export function moodCount(moodEvents: Array<Array<Object>>): moodCount {
  const rows = moodEvents[0];
  let output: any = {};

  rows.forEach((row) => {
    const obj: any = Object.assign({}, row);
    const mood = obj.payload.mood;
    if (output[mood] == undefined) {
      output[mood] = 0;
    }
    output[mood]++;
  });

  return output;
}
