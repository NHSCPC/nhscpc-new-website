import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Leadership from "../src/Leadership";
import ConditionalWrapper from "../components/ConditionalWrapper";

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
                        The Team
                    </h1>
                </div>
	            {Leadership.map((content, index) => {
		            return (
			            <div key={content.key} className="m-8">

					            <article className="m-16">
						            <ConditionalWrapper condition={index == 3}>
							            <h1 className="m-4 text-center font-semibold text-3xl">
								            <strong>{content.title}</strong> {content.name}
							            </h1>
							            <p className="m-4 text-2xl text-center">
								            {content.description}
							            </p>
						            </ConditionalWrapper>
					            </article>
			            </div>
		            )

	            })}
            </main>
        </div>
    )
}

export default History