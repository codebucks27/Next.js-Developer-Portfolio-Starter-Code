import Link from "next/link"
import Logo from "./Logo"

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 front-medium flex items-center justify-betweem'>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/articles">Articles</Link>
        </nav>
        <Logo/>
        <nav>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
        </nav>
    </header>
  )
}

export default NavBar