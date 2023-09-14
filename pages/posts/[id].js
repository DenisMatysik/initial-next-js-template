import Link from "next/link";

//получение всех индексов постов
export async function getStaticPaths() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();

	const paths = data.slice(0, 10).map(post => {
		return {
			params: {id: String(post.id)},
		};
	});

	return {
		paths,
		fallback: true,
	};
}

//получение текущего индекса поста
export const getStaticProps = async context => {
	const id = context.params.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const data = await res.json();

	return {
		props: {
			post: data,
		},
	};
};

export default function Details({post}) {
	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
			<Link href="/posts">Back to all posts</Link>
		</div>
	);
}
