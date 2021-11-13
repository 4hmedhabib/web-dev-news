import { ClockIcon, EyeIcon } from '@heroicons/react/outline';
import moment from 'moment';
import Button from './Button';
import Link from 'next/link';

const Article = ({ article }) => {
	return (
		<div className="shadow p-5 rounded-md border-t-4 border-blue-500">
			<p className="text-sm mb-2 text-gray-500 flex items-center">
				<ClockIcon className="w-6 mr-1 text-blue-500" />
				{moment(Date()).format('LL')}
			</p>
			<h1 className="border-b pb-2 mb-2 font-bold capitalize text-lg">{article.title}</h1>
			<p className="mb-5">{article.body}</p>
			<Button>
				<Link href="/article/[id]" as={`/article/${article.id}`}>
					More
				</Link>
			</Button>
		</div>
	);
};

export default Article;
