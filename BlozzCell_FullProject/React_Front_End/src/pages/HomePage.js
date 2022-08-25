import { Container, Row, Col } from 'react-bootstrap';
import LoginPage from './LoginPage';

export default function HomePage() {
	return (
		<Container>
			<Row className="mt-5">
				<Col xs={{ span: 12}} md={{ span: 6 }} className="mb-5">
					<img
                        className="img-fluid"
                        src="/img/task-manager.svg"
                        alt="gestor-de-tareas"
                    />
    			
				</Col>
                <Col>
                <LoginPage/>    
				
                </Col>
			</Row>
		</Container>
	);
}
