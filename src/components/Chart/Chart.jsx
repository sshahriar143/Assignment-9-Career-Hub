import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ marks }) => {

  const renderLabel = (entry) => {
    return entry.assignment_name;
  }

  const renderTooltip = (props) => {
    const { payload } = props;
    if (payload && payload.length) {
      const { assignment_marks } = payload[0].payload;
      return (
        <div style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
          <p style={{ margin: 0 }}>{assignment_marks}</p>
        </div>
      );
    }
    return null;
  }
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="assignment_marks"
          isAnimationActive={true}
          data={marks}
          cx="50%"
          cy="50%"
          outerRadius={120}
          label={renderLabel}
          fill='#4338CA'
        />
        <Tooltip content={renderTooltip} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
