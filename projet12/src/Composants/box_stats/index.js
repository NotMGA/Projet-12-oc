import '../../Style/boxstats/index.css'
import img1 from '../../Assets/prot.png'
import Bdd from '../../bdd/index.js'
function BoxStats(props) {
  return (
    <div className="container_box">
      <img src={props.img} alt="calorie"></img>
      <div className="stats_label">
        <span className="txt_stat">{props.stat}</span>
        <span className="txt_label">{props.label}</span>
      </div>
    </div>
  )
}
BoxStats.defaultProps = {
  stat: '1.5kal',
  label: 'calorie',
}
export default BoxStats

/**
 * Represents a img and txt for calories , proteine , glucide, lipide.
 * @param {string} img - The image of the stat.
 * @param {string} stat - The stat of the user.
 * @param {string} label - The name of the stat.
 */
