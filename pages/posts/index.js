import Link from "next/link";
import React from "react";

// получение с сервера всех постов
export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();

	return {
		props: {
			posts: data.slice(0, 10), //отображаю только 10 первых постов
		},
	};
};

const Posts = ({posts}) => {
	return (
		<>
			<h1>All posts</h1>
			{posts.map(post => {
				return (
					<Link
						key={post.id}
						href={`/posts/${post.id}`}>
						<div>
							<h3>{post.title.slice(0, 15)}...</h3>
						</div>
					</Link>
				);
			})}
		</>
	);
};

export default Posts;
