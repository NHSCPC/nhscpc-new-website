import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/NavBar.module.css'

const NavBar = () => {
	return (
		<nav className="bg-gray-700 block m-0 p-0 overflow-hidden px-5 border-b-4 border-black">
			<div>
				<Link href="/"><a className={navStyles.navButton}>Home</a></Link>
				<Link href="projects"><a className={navStyles.navButton}>Projects</a></Link>
				<Link href="contact"><a className={navStyles.navButton}>Contact</a></Link>
				<Link href="donate"><a className={navStyles.navButton}>Donate</a></Link>
				<Link href="about"><a className={navStyles.navButton}>About</a></Link>
			</div>
		</nav>
	)
}
export default NavBar