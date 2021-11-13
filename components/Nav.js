import Link from 'next/link';
import router from 'next/router';
import NavLink from './NavLink';

const Nav = () => {
	return (
		<nav className="bg-black text-white px-10 py-4 flex justify-center md:justify-start items-center">
			<ul className="flex items-center">
				<li className="mr-2">
					<NavLink href="/">Home</NavLink>
				</li>
				<li>
					<NavLink href="/about">About</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
