import styles from "../styles/Home.module.css";
import Head from "next/head";

//для отображения данных с сервера встроенного в newxt.js, т.е. по текущему localhost
// данные беруться с папки api

export const getServerSideProps = async () => {
	try {
		// const response = await fetch(`${process.env.API_HOST}/socials`);
		const response = await fetch("http://localhost:3000/api/socials");
		const data = await response.json();

		if (!data) {
			return {
				notFound: true,
			};
		}

		return {
			props: {socials: data},
		};
	} catch {
		return {
			props: {socials: null},
		};
	}
};

export default function Home({socials}) {
	return (
		<>
			<Head>
				<title>'Some title' | Main</title>
				<meta
					name="title"
					content="Site content"
				/>
			</Head>
			<div>
				<h1>Some information in main page</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae molestias veniam soluta placeat explicabo praesentium odio minima hic. Quod
					consectetur neque soluta dolorum nam, ipsam ab quas ipsum? Odio nulla quo sed deserunt, debitis sint pariatur nemo nobis, qui atque minima
					fuga vel quas illum necessitatibus quia. Facere animi accusamus hic aliquid omnis, rerum alias?
				</p>
				<h4>Get data from next.js api</h4>
				{!!socials.length &&
					socials.map(el => {
						return (
							<div key={el.id}>
								{el.id} {el.icon}
							</div>
						);
					})}
			</div>
		</>
	);
}
