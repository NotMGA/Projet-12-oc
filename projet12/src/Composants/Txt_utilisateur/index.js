import '../../Style/txt_utilisateur/index.css'

function TxtUtilisateur(props) {
  return (
    <div className="container_txt">
      <div className="txt_l1">
        Bonjours <span className="red">{props.name}</span>{' '}
      </div>
      <div className="txt_l2">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </div>
  )
}
export default TxtUtilisateur

/**
 * @param {string} name - name of the user .
 */
