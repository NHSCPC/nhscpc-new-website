import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
	<div className="inline">
		<Head>
			<title>Newport Programming Club</title>
			<meta name="description" content="There's no donate button, so get lost."/>
			<link rel="icon" href="favicon.ico"/>
		</Head>
		<header>
			<NavBar/>
		</header>
		<main className="flex items-center justify-center relative m-auto">
			<h1 className="flex text-5xl font-bold text-center mt-4">
				Newport Programming Club
			</h1>
		</main>
			
		<footer className={styles.footer}>
		
		</footer>
	</div>
  )
}

export default Home
