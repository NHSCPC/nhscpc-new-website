import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import creditsData from "../src/Credits";

const Credits: NextPage = () => {
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
			<div className="flex bg-red-800 mx-0 mb-4 items-center justify-center border-b-black shadow-xl h-32">
				<h1 className="flex 2xl:text-6xl font-bold text-center mt-4 text-yellow-500 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
					Credits
				</h1>
			</div>
            <div className="flex items-center justify-center">
				<ul className="text-2xl font-semibold">
					{creditsData.map((content, index) => {
						return (
							<li key={content.key}>
								<div>
									<h1 className="text-center font-bold text-4xl">{content.name}</h1>
									<p className="text-center font-semibold text-2xl">{content.description}</p>
								</div>
							</li>
						)
					})}
				</ul>
            </div>
			
		</main>
	</div>
  )
}

export default Credits