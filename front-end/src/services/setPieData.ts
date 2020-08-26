import { moodColors } from '../assets/constants/colors';
import { DefaultStateI } from '../flux/reducers/mood';

export const setPieData = (moodState: DefaultStateI) => {
  if (moodState.mood) {
    let output: string = '';
    const moods = Object.keys(moodState.mood);

    moods.forEach((currentMood, index) => {
      const previousMoodValue = moodState.mood[moods[index - 1]];

      let value = moodState.mood[currentMood];

      if (previousMoodValue) {
        value += previousMoodValue;
      }

      const color = moodColors[currentMood];
      const percentage = `${value}%`;
      const str = `${color} 0 ${percentage}, `;
      output += str;
    });
    output = output.slice(0, -2);
    return output;
  } else {
    return 'lightgrey 100%';
  }
};
