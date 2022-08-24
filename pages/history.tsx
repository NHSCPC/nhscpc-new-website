import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import historyData from "../src/History";
const History: NextPage = () => {
  return (
	<div className="inline">
		<Head>
			<title>Newport High School Programming Club</title>
			<meta name="description" content="The history behind the club's new website (oh and the club as well)."/>
			<link rel="icon" href="favicon.ico"/>
		</Head>
		<header>
			<NavBar/>
		</header>
		<main className="inline">
			<div className="flex bg-red-800 mx-0 mb-4 w-screen items-center justify-center h-32 border-b-black shadow-xl">
				<h1 className="flex text-6xl font-bold text-center mt-4 text-yellow-500">
					History
				</h1>
			</div>
			{historyData.map((content, index) => {
				return (
					<div key={content.key}>
						<article className="m-16">
							<h1 className="m-8 text-center font-bold text-4xl">
								{content.category}
							</h1>
							<p className="m-8 text-2xl text-center font-semibold">
								{content.content}
							</p>
						</article>
					</div>
				)
			})}
		</main>
	</div>
  )
}

export default History