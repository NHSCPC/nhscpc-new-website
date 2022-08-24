import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

const Oops404: NextPage = () => {
	return (
		<div className="inline">
			<Head>
				<title>Newport High School Programming Club</title>
				<meta name="description" content="There's no donate button, so get lost."/>
				<link rel="icon" href="favicon.ico"/>
			</Head>
			<header>
				<NavBar/>
			</header>
			<main className="inline">
				<div className="flex bg-red-800 mx-0 mb-4 w-screen items-center justify-center border-b-black shadow-xl h-32">
					<h1 className="flex text-6xl font-bold text-center mt-4 text-yellow-500">
						Oops!
					</h1>
				</div>
				<div className="flex text-3xl items-center justify-center h-96">
					<p>Did you have a typo? 404 Page not found or under construction.</p>
				</div>

			</main>

			<footer className={styles.footer}>

			</footer>
		</div>
	)
}

export default Oops404