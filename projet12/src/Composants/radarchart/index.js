import '../../Style/radarchart/index.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Services } from '../../bdd'
import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

export default function RadarChartSport() {
  const navigate = useNavigate()
  const services = new Services()
  const { id } = useParams()
  let [RadarData, setData] = useState()
  let [kinds, setKind] = useState()
  let [Values, setValues] = useState()
  useEffect(() => {
    /**
     * cette fonction permet de récurerer en faisans des apelles API, les différentes datas indispensables à l'affihage de la page.
     */
    async function getData() {
      const data = await services.getPerformanceById(id)

      if (data !== undefined) {
        setData(data)
        setKind(data.kind)
        getValues()
      } else {
        navigate('/')
      }
    }
    getData()

    function getValues() {
      setValues(
        RadarData.data.map((Value, index) => {
          return { value: Value.value, kind: kinds[Value.kind] }
        })
      )
    }
  })

  return (
    <div className="container">
      <RadarChart
        cx={150}
        cy={140}
        outerRadius={100}
        width={300}
        height={300}
        data={Values}
        fill="white"
      >
        <PolarGrid stroke="white" />
        <PolarAngleAxis dataKey="kind" />

        <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </div>
  )
}
