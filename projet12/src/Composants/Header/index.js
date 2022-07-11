import logo from '../../Assets/Logo.PNG'
import '../../Style/header/index.css'
function header() {
  return (
    <div className="header">
      <div className="LogoPtxt">
        <img src={logo} alt="Logo du site " className="logo"></img>
        <span className="Logotxt">SportSee</span>
      </div>
      <span className="menutxt">Acueil</span>
      <span className="menutxt">Profil</span>
      <span className="menutxt">Réglage</span>
      <span className="menutxt">Communauté</span>
    </div>
  )
}

export default header
