import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title = 'Education Programs' }) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<div className="app">
			<header>
				<h1>
					<Link href={{ pathname: '/' }}>Home</Link>
				</h1>
				<h2>Programs</h2>
			</header>
			{children}
			<footer>Footer</footer>
		</div>
		<style global jsx>{`
			:root {
				--green: #65c5d9;
				--white: #f4f5f7;
				--light-gray: #eaeeef;
			}
			... body {
				...;
			}
		`}</style>
		<style jsx>{`
			header {
				...;
			}
			header h1 a {
				...;
			}
			h2 {
				....;
			}
			footer {
				...;
			}
		`}</style>
	</div>
);
