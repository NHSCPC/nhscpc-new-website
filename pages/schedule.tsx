import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import logo from '../public/npc.svg'
import ScheduleData from "../src/Schedule";

const Schedule: NextPage = () => {
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
				<div className="flex bg-red-800 mx-0 mb-4 w-screen items-center justify-center border-b-black shadow-xl h-32">
					<h1 className="flex text-6xl font-bold text-center mt-4 text-yellow-500">
						Schedule
					</h1>
				</div>
				{ScheduleData.map((content, index) => {
					return (
						<div key={content.key}>
							<article>
								<h1 className="text-center font-bold text-4xl">
									{content.month} {content.day}, {content.year}
								</h1>
								<p className="text-center font-semibold text-2xl">
									{content.summary}
								</p>
							</article>
						</div>
					)
				})}
			</main>

			<footer className={styles.footer}>

			</footer>
		</div>
	)
}

export default Schedule
