import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ children, href }) => {
	const router = useRouter();

	return (
		<Link href={href}>
			<a
				className={` hover:bg-white px-4 py-2 hover:p-4 hover:text-black rounded hover:rounded-2xl ${router.pathname ===
				href
					? ' bg-white text-black '
					: ''}`}
			>
				{children}
			</a>
		</Link>
	);
};

export default NavLink;
