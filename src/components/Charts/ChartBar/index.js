import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Services', PageA: 4000, PageB: 2400, amt: 2400,
  },
  {
    name: 'Funnel', PageA: 3000, PageB: 1398, amt: 2210,
  },
  {
    name: 'Contact', PageA: 2000, PageB: 8, amt: 2290,
  },
  {
    name: 'Page D', PageA: 2780, PageB: 3908, amt: 2000,
  },
  {
    name: 'Page E', PageA: 18, PageB: 4800, amt: 2181,
  },
  {
    name: 'Page F', PageA: 2390, PageB: 3800, amt: 2500,
  },
  {
    name: 'Page G', PageA: 3490, PageB: 4300, amt: 2100,
  },
];

const renderCustomizedLabel = (props) => {
  const {
    x, y, width, height, value,
  } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value.split(' ')[1]}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/a5Leskck/';

  render() {
    return (
      <ResponsiveContainer>
      <BarChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="PageB" fill="#8884d8" minPointSize={5}>
          {/* <LabelList dataKey="name" content={renderCustomizedLabel} /> */}
        </Bar>
        <Bar dataKey="PageA" fill="#82ca9d" minPointSize={10} />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
