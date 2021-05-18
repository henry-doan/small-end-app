import { Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Welcome from './components/shared/Welcome';
import Navbar from './components/shared/Navbar';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/welcome" component={Welcome} />
      </Switch>
    </FetchUser>
  </>
)

export default App;