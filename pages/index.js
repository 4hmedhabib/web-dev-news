import Head from 'next/head';
import Header from '../components/Header';
import Articles from '../components/Articles';

export default function Home({ articles }) {
	return (
		<div>
			<Head>
				<title>Home || Web Dev News</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<h1 className="text-gray-600 border-b border-gray-200 pb-2 mb-5 ml-8 ">Latrest Posts</h1>
			<Articles articles={articles} />
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=50`);
	const articles = await res.json();

	return {
		props: { articles }
	};
}
