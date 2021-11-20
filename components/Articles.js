import Article from './Article';

const Articles = ({ articles }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
			{articles.map((article) => {
				return <Article key={article.id} article={article} />;
			})}
		</div>
	);
};

export default Articles;
