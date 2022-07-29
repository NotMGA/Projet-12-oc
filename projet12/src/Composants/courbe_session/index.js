import '../../Style/courbe_session/index.css'
import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
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
     * cette fonction permet de récurerer en faisans des apelles API, les différentes datas indispensables à l'affihage de la page.
     */
    async function getData() {
      const data = await services.getSessionById(id)

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
  console.log(TimeData)
  return (
    <div className="container_courbe">
      <div className="courbe_title">Durée moyenne des sessions</div>
      <AreaChart
        width={300}
        height={240}
        data={TimeData}
        name="test"
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid stroke="0" fill="red" />
        <XAxis interval={0} dataKey="Day" />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="sessionLength"
          stroke="red"
          fill="#F69C9C"
        />
      </AreaChart>
    </div>
  )
}

/**
 * Represents a img and txt for calories , proteine , glucide, lipide.
 * @param {string} img - The image of the stat.
 * @param {string} stat - The stat of the user.
 * @param {string} label - The name of the stat.
 */
