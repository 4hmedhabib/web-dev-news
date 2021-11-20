import { ClockIcon } from '@heroicons/react/outline';
import Button from '../../../components/Button';
import Link from 'next/link';
import moment from 'moment';

const article = ({ article }) => {
	return (
		<div className="shadow p-5 rounded-md border-t-4 border-blue-500">
			<p className="text-sm mb-2 text-gray-500 flex items-center">
				<ClockIcon className="w-6 mr-1 text-blue-500" />
				{moment(Date()).format('LL')}
			</p>
			<h1 className="border-b pb-2 mb-2 font-bold capitalize text-lg">
				{article.title} - {article.id}
			</h1>
			<p className="mb-5">{article.body}</p>
			<Button>
				<Link href="/">Go Back</Link>
			</Button>
		</div>
	);
};

export const getStaticProps = async (context) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
	const article = await res.json();

	return {
		props: { article }
	};
};

export const getStaticPaths = async (context) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
	const articles = await res.json();

	const ids = articles.map((article) => article.id);

	const paths = ids.map((id) => ({
		params: {
			id: id.toString()
		}
	}));

	return {
		paths,
		fallback: false
	};
};

export default article;
