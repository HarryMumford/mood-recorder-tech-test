import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootStore } from '../../flux/store';
import { getMoods } from '../../flux/actions/moods';
import { setPieData } from '../../services/setPieData';
import { PieProps } from './interface';

const StyledPie = styled.div<PieProps>`
  width: 250px;
  height: 250px;
  background-image: conic-gradient(${(props) => props.data});
  border-radius: 50%;
`;

const Pie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoods());
  }, []);

  const moodState = useSelector((state: RootStore) => state.mood);

  return (
    <>
      {moodState.mood ? (
        <StyledPie data={setPieData(moodState)} />
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default Pie;
