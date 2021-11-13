import { Fragment } from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Nav />
			<div className="container flex justify-center pt-16">
				<main>{children}</main>
			</div>
		</Fragment>
	);
};

export default Layout;
