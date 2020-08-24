// import { PieChart } from 'react-minimal-pie-chart';
import * as React from 'react';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// interface MoodCountState {
//   [key: string]: number;
// }

const Chart = () => {
  const mood = useSelector((state) => state.mood);

  const dispatch = useDispatch();

  const ChartContainer = styled.div`
    width: 200px;
    background-color: yellow;
  `;

  return (
    <ChartContainer>
      <div>{mood['happy']}</div>
      <button onClick={() => dispatch({ type: 'GET_MOOD_COUNT' })}>
        get moods
      </button>
    </ChartContainer>
  );
=======
import { useEffect } from 'react';
import { getMoodCount } from '../../flux/actions/moods';
// import * as store from '../../flux/store';

const Chart = () => {
  useEffect(() => {
    getMoodCount();
  });

  return <div>Chart</div>;
>>>>>>> 4bf43245435f4a94d1d572dc2080059714299048
};

export default Chart;
