import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/NavBar.module.css'

const NavBar = () => {
	return (
		<nav className="bg-gray-700 block m-0 p-0 overflow-hidden px-5 border-black shadow-md">
			<div>
				<Link href="/"><a className={navStyles.navButton}>Home</a></Link>
				<Link href="schedule"><a className={navStyles.navButton}>Schedule</a></Link>
				<Link href="history"><a className={navStyles.navButton}>History</a></Link>
				<Link href="team"><a className={navStyles.navButton}>Team</a></Link>
				<Link href="credits"><a className={navStyles.navButton}>Credits</a></Link>
			</div>
		</nav>
	)
}
export default NavBar