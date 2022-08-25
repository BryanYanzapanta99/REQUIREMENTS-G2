import Navigation from '../Navigation';
import LoginFace from '../LoginFace'

export default function Layout({ children }) {
	
	return (
		<>
			<LoginFace />
            {children}
		</>
	);
}
