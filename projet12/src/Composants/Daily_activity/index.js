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
     * This function is use to get the data with API call
     */
    async function getData() {
      const data = await services.getActivityById(id)
      /**
       * Exemple data array =
       *  {"data":{
       *    "userId":12,
       *    "sessions":[
       *      {"day":"2020-07-01","kilogram":80,"calories":240},
       *      {"day":"2020-07-02","kilogram":80,"calories":220},
       *      {"day":"2020-07-03","kilogram":81,"calories":280},
       *      {"day":"2020-07-04","kilogram":81,"calories":290},
       *      {"day":"2020-07-05","kilogram":80,"calories":160},
       *      {"day":"2020-07-06","kilogram":78,"calories":162},
       *      {"day":"2020-07-07","kilogram":76,"calories":390}
       *    ]
       *   }
       * }
       */

      if (data !== undefined) {
        setActivity(data.sessions)
      } else {
        navigate('/')
      }
    }
    getData()
  })

  return (
    <div className="backgroud_daily">
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
          yAxisId="right"
          type="number"
          domain={['dataMin - 1', 'dataMax + 1']}
          dataKey="kilogram"
        />
        <YAxis
          axisLine={false}
          yAxisId="left"
          orientation="left"
          type="number"
          dataKey="calories"
          display="none"
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
          yAxisId="right"
          dataKey="kilogram"
          fill="black"
        />
        <Bar
          barSize={10}
          yAxisId="left"
          radius={[10, 10, 0, 0]}
          dataKey={'calories'}
          fill="red"
        />
      </BarChart>
    </div>
  )
}
