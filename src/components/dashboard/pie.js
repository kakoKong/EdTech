import * as React from 'react';
import {
  Chart,
  PieSeries,
  Title,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation} from '@devexpress/dx-react-chart';
import { Palette } from '@devexpress/dx-react-chart';

const data = [
  { part: 'Coursework: 20%', percentage: 20},
  { part: 'Exam: 60%', percentage: 60},
  { part: 'ClassTest: 20%', percentage: 20},
];

const palettes = ['#354551', '#2A8CAE', '#90B0C0'] 
export default class PieChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }


  render() {
    const { data: chartData } = this.state;

    return (
        <Chart
          data={chartData}
        >
          <Palette scheme={palettes} />
          <PieSeries
            valueField="percentage"
            argumentField="part"
            innerRadius={0.6}
          />
          <Animation />
          <Legend 
            position="bottom"
          />

          <Title
            text="Course Structure"
          />
        </Chart>
    );
  }
}