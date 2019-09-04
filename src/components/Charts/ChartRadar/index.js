import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

import { Flex } from 'atoms'

const data = [
  {
    subject: 'Adwords', A: 320, B: 110, fullMark: 400,
  },
  {
    subject: 'Facebook', A: 98, B: 170, fullMark: 480,
  },
  {
    subject: 'Instagram', A: 86, B: 130, fullMark: 200,
  },
  {
    subject: 'LinkedIn', A: 199, B: 100, fullMark: 150,
  },
  {
    subject: 'Yelp', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'YouTube', A: 165, B: 85, fullMark: 150,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/';

  render() {
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="Segment A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.36} />
        <Radar name="Segment B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        <Legend />
      </RadarChart>
    );
  }
}
