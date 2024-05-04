// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onClickLogoutBtn = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <button onClick={onClickLogoutBtn} className="logout-button" type="button">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
