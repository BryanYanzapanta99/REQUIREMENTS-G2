import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';



const userCredentials = {};

export default function LoginPage() {
	const location = useLocation();
	const { login } = useAuth();

	return (
		<div>
			<h1>Iniciar Sesion</h1>
			<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={() => login(userCredentials, location.state?.from)} variant="primary" type="submit">
        Acceder
      </Button>
    </Form>
		</div>
	);
}
