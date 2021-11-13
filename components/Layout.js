import { Fragment } from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Nav />
			<div className="container flex justify-center w-full bg-gray-100 pt-10 ">
				<main>{children}</main>
			</div>
		</Fragment>
	);
};

export default Layout;
