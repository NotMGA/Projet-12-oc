import '../../Style/radarchart/index.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Services } from '../../bdd'
import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'

export default function RadarChartSport() {
  const navigate = useNavigate()
  const services = new Services()
  const { id } = useParams()
  let [RadarData, setData] = useState()
  let [kinds, setKind] = useState()
  let [Values, setValues] = useState()
  useEffect(() => {
    /**
     * This function is use to get the data with API call
     */
    async function getData() {
      const data = await services.getPerformanceById(id)
      /**
       * exemple data array =
       * {"data":{
       *  "userId":12,
       *  "kind":{
       *    "1":"cardio",
       *    "2":"energy",
       *    "3":"endurance",
       *    "4":"strength",
       *    "5":"speed",
       *    "6":"intensity"},
       *    "data":[
       *      {"value":80,"kind":1},
       *      {"value":120,"kind":2},
       *      {"value":140,"kind":3},
       *      {"value":50,"kind":4},
       *      {"value":200,"kind":5},
       *      {"value":90,"kind":6}
       *     ]
       *    }
       *   }
       */

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
      /** This function is use to rename some values  */
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
        cx={160}
        cy={140}
        outerRadius={100}
        width={330}
        height={300}
        data={Values}
        fill="white"
      >
        <PolarGrid stroke="white" radialLines={false} />
        <PolarAngleAxis dataKey="kind" />

        <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </div>
  )
}
