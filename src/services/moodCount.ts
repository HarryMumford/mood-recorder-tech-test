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

  const moods = Object.keys(output);

  let total = 0;

  moods.forEach((mood) => {
    total += output[mood];
  });

  moods.forEach((mood) => {
    output[mood] = Math.round(100 * (output[mood] / total));
  });

  return output;
}
