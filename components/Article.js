const Article = ({ article }) => {
	return (
		<div className="shadow p-5 rounded-md">
			<h1>{article.title}</h1>
			<p>{article.body}</p>
		</div>
	);
};

export default Article;
