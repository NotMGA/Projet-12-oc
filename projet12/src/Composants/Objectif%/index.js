import '../../Style/Objectif%/index.css'
import React from 'react'

import { PieChart, Pie, Label, Cell } from 'recharts'

function NormalPieChart(props) {
  const data = [
    { name: 'Done', value: props.value * 100 },
    { name: 'Left', value: 100 - props.value * 100 },
  ]

  return (
    <div className="container_objectif">
      <div className="objectif_title">Score</div>
      <PieChart width={230} height={170}>
        <Pie
          startAngle={-270}
          data={data}
          cx="50%"
          cy="50%"
          dataKey="value"
          innerRadius={70}
          outerRadius={80}
        >
          {data.map((entry, index) => {
            if (index === 1) {
              return (
                <Cell
                  key={`cell-${index}`}
                  radius={[10, 10, 10, 10]}
                  fill="#f3f6f9"
                />
              )
            }
            return <Cell key={`cell-${index}`} fill="red" />
          })}
          <Label
            value={data[0].value + '%'}
            position="center"
            fill="black"
            style={{
              fontSize: '25px',
              fontWeight: 'bold',
            }}
          />
        </Pie>
      </PieChart>
      <div className="txt-pourc">de vorte objectif</div>
    </div>
  )
}

export default NormalPieChart

/**
 * Represents a img and txt for calories , proteine , glucide, lipide.
 * @param {string} value - Number of the obectif done  .
 */
