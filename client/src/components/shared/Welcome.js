import { AuthConsumer } from '../../providers/AuthProvider';

const Welcome = () => (
  <>
    <AuthConsumer>
      { value => (
        <h1>Welcome {value.user.first_name} {value.user.last_name}!</h1>
      )}
    </AuthConsumer>
  </>
)

export default Welcome;