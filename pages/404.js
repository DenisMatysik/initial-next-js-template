import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Image from "next/image";

const NotFoundPage = () => {
	// Автоматическое перенаправление на главную страницу
	// const router = useRouter();
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		router.push("/");
	// 	}, 3000);
	// }, []);
	// --------------------------------------------------

	return (
		<div className="not-found">
			<h2>Page not found</h2>
			<Image
				src="/error404.png"
				alt="error_404"
				width={64}
				height={64}
			/>
			<p>
				Go to <Link href="/"> main page</Link>
			</p>
		</div>
	);
};

export default NotFoundPage;
