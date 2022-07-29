import '../../Style/Daily_activity/index.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Services } from '../../bdd'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

export default function App() {
  const navigate = useNavigate()
  const services = new Services()
  const { id } = useParams()
  let [Datasactivity, setActivity] = useState()

  useEffect(() => {
    /**
     * cette fonction permet de récurerer en faisans des apelles API, les différentes datas indispensables à l'affihage de la page.
     */
    async function getData() {
      const data = await services.getActivityById(id)

      if (data !== undefined) {
        setActivity(data.sessions)
      } else {
        navigate('/')
      }
    }
    getData()
  })

  return (
    <div>
      <label>Activité quotidienne</label>
      <BarChart
        width={900}
        height={300}
        data={Datasactivity}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis
          axisLine={false}
          orientation="right"
          type="number"
          domain={['dataMin - 1', 'dataMax + 1']}
          dataKey="kilogram"
        />
        <Tooltip />
        <Legend
          payload={[
            { id: 'pv', value: 'Poids(kg)', type: 'point', color: 'black' },
            {
              id: 'uv',
              value: 'Calories Brûléés(kCal)',
              type: 'point',
              color: 'red',
            },
          ]}
          formatter={(value, entry, index) => (
            <span className="text-color-class">{value}</span>
          )}
          wrapperStyle={{ top: -20, left: 200 }}
        />
        <Bar
          barSize={10}
          radius={[10, 10, 0, 0]}
          dataKey="kilogram"
          fill="black"
        />
        <Bar
          barSize={10}
          radius={[10, 10, 0, 0]}
          dataKey={'calories'}
          fill="red"
        />
      </BarChart>
    </div>
  )
}
