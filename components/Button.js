const Button = ({ children }) => {
	return (
		<button className="bg-blue-500 text-white px-3 py-1 flex justify-center items-center rounded-full">
			{children}
		</button>
	);
};

export default Button;
