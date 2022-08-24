import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import logo from '../public/npc.svg'

const Home: NextPage = () => {
  return (
	<div className="inline">
		<Head>
			<title>Newport High School Programming Club</title>
			<meta name="description" content="Welcome to Newport Programming Club."/>
			<link rel="icon" href="favicon.ico"/>
		</Head>
		<header>
			<NavBar/>
		</header>
		<main className="inline">
			<div className="flex bg-red-800 mx-0 mb-4 w-screen items-center justify-center h-96 border-b-black shadow-xl">
				<Image src={logo} width={900} alt="Newport Programming Club Logo"/>
			</div>
			<p className="text-2xl font-semibold text-center my-8">Welcome to Newport High School Programming Club! Here we help up and coming students who are interested in programming explore new things and hone their skills via programming competitions.</p>
		</main>
			
		<footer className={styles.footer}>
		
		</footer>
	</div>
  )
}

export default Home
