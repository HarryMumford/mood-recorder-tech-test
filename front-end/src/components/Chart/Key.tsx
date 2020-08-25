import * as React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoods } from '../../flux/actions/moods';
import { RootStore } from '../../flux/store';
import { moodColors } from '../../assets/constants/moodColors';
import { KeyProps } from './interface';
import Subtitle from './Subtitle';

const KeyContainer = styled.div`
  font-family: sans-serif;
  font-size: 1rem;
  margin-top: 30px;
  color: darkslategray;
`;

const MoodWord = styled.span<KeyProps>`
  color: ${(props) => props.data};
  font-size: 1rem;
  font-weight: bold;
`;

const Key = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoods());
  }, []);

  const moodState = useSelector((state: RootStore) => state.mood);
  const moods = Object.keys(moodState.mood);

  return (
    <KeyContainer>
      <Subtitle>Mood Checks</Subtitle>
      {moodState.mood ? (
        moods.map((mood) => {
          const color = moodColors[mood];
          console.log(color);
          const percent = `${moodState.mood[mood]}%`;
          const sentence = ` ${percent} of the time`;
          const moodCapitalized = mood.charAt(0).toUpperCase() + mood.slice(1);
          return (
            <div key={mood}>
              <MoodWord data={color}>"{moodCapitalized}"</MoodWord>
              {sentence}
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </KeyContainer>
  );
};

export default Key;
