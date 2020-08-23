// import { PieChart } from 'react-minimal-pie-chart';
import * as React from 'react';
import { useEffect } from 'react';
import { getMoodCount } from '../../flux/actions/moods';
// import * as store from '../../flux/store';

const Chart = () => {
  useEffect(() => {
    getMoodCount();
  });

  return <div>Chart</div>;
};

export default Chart;
