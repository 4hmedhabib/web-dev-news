import { Fragment } from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Nav />
			<div className="px-10 flex justify-center py-10 ">
				<main>{children}</main>
			</div>
		</Fragment>
	);
};

export default Layout;
