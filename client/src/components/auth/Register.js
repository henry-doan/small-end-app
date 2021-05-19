import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";

const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', nickname: '', birthdate: new Date(), email: '', password: '', passwordConfirmation: '' }) 
  
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
        <label for='fName'>First Name</label>
        <input
          required
          autoFocus
          id='fName'       
          name='first_name'
          value={user.first_name}
          placeholder='first name'
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
        />
        <label for='lName'>Last Name</label>
        <input
          required
          autoFocus
          id='lName'       
          name='last_name'
          value={user.last_name}
          placeholder='last name'
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
        />
        <label for='username'>Username</label>
        <input
          required
          autoFocus
          id='username'       
          name='nickname'
          value={user.nickname}
          placeholder='Username'
          onChange={(e) => setUser({ ...user, nickname: e.target.value })}
        />
        <label for='birthdate'>Birthdate</label>
        <input
          required
          autoFocus
          id='birthdate'       
          name='birthdate'
          value={user.birthdate}
          type='date'
          onChange={(e) => setUser({ ...user, birthdate: e.target.value })}
        />
        <label for='email'>Email</label>
        <input
          required
          autoFocus
          id='email'       
          name='email'
          type='email'
          value={user.email}
          placeholder='Email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label for='password'>Password</label>
        <input
          required
          id='password'
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <label for='passwordConfirm'>passwordConfirm</label>
        <input
          required
          id='passwordConfirm'
          name='passwordConfirmation'
          value={user.passwordConfirmation}
          placeholder='Password Confirmation'
          type='password'
          onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
        />
        <button type='submit'>Sign Up</button>
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