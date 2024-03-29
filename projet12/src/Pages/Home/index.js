import Headers from '../../Composants/Header/index.js'
import HeaderLeft from '../../Composants/Header_left/index.js'
import TxtUtilisateur from '../../Composants/Txt_utilisateur/index.js'
import '../../Style/page_home/index.css'
import DailyActivity from '../../Composants/Daily_activity/index.js'
import CourbeSession from '../../Composants/courbe_session/index.js'
import RadarChartSport from '../../Composants/radarchart/index.js'
import BoxStats from '../../Composants/box_stats/index.js'
import calorie_img from '../../Assets/cal.png'
import gluc_img from '../../Assets/gluc.png'
import lip_img from '../../Assets/lipi.png'
import prot_img from '../../Assets/prot.png'
import NormalPieChart from '../../Composants/Objectif%/index'
import { Services } from '../../bdd'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const services = new Services()
  let [name, setName] = useState()
  let [calories, setCal] = useState()
  let [proteines, setProt] = useState()
  let [glucides, setGluc] = useState()
  let [lipides, setLipi] = useState()
  let [objectif, setObjectif] = useState()
  const { id } = useParams()

  useEffect(() => {
    /**
     * This function is use to get the data with API call
     */
    async function getData() {
      const data = await services.getGeneralInfoById(id)
      // array data exemple  = {
      // "id":12,
      // "userInfos":{
      //   "firstName":"Karl",
      //   "lastName":"Dovineau",
      //   "age":31},"
      //   todayScore":0.12,
      //   "keyData":{
      //     "calorieCount":1930,
      //     "proteinCount":155,
      //     "carbohydrateCount":290,
      //     "lipidCount":50
      //   }}

      if (data !== undefined) {
        setName(data.userInfos.firstName)
        setCal(data.keyData.calorieCount)
        setProt(data.keyData.proteinCount)
        setGluc(data.keyData.carbohydrateCount)
        setLipi(data.keyData.lipidCount)
        setObjectif(data.todayScore != null ? data.todayScore : data.score)
      } else {
        navigate('/')
      }
    }
    getData()
  })

  return (
    <div>
      <Headers />
      <HeaderLeft />
      <div className="container_stats">
        <TxtUtilisateur name={name} />
        <div className="container_1">
          <div>
            <DailyActivity />
            <div className="container_session_sport">
              <CourbeSession />
              <RadarChartSport />
              <NormalPieChart value={objectif} />
            </div>
          </div>
          <div>
            <BoxStats
              img={calorie_img}
              stat={calories + 'kCal'}
              label="Calories"
            />
            <BoxStats img={prot_img} stat={proteines + 'g'} label="Proteine" />
            <BoxStats img={gluc_img} stat={glucides + 'g'} label="Glucide" />
            <BoxStats img={lip_img} stat={lipides + 'g'} label="Lipide" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
