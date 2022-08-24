import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'
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
            <article className="my-16">
                <h1 className="mx-8 text-center font-semibold text-3xl">Website History</h1>
            <p className="mx-8 text-2xl indent-16">
                The website was developed by Matthew &quot;Forixaim&quot; Chai, who wanted to dabble a little into web development. As it turned out, he was interested in Next.js so he decided to develop his personal website from it. After his personal website was created, he decided to revamp his club&apos;s website and this website was the final product.
            </p>
            </article>
			<article>
                <h1 className="mx-8 text-center font-semibold text-3xl">Club History</h1>
                <p className="mx-8 text-2xl indent-16">
                    Matthew will let others deal with the club history since Matthew don&apos;t know much about the history of the club.
                </p>
            </article>
		</main>
	</div>
  )
}

export default History