// import { PieChart } from 'react-minimal-pie-chart';
import * as React from 'react';
import { useEffect } from 'react';
import { getMoodCount } from '../../flux/actions/moods';

const Chart = () => {
  useEffect(() => {
    getMoodCount();
  });

  return <div>Chart</div>;
};

export default Chart;
