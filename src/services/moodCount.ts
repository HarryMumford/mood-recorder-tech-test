import { moodCount } from '../interface/moodCount';

export function moodCount(moodEvents: any): moodCount {
  const rows = moodEvents[0];
  let output: moodCount = {};

  rows.forEach((row: object) => {
    const obj: any = Object.assign({}, row);
    const mood = obj.payload.mood;
    if (output[mood] == undefined) {
      output[mood] = 0;
    }
    output[mood]++;
  });

  return output;
}
