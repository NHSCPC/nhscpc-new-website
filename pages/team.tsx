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
                <div className="flex bg-red-800 mx-0 mb-4 items-center justify-center h-32 border-b-black shadow-xl">
                    <h1 className="flex 2xl:text-6xl font-bold text-center mt-4 text-yellow-500 xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl">
                        The Team
                    </h1>
                </div>
	            {Leadership.map((content, index) => {
		            return (
			            <div key={content.key} className="m-8">

					            <article className="2xl:m-16 xl:m-12 lg:m-8 md:m-6 sm:m-5">
						            <ConditionalWrapper condition={index == 3}>
							            <h1 className="m-4 text-center font-bold 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl">
								            <strong>{content.title}</strong> {content.name}
							            </h1>
							            <p className="m-4 2xl:text-2xl text-center whitespace-pre-line space-y-3 xl:text-2xl lg:text-xl lg:text-xl md:text-lg sm:text-base font-semibold">
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