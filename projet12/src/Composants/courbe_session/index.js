import '../../Style/courbe_session/index.css'
import React from 'react'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from 'recharts'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Services } from '../../bdd'

export default function App() {
  const navigate = useNavigate()
  const services = new Services()
  const { id } = useParams()
  let [TimeDatas, setTimedata] = useState()
  let [TimeData, setTime] = useState()
  let jours = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  useEffect(() => {
    /**
     * This function is use to get the data with API call
     */
    async function getData() {
      const data = await services.getSessionById(id)
      /**
       * exemple data array =
       * {"data":
       *  {"userId":12,
       *   "sessions":[
       *     {"day":1,"sessionLength":30},
       *     {"day":2,"sessionLength":23},
       *     {"day":3,"sessionLength":45},
       *     {"day":4,"sessionLength":50},
       *     {"day":5,"sessionLength":0},
       *     {"day":6,"sessionLength":0},
       *     {"day":7,"sessionLength":60}
       *    ]
       *   }
       *  }
       */
      if (data !== undefined) {
        setTimedata(data.sessions)
        gettime()
      } else {
        navigate('/')
      }
    }
    getData()
  })

  function gettime() {
    /**
     * This function is use to display the day insted of a number
     */
    setTime(
      TimeDatas.map((Value, index) => {
        return {
          Day: jours[Value.day - 1],
          sessionLength: Value.sessionLength,
        }
      })
    )
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}min`}</p>
        </div>
      )
    }

    return null
  }
  return (
    <div className="container_courbe">
      <div className="courbe_title">Durée moyenne des sessions</div>
      <AreaChart
        width={330}
        height={240}
        data={TimeData}
        name="test"
        margin={{
          top: 0,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid stroke="0" fill="red" />
        <XAxis
          interval={0}
          dataKey="Day"
          axisLine={false}
          tickLine={false}
          stroke="white"
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          // fill="#F69C9C"
          fill="red"
        />
      </AreaChart>
    </div>
  )
}
