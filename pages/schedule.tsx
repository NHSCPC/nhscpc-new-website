import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'
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
				<div className="flex bg-red-800 mx-0 mb-4 items-center justify-center border-b-black shadow-xl h-32">
					<h1 className="flex 2xl:text-6xl font-bold text-center mt-4 text-yellow-500 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
						Schedule
					</h1>
				</div>
				{ScheduleData.map((content, index) => {
					return (
						<div key={content.key}>
							<article className="2xl:m-16 xl:m-12 lg:m-8 md:m-6 sm:m-5">
								<h1 className="m-4 text-center font-bold 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl">
									{content.month} {content.day}<sup>{content.ss}</sup>, {content.year}
								</h1>
								<p className="m-4 2xl:text-2xl text-center whitespace-pre-line space-y-3 xl:text-2xl lg:text-xl lg:text-xl md:text-lg sm:text-base font-semibold">
									{content.summary}
								</p>
							</article>
						</div>
					)
				})}
			</main>
		</div>
	)
}

export default Schedule
