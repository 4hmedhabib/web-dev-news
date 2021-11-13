import Link from 'next/link';

const Nav = () => {
	return (
		<nav className="bg-black text-white px-10 py-2 md:justify-center items-center">
			<ul className="flex">
				<li className="hover:bg-white px-4 py-2 hover:p-4 hover:text-black rounded hover:rounded-2xl">
					<Link styl href="/">
						Home
					</Link>
				</li>
				<li className="hover:bg-white px-4 py-2 hover:p-4 hover:text-black rounded hover:rounded-full">
					<Link href="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
