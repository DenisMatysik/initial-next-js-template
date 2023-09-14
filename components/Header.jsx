import Link from "next/link";

const Header = () => {
	return (
		<header>
			<h1>Site header</h1>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/about">About us</Link>
				<Link href="/posts">Posts</Link>
			</nav>
		</header>
	);
};

export default Header;
