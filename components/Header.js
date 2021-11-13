const Header = () => {
	return (
		<div className="mb-10 px-20 py-10 bg-blue-50 shadow-lg rounded-lg text-center hover:shadow-inner hover:bg-white cursor-pointer  border-blue-50 hover:border-gray-300 transition ease-out duration-500">
			<h1 className="text-4xl py-4 md:text-6xl font-bold">
				<span className="text-blue-700">Web Dev</span> News
			</h1>
			<p className="text-gray-600 capitalize">Keep up to date with the latest web dev news</p>
		</div>
	);
};

export default Header;
