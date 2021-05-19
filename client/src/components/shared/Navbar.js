import { AuthConsumer } from "../../providers/AuthProvider";
import { Link, withRouter } from 'react-router-dom';

const Navbar = ({user, handleLogout, location, history }) => {
  
  const rightNavItems = () => {
    if (user) {
      return (
        <>
          <li onClick={ () => handleLogout(history) }>Logout</li>
        </>
      )
    } else {
      return (
        <>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/login'>
            <li>Login</li>
          </Link>
          <Link to='/register'>
            <li>Register</li>
          </Link>
        </>
      )
    }
  }
  
  return (
    <>
      <ul>
          { rightNavItems() }
      </ul>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer> 
    { auth => 
      <Navbar { ...props } { ...auth } />
    }
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar);