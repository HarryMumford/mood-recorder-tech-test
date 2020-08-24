// import { PieChart } from 'react-minimal-pie-chart';
import * as React from 'react';
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
};

export default Chart;
