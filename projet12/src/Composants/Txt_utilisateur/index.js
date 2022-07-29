import '../../Style/txt_utilisateur/index.css'

function TxtUtilisateur(props) {
  // name recovery from Bdd

  return (
    <div className="container_txt">
      <div className="txt_l1">Bonjours {props.name} </div>
      <div className="txt_l2">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </div>
  )
}
export default TxtUtilisateur
