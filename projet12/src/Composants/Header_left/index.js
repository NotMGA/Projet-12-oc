import '../../Style/header/index.css'
import icon1 from '../../Assets/icon1.png'
import icon2 from '../../Assets/icon2.png'
import icon3 from '../../Assets/icon3.png'
import icon4 from '../../Assets/icon4.png'
function Header_left() {
  return (
    <div className="Header_left">
      <div className="icons">
        <img src={icon1} alt="icon assie"></img>
        <img src={icon2} alt="icon natation"></img>
        <img src={icon3} alt="icon velo"></img>
        <img src={icon4} alt="icon haltere"></img>
      </div>
      <div className="txt_header-left">Copiryght, SportSee 2020</div>
    </div>
  )
}
export default Header_left
