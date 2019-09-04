import React, { Component } from 'react';

import {GradientDefs, RadialChart, Hint} from 'react-vis';

export default class SimpleRadialChart extends Component {
  state = {
    value: false
  };
  render() {
    const {value} = this.state;
    return (
      <RadialChart
        className={'donut-chart-example'}
        innerRadius={70}
        radius={100}
        getAngle={d => d.id}
        data={[
          {
            label: 'Adwords',
            subLabel: 'Adwords',
            id: 2,
          },
          {id: 6},
          {id: 2},
        ]}
        onValueMouseOver={v => this.setState({value: v})}
        onSeriesMouseOut={v => this.setState({value: false})}
        width={200}
        height={200}
        padAngle={0.04}
      >
        {value !== false && <Hint value={value} />}
      </RadialChart>
    );
  }
}