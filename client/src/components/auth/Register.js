import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";

const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '' }) 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordConfirmation) {
      handleRegister(user, history);
     } else {
      alert('Passwords Do Not Match!')
     }
  }
  
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label for='email'>Email</label>
        <input
          required
          autoFocus
          id='email'       
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e, { value }) => setUser({ ...user, email: value })}
        />
        <label for='password'>Password</label>
        <input
          required
          id='password'
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e, { value }) => setUser({ ...user, password: value })}
        />
        <label for='passwordConfirm'>passwordConfirm</label>
        <input
          required
          id='passwordConfirm'
          name='passwordConfirmation'
          value={user.passwordConfirmation}
          placeholder='Password Confirmation'
          type='password'
          onChange={(e, { value }) => setUser({ ...user, passwordConfirmation: value })}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => <Register { ...props } {...auth} /> }
  </AuthConsumer>
)

export default ConnectedRegister;