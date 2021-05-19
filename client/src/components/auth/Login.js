import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';

const Login = ({ handleLogin, history }) => {
  const [user, setUser] = useState({ email: '', password: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user, history);
  }
  
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label for='email'>Email</label>
        <input
          type='email'
          autoFocus
          required  
          id='email'       
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label for='password'>Password</label>
        <input
          type='password'
          required
          id='password'
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type='submit'>Login</button>
      </form>
      <Link to="/register">
        <button>New User Sign Up</button>
      </Link>
    </>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { auth => <Login {...props} {...auth} />}
  </AuthConsumer>
)

export default ConnectedLogin;